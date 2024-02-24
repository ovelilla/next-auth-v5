// Types
import { LoginFormValuesType } from "../../types/login-form-values.type";

export type LoginActionPropsType = {
  values: LoginFormValuesType;
  urlCallback?: string | null;
};
