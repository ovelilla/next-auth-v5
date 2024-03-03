// Icons
import { LuLogIn } from "react-icons/lu";
import { LuLogOut } from "react-icons/lu";
import { LuSettings } from "react-icons/lu";
import { LuUserPlus2 } from "react-icons/lu";

const constants = {
  LOGGED_IN_MENU_ITEMS: [
    {
      icon: LuSettings,
      label: "Settings",
      path: "/settings",
    },
    {
      icon: LuLogOut,
      label: "Logout",
      path: "/logout",
    },
  ],
  LOGGED_OUT_MENU_ITEMS: [
    {
      label: "Login",
      path: "/login",
      icon: LuLogIn,
    },
    {
      label: "Register",
      path: "/register",
      icon: LuUserPlus2,
    },
  ],
};

export default constants;
