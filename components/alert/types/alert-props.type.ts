// Enumerations
import { AlertAlignment, AlertType } from "../enumerations/alert.enumertions";

export type AlertPropsType = {
  alignment?: AlertAlignment;
  fullWidth?: boolean;
  message?: string;
  type: AlertType;
};
