"use client";
// Vendors
import Link from "next/link";
// Components
import { Button } from "@/components/ui/button";
// Types
import { ButtonLinkPropsType } from "./types/button-link-props.type";

export const ButtonLink = ({
  fullWidth = false,
  href,
  label,
  size = "sm",
}: ButtonLinkPropsType): React.ReactElement => (
  <Button
    variant="link"
    className={`${fullWidth && "w-full"} font-normal px-0`}
    size={size}
    asChild
  >
    <Link href={href}>{label}</Link>
  </Button>
);
