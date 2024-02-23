// Constants
import constants from "./constants/alert.constants";
// Enumerations
import { AlertType } from "./enumerations/alert.enumertions";
// Icons
import { LuAlertCircle } from "react-icons/lu";
import { LuAlertTriangle } from "react-icons/lu";
import { LuCheckCircle } from "react-icons/lu";
import { LuInfo } from "react-icons/lu";
// Types
import { AlertPropsType } from "./types/alert-props.type";

export const Alert = ({
  alignment = constants.ALIGN_DEFAULT,
  fullWidth = constants.FULL_WIDTH_DEFAULT,
  message,
  type,
}: AlertPropsType) => {
  const colorClasses = {
    error: "bg-red-100 text-red-900",
    warning: "bg-yellow-100 text-yellow-900",
    info: "bg-blue-100 text-blue-900",
    success: "bg-emerald-100 text-emerald-900",
  };

  const alignmentclasses = {
    left: "justify-start",
    center: "justify-center",
    right: "justify-end",
  };

  const fullwidthClasses = fullWidth ? "w-full" : "";

  if (!message) return null;

  return (
    <div
      className={`flex ${alignmentclasses[alignment]} items-center gap-x-2 py-3 px-4 rounded-md text-sm ${colorClasses[type]} ${fullwidthClasses}`}
    >
      {type === AlertType.Error && <LuAlertCircle className="h-4 w-4" />}
      {type === AlertType.Info && <LuInfo className="h-4 w-4" />}
      {type === AlertType.Success && <LuCheckCircle className="h-4 w-4" />}
      {type === AlertType.Warning && <LuAlertTriangle className="h-4 w-4" />}
      <p>{message}</p>
    </div>
  );
};
