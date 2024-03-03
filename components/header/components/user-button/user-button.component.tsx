"use client";
// Vendors
import Link from "next/link";
// Components
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
// Constants
import constants from "./constants/user-button.constants";
// Hooks
import { useCurrentUser } from "@/hooks/use-current-user";
// Icons
import { FaUser } from "react-icons/fa";

export const UserButton = () => {
  const user = useCurrentUser();
  
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar>
          <AvatarImage src={user?.image || ""} />
          <AvatarFallback className="bg-primary">
            <FaUser className="text-white" />
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-40" align="end">
        {user &&
          constants.LOGGED_IN_MENU_ITEMS.map((item, index) => {
            return (
              <DropdownMenuItem key={index} asChild className="cursor-pointer">
                <Link href={item.path}>
                  <span className="flex items-center gap-2">
                    <item.icon size={16} />
                    {item.label}
                  </span>
                </Link>
              </DropdownMenuItem>
            );
          })}
        {!user &&
          constants.LOGGED_OUT_MENU_ITEMS.map((item, index) => {
            return (
              <DropdownMenuItem key={index} asChild className="cursor-pointer">
                <Link href={item.path}>
                  <span className="flex items-center gap-2">
                    <item.icon size={16} />
                    {item.label}
                  </span>
                </Link>
              </DropdownMenuItem>
            );
          })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
