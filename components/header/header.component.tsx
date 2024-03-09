"use client";
// Components
import { Container } from "@/components/container/container.component";
import { Logo } from "./components/logo/logo.component";
import { MobileDrawer } from "./components/mobile-drawer/mobile-drawer.component";
import { NavigationMenu } from "./components/navigation-menu/navigation-menu.component";
import { UserButton } from "./components/user-button/user-button.component";
// Constants
import constants from "./constants/header.constants";
// Hooks
import { useCurrentUser } from "@/hooks/use-current-user";

export const Header = () => {
  const user = useCurrentUser();
  const items = user
    ? constants.LOGGED_IN_NAVIGATION_MENU_ITEMS
    : constants.LOGGED_OUT_NAVIGATION_MENU_ITEMS;

  return (
    <header className="flex border-b">
      <Container>
        <div className="flex items-center justify-between grow h-14 sm:h-16 lg:h-20">
          <Logo />

          <div className="flex gap-2">
            <NavigationMenu
              {...constants.NAVIGATION_MENU_DESKTOP_PROPS}
              {...{ items }}
            />
            <UserButton />
            <MobileDrawer />
          </div>
        </div>
      </Container>
    </header>
  );
};
