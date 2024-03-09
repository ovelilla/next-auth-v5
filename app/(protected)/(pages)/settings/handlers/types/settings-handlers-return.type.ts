// Types
import { SettingsFormValuesType } from "../../types/settings-form-values.type";

export type SettingsHandlersReturnType = {
  handleSubmit: (values: SettingsFormValuesType) => void;
  handleToggleShowPassword: VoidFunction;
  handleToggleShowNewPassword: VoidFunction;
};
