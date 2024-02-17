// Vendors
import type { UseFormReturn } from "react-hook-form";
// Types
import { RegisterFormValuesType } from "../../types/register-form-values.type";

export type RegisterHookReturnType = {
  errorMessage: string;
  form: UseFormReturn<RegisterFormValuesType>;
  handleSubmit: (values: RegisterFormValuesType) => void;
  isLoading: boolean;
  successMessage: string;
};
