// Vendors
import bcryptjs from "bcryptjs";
import Credentials from "next-auth/providers/credentials";
import type { NextAuthConfig } from "next-auth";
// Libs
import { db } from "@/lib/db";
// Schemas
import { LoginSchema } from "@/app/(auth)/login/schemas/login.schema";

export default {
  providers: [
    Credentials({
      async authorize(credentials) {
        const validatedFields = LoginSchema.safeParse(credentials);

        if (!validatedFields.success) {
          return null;
        }

        const { email, password } = validatedFields.data;

        try {
          const user = await db.user.findUnique({
            where: {
              email,
            },
          });

          if (!user || !user.password) {
            return null;
          }

          const passwordMatch = await bcryptjs.compare(password, user.password);

          if (!passwordMatch) {
            return null;
          }

          return user;
        } catch (error) {
          return null;
        }
      },
    }),
  ],
} satisfies NextAuthConfig;
