"use server";
// Vendors
import { UserRole } from "@prisma/client";
// Auth
import { auth } from "@/auth";

export const adminAction = async () => {
  const session = await auth();
  const role = session?.user?.role;

  if (role === UserRole.ADMIN) {
    return { success: "Allowed Server Action!" };
  }

  return { error: "Forbidden Server Action!" };
};
