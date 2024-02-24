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
  OAUTH_ACCOUNT_NOT_LINKED: "OAuthAccountNotLinked",
  OAUTH_ACCOUNT_NOT_LINKED_ERROR:
    "Email already in use with different provider!",
} as const;

export default constants;
