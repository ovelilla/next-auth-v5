// Vendors
import { Resend } from "resend";
// Types
import { SendVerificationTokenEmailPropsType } from "./types/send-verification-token-email-props.type";

const resend = new Resend(process.env.RESEND_API_KEY);
// const domain = process.env.NEXT_PUBLIC_APP_URL;

export const sendVerificationTokenEmail = async ({
  email,
  token,
}: SendVerificationTokenEmailPropsType): Promise<void> => {
  // const confirmLink = `${domain}/verification?token=${token}`;
  const confirmLink = `http://localhost:3000/verification?token=${token}`;

  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: email,
    subject: "Confirm your email",
    html: `<p>Click <a href="${confirmLink}">here</a> to confirm email.</p>`,
  });
};
