// Vendors
import Link from "next/link";
// Components
import { Button } from "@/components/ui/button";
// Constants
import constants from "./constants/navigation-menu.constants";
// Libs
import { cn } from "@/lib/utils";
// Types
import { NavigationMenuPropsType } from "./types/navigation-menu-props.type";

export const NavigationMenu = ({
  className,
  fullWidth,
  items,
  itemsAlignment = constants.DEFAULT_ITEMS_ALIGNMENT,
  orientation = constants.DEFAULT_ORIENTATION,
  setOpen,
}: NavigationMenuPropsType): React.ReactElement => {
  const fullWidthClass = fullWidth ? "w-full" : "";
  const itemsAlignmentClass = {
    left: "justify-start",
    center: "justify-center",
    right: "justify-end",
  };
  const orientationClass = {
    horizontal: "flex-row",
    vertical: "flex-col",
  };

  return (
    <nav className={cn("p-2", className)}>
      <ul className={`flex gap-2 list-none ${orientationClass[orientation]}`}>
        {items.map((item, index) => (
          <li key={index}>
            <Button
              asChild
              variant="ghost"
              className={`${itemsAlignmentClass[itemsAlignment]} ${fullWidthClass}`}
            >
              <Link href={item.path} onClick={() => setOpen?.(false)}>
                {orientation === "horizontal" ? (
                  item.label
                ) : (
                  <span className="flex items-center gap-2">
                    <item.icon size={16} />
                    {item.label}
                  </span>
                )}
              </Link>
            </Button>
          </li>
        ))}
      </ul>
    </nav>
  );
};
