import * as z from "zod";

const passwordRegex = new RegExp(
  "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{6,}$"
);

export const RegisterSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(6, {
      message: "Minimum 6 characters required",
    })
    // .regex(passwordRegex, {
    //   message:
    //     "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character",
    // }),
});
