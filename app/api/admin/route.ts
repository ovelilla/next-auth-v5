// Vendors
import { UserRole } from "@prisma/client";
import { NextResponse } from "next/server";
// Auth
import { auth } from "@/auth";

export async function GET() {
  const session = await auth();
  const role = session?.user?.role;

  if (role === UserRole.ADMIN) {
    return new NextResponse(null, { status: 200 });
  }

  return new NextResponse(null, { status: 403 });
}
