// Vendors
import { Resend } from "resend";
// Types
import { SendResetPasswordEmailPropsType } from "./types/send-reset-password-email-props.type";

const resend = new Resend(process.env.RESEND_API_KEY);
const domain = process.env.NEXT_PUBLIC_APP_URL;

export const sendResetPasswordEmail = async ({
  email,
  token,
}: SendResetPasswordEmailPropsType): Promise<void> => {
  const resetLink = `${domain}/new-password?token=${token}`;

  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: email,
    subject: "Reset your password",
    html: `<p>Click <a href="${resetLink}">here</a> to reset password.</p>`,
  });
};
