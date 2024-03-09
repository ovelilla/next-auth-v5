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
  setShowTwoFactor,
  setSuccessMessage,
  setLoading,
  values,
}: SubmitHandlerPropsType): Promise<void> => {
  setErrorMessage("");
  setSuccessMessage("");
  setLoading({ provider: constants.PROVIDERS.credentials, status: true });

  try {
    const data = await loginAction({ values });
    if (data?.error) {
      setErrorMessage(data.error);
      form.reset();
    }
    if (data?.success) {
      setSuccessMessage(data.success);
      form.reset();
    }
    if (data?.twoFactor) {
      setShowTwoFactor(true);
    }
  } catch (error) {
    setErrorMessage("Something went wrong");
  } finally {
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
  setShowTwoFactor,
  setSuccessMessage,
  setLoading,
  showPassword,
}: LoginHandlersPropsType): LoginHandlersReturnType => {
  return {
    handleSubmit: (values: LoginFormValuesType) =>
      submitHandler({
        form,
        setErrorMessage,
        setShowTwoFactor,
        setSuccessMessage,
        setLoading,
        values,
      }),
    handleToggleShowPassword: () =>
      toggleShowPasswordHandler({ setShowPassword, showPassword }),
  };
};

export default LoginHandlers;
