// Vendors
import NextAuth from "next-auth";
import { NextResponse } from "next/server";
// Config
import authConfig from "@/auth.config";
// Routes
import {
  API_PREFIX,
  authRoutes,
  DEFAULT_LOGIN_REDIRECT,
  publicRoutes,
} from "@/routes";

const { auth } = NextAuth(authConfig);

export default auth((req) => {
  const { nextUrl } = req;
  const { pathname } = nextUrl;

  const isLoggedIn = !!req.auth;
  const isApiRoute = pathname.startsWith(API_PREFIX);
  const isPublicRoute = publicRoutes.includes(pathname);
  const isAuthRoute = authRoutes.includes(pathname);

  if (isApiRoute) {
    const params = new URLSearchParams(nextUrl.search);
    const error = params.get("error");

    if (error) {
      return NextResponse.redirect(new URL(`/login?error=${error}`, nextUrl));
    }
    return NextResponse.next();
  }

  if (isAuthRoute && isLoggedIn) {
    return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
  }

  if (isAuthRoute && !isLoggedIn) {
    return NextResponse.next();
  }

  if (!isLoggedIn && !isPublicRoute) {
    return Response.redirect(new URL("/login", nextUrl));
  }

  return NextResponse.next();
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
