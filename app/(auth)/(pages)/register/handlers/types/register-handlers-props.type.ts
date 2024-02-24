// Vendors
import { Dispatch, SetStateAction } from "react";
import type { UseFormReturn } from "react-hook-form";
// Types
import { AuthStoreType } from "@/app/(auth)/store/types/auth.store.type";
import { RegisterFormValuesType } from "../../types/register-form-values.type";

export type RegisterHandlersPropsType = {
  form: UseFormReturn<RegisterFormValuesType>;
  setErrorMessage: Dispatch<SetStateAction<string>>;
  setShowPassword: Dispatch<SetStateAction<boolean>>;
  setSuccessMessage: Dispatch<SetStateAction<string>>;
  setLoading: AuthStoreType["setLoading"];
  showPassword: boolean;
};
