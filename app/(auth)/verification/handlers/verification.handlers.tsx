// Actions
import { verificationAction } from "../actions/verification.action";
// Types
import { VerificationHandlersPropsType } from "./types/verification-handlers-props.type";
import { VerificationHandlersReturnType } from "./types/verification-handlers-return.type";
import { LoadHandlerPropsType } from "./types/load-handler-props.type";

const loadHandler = async ({
  setErrorMessage,
  setLoading,
  setSuccessMessage,
  token,
}: LoadHandlerPropsType): Promise<void> => {
  if (!token) {
    setErrorMessage("Missing token");
    return;
  }
  setLoading(true);
  try {
    const data = await verificationAction({ token });
    if (data?.error) {
      setErrorMessage(data.error);
    }
    if (data?.success) {
      setSuccessMessage(data.success);
    }
  } catch (error) {
    setErrorMessage("Something went wrong");
  } finally {
    setLoading(false);
  }
};

const VerificationHandlers = ({
  setErrorMessage,
  setLoading,
  setSuccessMessage,
  token,
}: VerificationHandlersPropsType): VerificationHandlersReturnType => {
  return {
    handleLoad: () =>
      loadHandler({ setErrorMessage, setLoading, setSuccessMessage, token }),
  };
};

export default VerificationHandlers;
