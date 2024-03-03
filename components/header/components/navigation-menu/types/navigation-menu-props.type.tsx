// Vendors
import { Dispatch, SetStateAction } from "react";
import { IconType } from "react-icons";

export type NavigationMenuPropsType = {
  fullWidth?: boolean;
  items: readonly { icon: IconType; label: string; path: string }[];
  itemsAlignment?: "left" | "center" | "right";
  className?: string;
  orientation?: "horizontal" | "vertical";
  setOpen?: Dispatch<SetStateAction<boolean>>;
};
