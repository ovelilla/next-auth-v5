// Vendors
import { Dispatch, SetStateAction } from "react";

export type ToggleShowNewPasswordHandlerPropsType = {
  setShowNewPassword: Dispatch<SetStateAction<boolean>>;
  showNewPassword: boolean;
};
