// Types
import { AuthStoreType } from "@/app/(auth)/store/types/auth.store.type";

export type SocialHookReturnType = {
  handleSocialButtonClick: (provider: string) => void;
  loading: AuthStoreType["loading"];
};
