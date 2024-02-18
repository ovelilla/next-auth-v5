// Vendors
import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { UserRole } from "@prisma/client";
// Libs
import { db } from "@/lib/db";
// Config
import authConfig from "@/auth.config";

export const {
  auth,
  handlers: { GET, POST },
  signIn,
  signOut,
} = NextAuth({
  pages: {
    signIn: "/login",
    error: "/error",
  },
  events: {
    async linkAccount({ user }) {
      await db.user.update({
        where: { id: user.id },
        data: { emailVerified: new Date() },
      });
    },
  },
  callbacks: {
    async signIn({ user, account }) {
      if (account?.provider !== "credentials") {
        return true;
      }

      const existingUser = await db.user.findUnique({
        where: {
          id: user.id,
        },
      });

      if (!existingUser || !existingUser.emailVerified) {
        return false;
      }

      // if (!existingUser.isTwoFactorEnabled) {
      //   return true;
      // }

      // const twoFactorConfirmation = await db.twoFactorConfirmation.findFirst({
      //   where: {
      //     userId: existingUser.id,
      //   },
      // });

      // if (!twoFactorConfirmation) {
      //   return false;
      // }

      // await db.twoFactorConfirmation.delete({
      //   where: { id: twoFactorConfirmation.id },
      // });

      return true;
    },
    async session({ token, session }) {
      if (token.sub && session.user) {
        session.user.id = token.sub;
      }

      if (token.role && session.user) {
        session.user.role = token.role as UserRole;
      }

      // if (session.user) {
      //   session.user.isTwoFactorEnabled = token.isTwoFactorEnabled as boolean;
      // }

      // if (session.user) {
      //   session.user.name = token.name;
      //   session.user.email = token.email;
      //   session.user.isOAuth = token.isOAuth as boolean;
      // }

      return session;
    },
    async jwt({ token }) {
      if (!token.sub) {
        return token;
      }

      const existingUser = await db.user.findUnique({
        where: {
          id: token.sub,
        },
      });

      if (!existingUser) {
        return token;
      }

      const existingAccount = await db.account.findFirst({
        where: {
          userId: existingUser.id,
        },
      });

      token.isOAuth = !!existingAccount;
      token.name = existingUser.name;
      token.email = existingUser.email;
      token.role = existingUser.role;
      token.isTwoFactorEnabled = existingUser.isTwoFactorEnabled;

      return token;
    },
  },
  adapter: PrismaAdapter(db),
  session: { strategy: "jwt" },
  ...authConfig,
});
