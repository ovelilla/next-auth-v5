// Vendors
import { Dispatch, SetStateAction } from "react";
import type { UseFormReturn } from "react-hook-form";
// Types
import { NewPasswordFormValuesType } from "../../types/new-password-form-values.type";

export type NewPasswordHandlersPropsType = {
  form: UseFormReturn<NewPasswordFormValuesType>;
  setErrorMessage: Dispatch<SetStateAction<string>>;
  setShowPassword: Dispatch<SetStateAction<boolean>>;
  setSuccessMessage: Dispatch<SetStateAction<string>>;
  setLoading: Dispatch<SetStateAction<boolean>>;
  showPassword: boolean;
  token: string | null;
};
