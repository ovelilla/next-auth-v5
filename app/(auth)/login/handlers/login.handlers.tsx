// Actions
import { loginAction } from "../actions/login.actions";
// Constants
import constants from "../../constants/auth.constants";
// Types
import { LoginFormValuesType } from "../types/login-form-values.type";
import { LoginHandlersPropsType } from "./types/login-handlers-props.type";
import { LoginHandlersReturnType } from "./types/login-handlers-return.type";
import { SubmitHandlerPropsType } from "./types/submit-handler-props.type";

const submitHandler = async ({
  form,
  setErrorMessage,
  setSuccessMessage,
  setLoading,
  urlCallback,
  values,
}: SubmitHandlerPropsType): Promise<void> => {
  setErrorMessage("");
  setSuccessMessage("");
  setLoading({ provider: constants.PROVIDERS.credentials, status: true });

  try {
    const data = await loginAction({ values, urlCallback });

    if (data?.error) {
      setErrorMessage(data.error);
    }

    if (data?.success) {
      setSuccessMessage(data.success);
    }
  } catch (error) {
    setErrorMessage("Something went wrong");
  } finally {
    form.reset();
    setLoading({ provider: constants.PROVIDERS.credentials, status: false });
  }
};

const LoginHandlers = ({
  form,
  setErrorMessage,
  setSuccessMessage,
  setLoading,
  urlCallback,
}: LoginHandlersPropsType): LoginHandlersReturnType => {
  return {
    handleSubmit: (values: LoginFormValuesType) =>
      submitHandler({
        form,
        setErrorMessage,
        setSuccessMessage,
        setLoading,
        urlCallback,
        values,
      }),
  };
};

export default LoginHandlers;
