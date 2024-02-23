"use server";
// Vendors
import { AuthError } from "next-auth";
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
import { generateVerificationToken } from "../../utils/token/generate-verification-token.util";
import { sendVerificationEmail } from "../../utils/email/send-verification-token.util";

export const loginAction = async ({
  values,
  urlCallback,
}: LoginActionPropsType): Promise<LoginActionReturnType | undefined> => {
  const validatedFields = LoginSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields!" };
  }

  const { email, password } = validatedFields.data;

  try {
    const existingUser = await db.user.findUnique({
      where: {
        email,
      },
    });

    if (!existingUser || !existingUser.email || !existingUser.password) {
      return { error: "Email does not exist!" };
    }

    if (!existingUser.emailVerified) {
      const verificationToken = await generateVerificationToken(
        existingUser.email
      );

      await sendVerificationEmail(
        verificationToken.email,
        verificationToken.token
      );

      return { success: "Confirmation email sent!" };
    }

    await signIn("credentials", {
      email,
      password,
      redirectTo: urlCallback || DEFAULT_LOGIN_REDIRECT,
    });
  } catch (error) {
    if (error instanceof AuthError && error.type === "CredentialsSignin") {
      return { error: "Invalid credentials!" };
    }

    throw error;
  }
};
