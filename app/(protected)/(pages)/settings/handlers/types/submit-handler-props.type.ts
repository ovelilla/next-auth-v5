// Vendors
import { Dispatch, SetStateAction } from "react";
// Types
import { SettingsFormValuesType } from "../../types/settings-form-values.type";

export type SubmitHandlerPropsType = {
  setErrorMessage: Dispatch<SetStateAction<string>>;
  setSuccessMessage: Dispatch<SetStateAction<string>>;
  setLoading: Dispatch<SetStateAction<boolean>>;
  values: SettingsFormValuesType;
};
