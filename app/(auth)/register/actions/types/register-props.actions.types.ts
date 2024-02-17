// Types
import { RegisterFormValuesType } from "../../types/register-form-values.type";

export type RegisterPropsType = {
  values: RegisterFormValuesType;
  callbackUrl?: string | null;
};
