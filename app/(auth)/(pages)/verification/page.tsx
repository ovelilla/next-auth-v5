"use client";
// Components
import { Alert } from "@/components/alert/alert.component";
import { BeatLoader } from "react-spinners";
import { CardWrapper } from "../../components/card-wrapper/card-wrapper.component";
// Constants
import constants from "./constants/verification.constants";
// Hooks
import VerificationHook from "./hooks/verification.hook";

const VerificationPage = (): React.ReactElement => {
  const { errorMessage, loading, successMessage } = VerificationHook();

  return (
    <CardWrapper {...constants.CARD_WRAPPER_PROPS}>
      <div className="flex flex-col items-center w-full justify-center">
        <BeatLoader {...constants.LOADER_PROPS} {...{ loading }} />
        <Alert
          {...constants.ALERT_ERROR_PROPS}
          {...{ message: errorMessage }}
        />
        <Alert
          {...constants.ALERT_SUCCESS_PROPS}
          {...{ message: successMessage }}
        />
      </div>
    </CardWrapper>
  );
};

export default VerificationPage;
