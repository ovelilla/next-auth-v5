// Icons
import { CheckCircle2 } from "lucide-react";
// Types
import { FormSuccessPropsType } from "./types/form-success-props.type";

export const FormSuccess = ({ message }: FormSuccessPropsType): React.ReactElement | null => {
  if (!message) return null;

  return (
    <div className="flex items-center gap-x-2 py-3 bg-emerald-100 px-4 rounded-md text-sm text-emerald-900">
      <CheckCircle2 className="h-4 w-4" />
      <p>{message}</p>
    </div>
  );
};
