"use server";
// Libs
import { db } from "@/lib/db";
// Types
import { VerificationActionPropsType } from "./types/verification-props.action.types";
import { VerificationActionReturnType } from "./types/verification-return.action.types";

export const verificationAction = async ({
  token,
}: VerificationActionPropsType): Promise<VerificationActionReturnType> => {
  const existingToken = await db.verificationToken.findUnique({
    where: { token },
  });

  if (!existingToken) {
    return { error: "Token does not exist" };
  }

  const hasExpired = new Date(existingToken.expires) < new Date();

  if (hasExpired) {
    return { error: "Token has expired" };
  }

  const existingUser = await db.user.findFirst({
    where: { email: existingToken.email },
  });

  if (!existingUser) {
    return { error: "Email does not exist" };
  }

  await db.user.update({
    where: { id: existingUser.id },
    data: {
      emailVerified: new Date(),
      email: existingToken.email,
    },
  });

  await db.verificationToken.delete({
    where: { id: existingToken.id },
  });

  return { success: "Email verified" };
};
