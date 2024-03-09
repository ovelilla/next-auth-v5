// Vendors
import type { UseFormReturn } from "react-hook-form";
// Types
import { SettingsFormValuesType } from "../../types/settings-form-values.type";

export type SettingsHookReturnType = {
  errorMessage: string;
  form: UseFormReturn<SettingsFormValuesType>;
  handleSubmit: (values: SettingsFormValuesType) => void;
  handleToggleShowNewPassword: VoidFunction;
  handleToggleShowPassword: VoidFunction;
  loading: boolean;
  showNewPassword: boolean;
  showPassword: boolean;
  successMessage: string;
  user: any;
};
