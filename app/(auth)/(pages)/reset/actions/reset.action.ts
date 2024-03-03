"use server";
// Libs
import { db } from "@/lib/db";
// Schemas
import { ResetSchema } from "../schemas/reset.schema";
// Types
import { ResetActionPropsType } from "./types/reset-props.action.types";
import { ResetActionReturnType } from "./types/reset-return.action.types";
// Utils
import { generatePasswordResetToken } from "../../../utils/token/generate-password-reset-token.util";
import { sendResetPasswordEmail } from "../../../utils/email/send-reset-password-email.utils";

export const resetAction = async ({
  values,
}: ResetActionPropsType): Promise<ResetActionReturnType> => {
  const validatedFields = ResetSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields" };
  }

  const { email } = validatedFields.data;

  const existingUser = await db.user.findUnique({
    where: {
      email,
    },
  });

  if (!existingUser) {
    return { error: "Email not found" };
  }

  const passwordResetToken = await generatePasswordResetToken(email);

  await sendResetPasswordEmail({
    email: passwordResetToken.email,
    token: passwordResetToken.token,
  });

  return { success: "Reset email sent" };
};
