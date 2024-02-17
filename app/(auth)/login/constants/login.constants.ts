const constants = {
  CARD_WRAPPER_PROPS: {
    header: {
      title: "Login",
      description: "Welcome back",
    },
    buttonLink: {
      fullWidth: true,
      href: "/register",
      label: "Don't have an account?",
    },
    showSocial: true,
  },
  LOGIN_FORM_PROPS: {
    buttonLinkForgotPassword: {
      href: "/reset",
      label: "Forgot password?",
    },
    buttonSubmit: {
      label: "Login",
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
