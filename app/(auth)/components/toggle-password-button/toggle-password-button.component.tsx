// Icons
import { LuEye } from "react-icons/lu";
import { LuEyeOff } from "react-icons/lu";
// Types
import { TogglePasswordButtonPropsType } from "./types/toggle-password-button-props.type";

export const TogglePasswordButton = ({
  handleToggleShowPassword,
  showPassword,
}: TogglePasswordButtonPropsType): React.ReactElement => {
  return (
    <button
      type="button"
      className="absolute z-10 top-1/2 right-4 transform -translate-y-1/2 text-gray-400"
      onClick={handleToggleShowPassword}
    >
      {showPassword ? (
        <LuEyeOff className="h-5 w-5" />
      ) : (
        <LuEye className="h-5 w-5" />
      )}
    </button>
  );
};
