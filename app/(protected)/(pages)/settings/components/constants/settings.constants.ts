// Vendors
import { UserRole } from "@prisma/client";
// Enumerations
import { AlertType } from "@/components/alert/enumerations/alert.enumertions";

const constants = {
  ALERT_ERROR_PROPS: {
    type: AlertType.Error,
  },
  ALERT_SUCCESS_PROPS: {
    type: AlertType.Success,
  },
  FIELD_NAME_PROPS: {
    label: "Name",
    name: "name",
    placeholder: "John Doe",
    type: "text",
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
  FIELD_NEW_PASSWORD_PROPS: {
    label: "New Password",
    name: "newPassword",
    placeholder: "******",
  },
  FIELD_ROLE_PROPS: {
    label: "Role",
    name: "role",
    placeholder: "Select a role",
    type: "text",
    items: [
      { label: "Admin", value: UserRole.ADMIN },
      { label: "User", value: UserRole.USER },
    ],
  },
  FIELD_IS_TWO_FACTOR_ENABLED_PROPS: {
    description: "Enable two factor authentication for your account",
    label: "Two Factor Authentication",
    name: "isTwoFactorEnabled",
  },
  BUTTON_SUBMIT_PROPS: {
    fullWidth: true,
    label: "Save Changes",
    showLabel: false,
    type: "submit",
  },
} as const;

export default constants;
