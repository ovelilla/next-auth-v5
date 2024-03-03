// Vendors
import { useEffect } from "react";
// Actions
import { logoutAction } from "../actions/logout.actions";

const LogoutHook = () => {
  useEffect(() => {
    logoutAction();
  }, []);
};

export default LogoutHook;
