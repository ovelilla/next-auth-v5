"use server";
// Vendors
import bcrypt from "bcryptjs";
// Auth
import { auth } from "@/auth";
import { unstable_update } from "@/auth";
// Libs
import { db } from "@/lib/db";
// Types
import { SettingsActionPropsType } from "./types/settings-props.action.types";
import { SettingsActionReturnType } from "./types/settings-return.action.types";
// Utils
import { sendVerificationTokenEmail } from "../utils/email/send-verification-token-email.util";
import { generateVerificationToken } from "../utils/token/generate-verification-token.util";

export const settingsAction = async ({
  values,
}: SettingsActionPropsType): Promise<SettingsActionReturnType | undefined> => {
  const session = await auth();
  const user = session?.user;

  if (!user) {
    return { error: "Unauthorized" };
  }

  const dbUser = await db.user.findUnique({ where: { id: user.id } });

  if (!dbUser) {
    return { error: "Unauthorized" };
  }

  if (user.isOAuth) {
    values.email = undefined;
    values.password = undefined;
    values.newPassword = undefined;
    values.isTwoFactorEnabled = undefined;
  }

  if (values.email && values.email !== user.email) {
    const existingUser = await db.user.findUnique({
      where: { email: values.email },
    });

    if (existingUser && existingUser.id !== user.id) {
      return { error: "Email already in use" };
    }

    const verificationToken = await generateVerificationToken(values.email);

    await sendVerificationTokenEmail({
      email: verificationToken.email,
      token: verificationToken.token,
    });

    return { success: "Verification email sent" };
  }

  if (values.password && values.newPassword && dbUser.password) {
    const passwordsMatch = await bcrypt.compare(
      values.password,
      dbUser.password
    );

    if (!passwordsMatch) {
      return { error: "Incorrect password" };
    }

    const hashedPassword = await bcrypt.hash(values.newPassword, 10);
    values.password = hashedPassword;
    values.newPassword = undefined;
  }

  values.newPassword = undefined;

  const updatedUser = await db.user.update({
    where: { id: dbUser.id },
    data: {
      ...values,
    },
  });

  unstable_update({
    user: {
      name: updatedUser.name,
      email: updatedUser.email,
      isTwoFactorEnabled: updatedUser.isTwoFactorEnabled,
      role: updatedUser.role,
    },
  });

  return { success: "Settings Updated!" };
};
