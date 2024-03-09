// Vendors
import { Dispatch, SetStateAction } from "react";

export type SettingsHandlersPropsType = {
  setErrorMessage: Dispatch<SetStateAction<string>>;
  setShowPassword: Dispatch<SetStateAction<boolean>>;
  setShowNewPassword: Dispatch<SetStateAction<boolean>>;
  setSuccessMessage: Dispatch<SetStateAction<string>>;
  setLoading: Dispatch<SetStateAction<boolean>>;
  showPassword: boolean;
  showNewPassword: boolean;
};
