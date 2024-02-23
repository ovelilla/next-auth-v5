"use server";
// Vendors
import bcryptjs from "bcryptjs";
// Libs
import { db } from "@/lib/db";
// Schemas
import { RegisterSchema } from "../schemas/register.schema";
// Types
import { RegisterPropsType } from "./types/register-props.actions.types";
// Utils
import { generateVerificationToken } from "../../utils/token/generate-verification-token.util";
import { sendVerificationEmail } from "../../utils/email/send-verification-token.util";

export const registerAction = async ({
  values,
  callbackUrl,
}: RegisterPropsType) => {
  const validatedFields = RegisterSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields!" };
  }

  const { email, password } = validatedFields.data;

  const hashedPassword = await bcryptjs.hash(password, 10);

  try {
    const existingUser = await db.user.findUnique({
      where: {
        email,
      },
    });

    if (existingUser) {
      return { error: "Email already in use!" };
    }

    await db.user.create({
      data: {
        email,
        password: hashedPassword,
      },
    });

    const verificationToken = await generateVerificationToken(email);

    await sendVerificationEmail(
      verificationToken.email,
      verificationToken.token
    );

    return { success: "Confirmation email sent!" };
  } catch (error) {
    return { error: "Ups! Something went wrong!" };
  }
};
