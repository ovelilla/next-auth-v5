// Types
import { RegisterFormValuesType } from "../../types/register-form-values.type";

export type RegisterHandlersReturnType = {
  handleSubmit: (values: RegisterFormValuesType) => void;
  handleToggleShowPassword: VoidFunction;
};
