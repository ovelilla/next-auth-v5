import { HeaderHandlersPropsType } from "./types/header-props.type";
import { HeaderLinkClickPropsType } from "./types/header-link-click-props.type";
import { HeaderHandlersReturnType } from "./types/header-return.type";

const navigationMenuLinkClickHandler = ({
  setOpen,
}: HeaderLinkClickPropsType): void => {
  console.log("navigationMenuLinkClickHandler");
  setOpen(false);
};

const HeaderHandlers = ({
  setOpen,
}: HeaderHandlersPropsType): HeaderHandlersReturnType => {
  return {
    handleNavigationMenuLinkClick: () =>
      navigationMenuLinkClickHandler({ setOpen }),
  };
};

export default HeaderHandlers;
