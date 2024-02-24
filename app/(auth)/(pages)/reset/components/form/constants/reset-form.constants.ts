// Enumerations
import { AlertType } from "@/components/alert/enumerations/alert.enumertions";

const constants = {
  ALERT_ERROR_PROPS: {
    type: AlertType.Error,
  },
  ALERT_SUCCESS_PROPS: {
    type: AlertType.Success,
  },
  FIELD_EMAIL_PROPS: {
    label: "Email",
    name: "email",
    placeholder: "john.doe@example.com",
    type: "email",
  },
  BUTTON_SUBMIT_PROPS: {
    fullWidth: true,
    label: "Send reset email",
    showLabel: false,
    type: "submit",
  },
} as const;

export default constants;
