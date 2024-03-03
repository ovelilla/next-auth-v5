// Icons
import { LuComputer } from "react-icons/lu";
import { LuKeyRound } from "react-icons/lu";
import { LuLogIn } from "react-icons/lu";
import { LuServer } from "react-icons/lu";
import { LuSettings } from "react-icons/lu";
import { LuUserPlus2 } from "react-icons/lu";

const loggedInNavigationMenuItems = [
  {
    icon: LuServer,
    label: "Server",
    path: "/",
  },
  {
    icon: LuComputer,
    label: "Client",
    path: "/about",
  },
  {
    icon: LuKeyRound,
    label: "Admin",
    path: "/contact",
  },
  {
    icon: LuSettings,
    label: "Settings",
    path: "/settings",
  },
];

const loggedOutNavigationMenuItems = [
  {
    icon: LuLogIn,
    label: "Login",
    path: "/login",
  },
  {
    icon: LuUserPlus2,
    label: "Register",
    path: "/register",
  },
];

const constants = {
  LOGGED_IN_NAVIGATION_MENU_ITEMS: loggedInNavigationMenuItems,
  LOGGED_OUT_NAVIGATION_MENU_ITEMS: loggedOutNavigationMenuItems,
  NAVIGATION_MENU_DESKTOP_PROPS: {
    fullWidth: false,
    itemsAlignment: "left",
    className: "hidden md:flex",
    orientation: "horizontal",
  },
  NAVIGATION_MENU_MOBILE_PROPS: {
    fullWidth: true,
    itemsAlignment: "left",
    orientation: "vertical",
  },
} as const;

export default constants;
