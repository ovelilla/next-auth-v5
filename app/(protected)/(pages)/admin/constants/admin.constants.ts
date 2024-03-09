// Enumerations
import { AlertType } from "@/components/alert/enumerations/alert.enumertions";

const constants = {
  ALERT_ERROR_PROPS: {
    type: AlertType.Error,
    message: "You are not allowed to see this content",
  },
  ALERT_SUCCESS_PROPS: {
    type: AlertType.Success,
    message: "You are allowed to see this content",
  },
} as const;

export default constants;
