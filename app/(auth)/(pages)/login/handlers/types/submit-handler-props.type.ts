// Vendors
import { Dispatch, SetStateAction } from "react";
import type { UseFormReturn } from "react-hook-form";
// Types
import { AuthStoreType } from "@/app/(auth)/store/types/auth.store.type";
import { LoginFormValuesType } from "../../types/login-form-values.type";

export type SubmitHandlerPropsType = {
  form: UseFormReturn<LoginFormValuesType>;
  setErrorMessage: Dispatch<SetStateAction<string>>;
  setShowTwoFactor: Dispatch<SetStateAction<boolean>>;
  setSuccessMessage: Dispatch<SetStateAction<string>>;
  setLoading: AuthStoreType["setLoading"];
  values: LoginFormValuesType;
};
