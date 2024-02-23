// Enumerations
import { AlertType } from "@/components/alert/enumerations/alert.enumertions";

const constants = {
  ALERT_ERROR_PROPS: {
    type: AlertType.Error,
  },
  ALERT_SUCCESS_PROPS: {
    type: AlertType.Success,
  },
  CARD_WRAPPER_PROPS: {
    header: {
      title: "Register",
      description: "Create an account",
    },
    buttonLink: {
      fullWidth: true,
      href: "/login",
      label: "Already have an account?",
    },
    showSocial: true,
  },
  REGISTER_FORM_PROPS: {
    buttonSubmit: {
      label: "Register",
    },
    fieldEmail: {
      label: "Email",
      placeholder: "john.doe@example.com",
    },
    fieldPassword: {
      label: "Password",
      placeholder: "******",
    },
  },
};

export default constants;
