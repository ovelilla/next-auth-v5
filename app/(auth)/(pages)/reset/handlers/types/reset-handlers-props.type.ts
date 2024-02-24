// Vendors
import { Dispatch, SetStateAction } from "react";
import type { UseFormReturn } from "react-hook-form";
// Types
import { ResetFormValuesType } from "../../types/reset-form-values.type";

export type ResetHandlersPropsType = {
  form: UseFormReturn<ResetFormValuesType>;
  setErrorMessage: Dispatch<SetStateAction<string>>;
  setSuccessMessage: Dispatch<SetStateAction<string>>;
  setLoading: Dispatch<SetStateAction<boolean>>;
};
