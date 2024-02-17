// Vendors
import { Dispatch, SetStateAction } from "react";
import type { UseFormReturn } from "react-hook-form";
// Types
import { RegisterFormValuesType } from "../../types/register-form-values.type";

export type RegisterHandlersPropsType = {
  form: UseFormReturn<RegisterFormValuesType>;
  setErrorMessage: Dispatch<SetStateAction<string>>;
  setSuccessMessage: Dispatch<SetStateAction<string>>;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
};
