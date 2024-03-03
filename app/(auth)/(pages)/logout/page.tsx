"use client";
// Components
import { CardWrapper } from "../../components/card-wrapper/card-wrapper.component";
// Constants
import constants from "./constants/logout.constants";
// Hooks
import LogoutHook from "./hooks/logout.hook";
// Icons
import { LuLoader2 } from "react-icons/lu";

const LogutPage = () => {
  LogoutHook();

  return (
    <CardWrapper {...constants.CARD_WRAPPER_PROPS}>
      <div className="w-full flex justify-center items-center">
        <LuLoader2 className="mr-2 h-10 w-10 animate-spin" />
      </div>
    </CardWrapper>
  );
};

export default LogutPage;
