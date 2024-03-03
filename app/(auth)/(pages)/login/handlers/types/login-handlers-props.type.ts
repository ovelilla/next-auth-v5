// Vendors
import { Dispatch, SetStateAction } from "react";
import type { UseFormReturn } from "react-hook-form";
// Types
import { AuthStoreType } from "@/app/(auth)/store/types/auth.store.type";
import { LoginFormValuesType } from "../../types/login-form-values.type";

export type LoginHandlersPropsType = {
  form: UseFormReturn<LoginFormValuesType>;
  setErrorMessage: Dispatch<SetStateAction<string>>;
  setShowPassword: Dispatch<SetStateAction<boolean>>;
  setShowTwoFactor: Dispatch<SetStateAction<boolean>>;
  setSuccessMessage: Dispatch<SetStateAction<string>>;
  setLoading: AuthStoreType["setLoading"];
  showPassword: boolean;
  urlCallback: string | null;
};
