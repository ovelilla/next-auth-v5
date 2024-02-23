// Enumerations
import { AlertType } from "@/components/alert/enumerations/alert.enumertions";

const constants = {
  ALERT_ERROR_PROPS: {
    type: AlertType.Error,
  },
  ALERT_SUCCESS_PROPS: {
    type: AlertType.Success,
  },
  LOADER_PROPS: {
    color: "#000",
    size: 16,
  },
  CARD_WRAPPER_PROPS: {
    header: {
      title: "Verification",
      description: "Confirming your verification",
    },
    buttonLink: {
      fullWidth: true,
      href: "/login",
      label: "Back to login",
    },
    showSocial: false,
  },
};

export default constants;
