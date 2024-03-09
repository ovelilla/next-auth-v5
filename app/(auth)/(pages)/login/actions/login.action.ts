"use server";
// Vendors
import { AuthError } from "next-auth";
// Auth
import { signIn } from "@/auth";
// Libs
import { db } from "@/lib/db";
// Routes
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
// Schemas
import { LoginSchema } from "../schemas/login.schema";
// Types
import { LoginActionPropsType } from "./types/login-props.action.types";
import { LoginActionReturnType } from "./types/login-return.action.types";
// Utils
import { generateTwoFactorToken } from "../../../utils/token/generate-two-factor-token.util";
import { generateVerificationToken } from "../../../utils/token/generate-verification-token.util";
import { sendTwoFactorTokenEmail } from "../../../utils/email/send-two-factor-token-email.utils";
import { sendVerificationTokenEmail } from "../../../utils/email/send-verification-token-email.util";

export const loginAction = async ({
  values,
}: LoginActionPropsType): Promise<LoginActionReturnType | undefined> => {
  const validatedFields = LoginSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields" };
  }

  const { email, password, code } = validatedFields.data;

  const existingUser = await db.user.findUnique({
    where: {
      email,
    },
  });

  if (!existingUser || !existingUser.email || !existingUser.password) {
    return { error: "Email does not exist" };
  }

  if (!existingUser.emailVerified) {
    const verificationToken = await generateVerificationToken(
      existingUser.email
    );

    await sendVerificationTokenEmail({
      email: verificationToken.email,
      token: verificationToken.token,
    });

    return { success: "Confirmation email sent" };
  }

  if (existingUser.isTwoFactorEnabled && existingUser.email && !code) {
    const twoFactorToken = await generateTwoFactorToken(existingUser.email);

    await sendTwoFactorTokenEmail({
      email: twoFactorToken.email,
      token: twoFactorToken.token,
    });

    return { twoFactor: true };
  }

  if (existingUser.isTwoFactorEnabled && existingUser.email && code) {
    const twoFactorToken = await db.twoFactorToken.findFirst({
      where: {
        email: existingUser.email,
      },
    });

    if (!twoFactorToken) {
      return { error: "Invalid code!" };
    }

    if (twoFactorToken.token !== code) {
      return { error: "Invalid code!" };
    }

    const hasExpired = new Date(twoFactorToken.expires) < new Date();

    if (hasExpired) {
      return { error: "Code expired!" };
    }

    await db.twoFactorToken.delete({
      where: { id: twoFactorToken.id },
    });

    const existingConfirmation = await db.twoFactorConfirmation.findUnique({
      where: { userId: existingUser.id },
    });

    if (existingConfirmation) {
      await db.twoFactorConfirmation.delete({
        where: { id: existingConfirmation.id },
      });
    }

    await db.twoFactorConfirmation.create({
      data: {
        userId: existingUser.id,
      },
    });
  }

  try {
    await signIn("credentials", {
      email,
      password,
      redirectTo: DEFAULT_LOGIN_REDIRECT,
    });
  } catch (error) {
    if (error instanceof AuthError && error.type === "CredentialsSignin") {
      return { error: "Invalid credentials" };
    }
    throw error;
  }
};
