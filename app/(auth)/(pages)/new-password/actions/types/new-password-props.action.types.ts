// Types
import { NewPasswordFormValuesType } from "../../types/new-password-form-values.type";

export type NewPasswordActionPropsType = {
  values: NewPasswordFormValuesType;
  token: string | null;
};
