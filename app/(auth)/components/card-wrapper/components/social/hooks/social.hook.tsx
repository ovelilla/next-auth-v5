// Vendors
import { useSearchParams } from "next/navigation";
// Handlers
import SocialHandlers from "../handlers/social.handlers";
// Stores
import { useAuthStore } from "@/app/(auth)/store/auth.store";
// Types
import { SocialHookReturnType } from "./types/social-hook-return.type";

const SocialHook = (): SocialHookReturnType => {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl");

  const { loading, setLoading } = useAuthStore();

  const { handleSocialButtonClick } = SocialHandlers({
    callbackUrl,
    setLoading,
  });

  return {
    handleSocialButtonClick,
    loading,
  };
};

export default SocialHook;
