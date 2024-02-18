// Vendors
import type { UseFormReturn } from "react-hook-form";
// Types
import { AuthStoreType } from "@/app/(auth)/store/types/auth.store.type";
import { RegisterFormValuesType } from "../../types/register-form-values.type";

export type RegisterHookReturnType = {
  errorMessage: string;
  form: UseFormReturn<RegisterFormValuesType>;
  handleSubmit: (values: RegisterFormValuesType) => void;
  loading: AuthStoreType["loading"];
  successMessage: string;
};
