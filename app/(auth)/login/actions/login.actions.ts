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
import { LoginPropsType } from "./types/login-props.actions.types";
import { LoginReturnType } from "./types/login-return.actions.types";

export const loginAction = async ({
  values,
  callbackUrl,
}: LoginPropsType): Promise<LoginReturnType | undefined> => {
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

    await signIn("credentials", {
      email,
      password,
      redirectTo: DEFAULT_LOGIN_REDIRECT,
    });
  } catch (error) {
    if (error instanceof AuthError && error.type === "CredentialsSignin") {
      return { error: "Invalid credentials!" };
    }

    throw error;
  }
};
