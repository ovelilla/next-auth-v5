// Types
import { LoginFormValuesType } from "../../types/login-form-values.type";

export type LoginHandlersReturnType = {
  handleSubmit: (values: LoginFormValuesType) => void;
  handleToggleShowPassword: VoidFunction;
};
