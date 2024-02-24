// Enumerations
import { AlertType } from "@/components/alert/enumerations/alert.enumertions";

const constants = {
  ALERT_ERROR_PROPS: {
    type: AlertType.Error,
  },
  ALERT_SUCCESS_PROPS: {
    type: AlertType.Success,
  },
  BUTTON_SUBMIT_PROPS: {
    fullWidth: true,
    label: "Reset password",
    showLabel: false,
    type: "submit",
  },
  FIELD_PASSWORD_PROPS: {
    label: "Password",
    name: "password",
    placeholder: "******",
  },
  TYPE_FIELD_PASSWORD_VISIBLE: "text",
  TYPE_FIELD_PASSWORD_HIDDEN: "password",
} as const;

export default constants;
