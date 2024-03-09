// Vendors
import Link from "next/link";
// Constants
import constants from "./constants/logo.constants";

export const Logo = () => (
  <div className="flex h-10">
    <Link
      href={constants.LOGO_PATH}
      className="flex items-center justify-center self-stretch text-xl font-bold"
    >
      {constants.LOGO_LABEL}
    </Link>
  </div>
);
