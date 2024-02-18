// Types
import { AuthStoreType } from "@/app/(auth)/store/types/auth.store.type";

export type SocialButtonClickHandlerPropsType = {
  callbackUrl: string | null;
  provider: string;
  setLoading: AuthStoreType["setLoading"];
};
