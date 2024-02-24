// Actions
import { loginAction } from "../actions/login.action";
// Constants
import constants from "../../../constants/auth.constants";
// Types
import { LoginFormValuesType } from "../types/login-form-values.type";
import { LoginHandlersPropsType } from "./types/login-handlers-props.type";
import { LoginHandlersReturnType } from "./types/login-handlers-return.type";
import { SubmitHandlerPropsType } from "./types/submit-handler-props.type";
import { ToggleShowPasswordHandlerPropsType } from "./types/toggle-show-password-handler-props.type";

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

const toggleShowPasswordHandler = ({
  setShowPassword,
  showPassword,
}: ToggleShowPasswordHandlerPropsType): void => {
  setShowPassword(!showPassword);
};

const LoginHandlers = ({
  form,
  setErrorMessage,
  setShowPassword,
  setSuccessMessage,
  setLoading,
  showPassword,
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
    handleToggleShowPassword: () =>
      toggleShowPasswordHandler({ setShowPassword, showPassword }),
  };
};

export default LoginHandlers;
