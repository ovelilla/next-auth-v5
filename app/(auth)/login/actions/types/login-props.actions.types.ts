// Types
import { LoginFormValuesType } from "../../types/login-form-values.type";

export type LoginPropsType = {
  values: LoginFormValuesType;
  callbackUrl?: string | null;
};
