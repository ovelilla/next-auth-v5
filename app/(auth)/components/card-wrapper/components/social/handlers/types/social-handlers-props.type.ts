// Types
import { AuthStoreType } from "@/app/(auth)/store/types/auth.store.type";

export type SocialHandlersPropsType = {
  callbackUrl: string | null;
  setLoading: AuthStoreType["setLoading"];
};
