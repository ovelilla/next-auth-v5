"use client";
// Auth
import { useSession } from "next-auth/react";
// Hooks
import { useCurrentUser } from "@/hooks/use-current-user";

const SettingsPage = () => {
  const user = useCurrentUser();
  const session = useSession();

  return <div></div>;
};

export default SettingsPage;
