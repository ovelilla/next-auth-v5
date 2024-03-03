// Vendors
import { useState } from "react";
// Handlers
import HeaderHandlers from "../handlers/header.handlers";
// Types
import { HeaderHookReturnType } from "./types/header-hook-return.type";

const HeaderHook = (): HeaderHookReturnType => {
  const [open, setOpen] = useState(false);

  const { handleNavigationMenuLinkClick } = HeaderHandlers({ setOpen });

  return {
    handleNavigationMenuLinkClick,
    open,
    setOpen,
  };
};

export default HeaderHook;
