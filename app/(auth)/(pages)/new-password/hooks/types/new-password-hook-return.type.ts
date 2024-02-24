// Vendors
import type { UseFormReturn } from "react-hook-form";
// Types
import { NewPasswordFormValuesType } from "../../types/new-password-form-values.type";

export type NewPasswordHookReturnType = {
  errorMessage: string;
  form: UseFormReturn<NewPasswordFormValuesType>;
  handleSubmit: (values: NewPasswordFormValuesType) => void;
  handleToggleShowPassword: () => void;
  loading: boolean;
  successMessage: string;
  showPassword: boolean;
};
