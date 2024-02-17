// Vendors
import type { UseFormReturn } from "react-hook-form";
// Types
import { LoginFormValuesType } from "../../types/login-form-values.type";

export type LoginHookReturnType = {
  errorMessage: string;
  form: UseFormReturn<LoginFormValuesType>;
  handleSubmit: (values: LoginFormValuesType) => void;
  isLoading: boolean;
  successMessage: string;
};
