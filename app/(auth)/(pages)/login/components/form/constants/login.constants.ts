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
  FIELD_PASSWORD_TYPE_VISIBLE: "text",
  FIELD_PASSWORD_TYPE_HIDDEN: "password",
  FIELD_TWO_FACTOR_PROPS: {
    label: "Two Factor Code",
    name: "code",
    placeholder: "123456",
    type: "text",
  },
  BUTTON_LINK_FORGOT_PASSWORD_PROPS: {
    href: "/reset",
    label: "Forgot password?",
  },
  BUTTON_SUBMIT_PROPS: {
    fullWidth: true,
    showLabel: false,
    type: "submit",
  },
  BUTTON_SUBMIT_LABEL_DEFAULT: "Login",
  BUTTON_SUBMIT_LABEL_TWO_FACTOR: "Confirm",
} as const;

export default constants;
