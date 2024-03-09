// Vendors
import { Dispatch, SetStateAction } from "react";

export type HeaderHookReturnType = {
  handleNavigationMenuLinkClick: VoidFunction;
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
};
