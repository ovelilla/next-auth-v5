// Vendors
import { Dispatch, SetStateAction } from "react";
import type { UseFormReturn } from "react-hook-form";
// Types
import { LoginFormValuesType } from "../../types/login-form-values.type";

export type SubmitHandlerPropsType = {
  form: UseFormReturn<LoginFormValuesType>;
  setErrorMessage: Dispatch<SetStateAction<string>>;
  setSuccessMessage: Dispatch<SetStateAction<string>>;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  values: LoginFormValuesType;
};
