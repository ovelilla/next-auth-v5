"use client";
// Components
import { Button } from "@/components/ui/button";
// Constants
import constants from "./constants/social.constants";
// Hooks
import SocialHook from "./hooks/social.hook";
// Icons
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { LuLoader2 } from "react-icons/lu";

export const Social = (): React.ReactElement => {
  const { handleSocialButtonClick, loading } = SocialHook();

  return (
    <div className="flex items-center w-full gap-x-2">
      <Button
        size="lg"
        className="w-full"
        disabled={loading.status}
        variant="outline"
        onClick={() => handleSocialButtonClick(constants.PROVIDERS.google)}
      >
        {loading.status && loading.provider === constants.PROVIDERS.google ? (
          <LuLoader2 className="mr-2 h-5 w-5 animate-spin" />
        ) : (
          <FcGoogle className="h-5 w-5" />
        )}
      </Button>
      <Button
        size="lg"
        className="w-full"
        disabled={loading.status}
        variant="outline"
        onClick={() => handleSocialButtonClick(constants.PROVIDERS.github)}
      >
        {loading.status && loading.provider === constants.PROVIDERS.github ? (
          <LuLoader2 className="mr-2 h-5 w-5 animate-spin" />
        ) : (
          <FaGithub className="h-5 w-5" />
        )}
      </Button>
    </div>
  );
};
