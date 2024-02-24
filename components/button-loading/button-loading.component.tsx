"use client";
// Components
import { Button } from "@/components/ui/button";
// Icons
import { LuLoader2 } from "react-icons/lu";
// Types
import { ButtonLoadingPropsType } from "./types/button-loading-props.type";

export const ButtonLoading = ({
  fullWidth = false,
  label,
  loading,
  showLabel = false,
  type = "button",
}: ButtonLoadingPropsType): React.ReactElement => {
  const fullWidthClasses = fullWidth ? "w-full" : "";

  const buttonContent = loading ? (
    <>
      <LuLoader2 className="mr-2 h-5 w-5 animate-spin" />
      {showLabel && label}
    </>
  ) : (
    label
  );

  return (
    <Button disabled={loading} type={type} className={`${fullWidthClasses}`}>
      {buttonContent}
    </Button>
  );
};
