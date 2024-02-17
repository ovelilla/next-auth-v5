// Icons
import { AlertTriangle } from "lucide-react";
// Types
import { FormErrorPropsType } from "./types/form-error-props.type";

export const FormError = ({ message }: FormErrorPropsType) => {
  if (!message) return null;

  return (
    <div className="flex items-center gap-x-2 py-3 bg-red-100 px-4 rounded-md text-sm text-red-900">
      <AlertTriangle className="h-4 w-4" />
      <p>{message}</p>
    </div>
  );
};
