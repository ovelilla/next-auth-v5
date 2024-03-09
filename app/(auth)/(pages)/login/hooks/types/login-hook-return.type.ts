// Vendors
import type { UseFormReturn } from "react-hook-form";
// Types
import { AuthStoreType } from "@/app/(auth)/store/types/auth.store.type";
import { LoginFormValuesType } from "../../types/login-form-values.type";

export type LoginHookReturnType = {
  errorMessage: string;
  form: UseFormReturn<LoginFormValuesType>;
  handleSubmit: (values: LoginFormValuesType) => void;
  handleToggleShowPassword: VoidFunction;
  loading: AuthStoreType["loading"];
  showPassword: boolean;
  showTwoFactor: boolean;
  successMessage: string;
};
