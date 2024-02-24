// Vendors
import { Dispatch, SetStateAction } from "react";
import type { UseFormReturn } from "react-hook-form";
// Types
import { NewPasswordFormValuesType } from "../../types/new-password-form-values.type";

export type SubmitHandlerPropsType = {
  form: UseFormReturn<NewPasswordFormValuesType>;
  setErrorMessage: Dispatch<SetStateAction<string>>;
  setSuccessMessage: Dispatch<SetStateAction<string>>;
  setLoading: Dispatch<SetStateAction<boolean>>;
  token: string | null;
  values: NewPasswordFormValuesType;
};
