// Vendors
import { Resend } from "resend";
// Types
import { SendTwoFactorTokenEmailPropsType } from "./types/send-two-factor-token-email-props.type";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendTwoFactorTokenEmail = async ({
  email,
  token,
}: SendTwoFactorTokenEmailPropsType): Promise<void> => {
  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: email,
    subject: "2FA Code",
    html: `<p>Your 2FA code: ${token}</p>`,
  });
};
