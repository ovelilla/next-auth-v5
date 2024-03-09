// Vendors
import { Dispatch, SetStateAction } from "react";

export type ToggleShowPasswordHandlerPropsType = {
  setShowPassword: Dispatch<SetStateAction<boolean>>;
  showPassword: boolean;
};
