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
  FIELD_PASSWORD_PROPS: {
    label: "Password",
    name: "password",
    placeholder: "******",
  },
  TYPE_FIELD_PASSWORD_VISIBLE: "text",
  TYPE_FIELD_PASSWORD_HIDDEN: "password",
  BUTTON_LINK_FORGOT_PASSWORD_PROPS: {
    href: "/reset",
    label: "Forgot password?",
  },
  BUTTON_SUBMIT_PROPS: {
    fullWidth: true,
    label: "Login",
    showLabel: false,
    type: "submit",
  },
  
} as const;

export default constants;
