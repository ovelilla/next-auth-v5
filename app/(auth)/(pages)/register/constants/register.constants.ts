const constants = {
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
} as const;

export default constants;
