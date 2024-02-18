// Vendors
import { signIn } from "next-auth/react";
// Constants
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
// Types
import { SocialHandlersPropsType } from "./types/social-handlers-props.type";
import { SocialHandlersReturnType } from "./types/social-handlers-return.type";
import { SocialButtonClickHandlerPropsType } from "./types/social-button-click-handler-props.type";

const socialButtonClickHandler = async ({
  callbackUrl,
  setLoading,
  provider,
}: SocialButtonClickHandlerPropsType): Promise<void> => {
  setLoading({ provider, status: true });

  await signIn(provider, {
    callbackUrl: DEFAULT_LOGIN_REDIRECT,
  });
};

const SocialHandlers = ({
  callbackUrl,
  setLoading,
}: SocialHandlersPropsType): SocialHandlersReturnType => {
  return {
    handleSocialButtonClick: (provider: string) =>
      socialButtonClickHandler({
        callbackUrl,
        setLoading,
        provider,
      }),
  };
};

export default SocialHandlers;
