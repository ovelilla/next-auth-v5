// Vendors
import type { UseFormReturn } from "react-hook-form";
// Types
import { ResetFormValuesType } from "../../types/reset-form-values.type";

export type ResetHookReturnType = {
  errorMessage: string;
  form: UseFormReturn<ResetFormValuesType>;
  handleSubmit: (values: ResetFormValuesType) => void;
  loading: boolean;
  successMessage: string;
};
