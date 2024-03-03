// Vendors
import Link from "next/link";
// Constants
import constants from "./constants/logo.constants";

export const Logo = () => (
  <div className="text-xl font-bold">
    <Link href={constants.LOGO_PATH}>{constants.LOGO_LABEL}</Link>
  </div>
);
