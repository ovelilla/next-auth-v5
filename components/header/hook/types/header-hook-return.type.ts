// Vendors
import { Dispatch, SetStateAction } from "react";

export type HeaderHookReturnType = {
  handleNavigationMenuLinkClick: () => void;
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
};
