// Types
import { NewPasswordFormValuesType } from "../../types/new-password-form-values.type";

export type NewPasswordHandlersReturnType = {
  handleSubmit: (values: NewPasswordFormValuesType) => void;
  handleToggleShowPassword: () => void;
};
