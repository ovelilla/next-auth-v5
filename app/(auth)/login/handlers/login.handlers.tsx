// Actions
import { loginAction } from "../actions/login.actions";
// Types
import { LoginFormValuesType } from "../types/login-form-values.type";
import { LoginHandlersPropsType } from "./types/login-handlers-props.type";
import { LoginHandlersReturnType } from "./types/login-handlers-return.type";
import { SubmitHandlerPropsType } from "./types/submit-handler-props.type";

const submitHandler = async ({
  form,
  setErrorMessage,
  setSuccessMessage,
  setIsLoading,
  values,
}: SubmitHandlerPropsType): Promise<void> => {
  const callbackUrl = "/dashboard";

  setErrorMessage("");
  setSuccessMessage("");
  setIsLoading(true);

  try {
    const data = await loginAction({ values, callbackUrl });

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
    setIsLoading(false);
  }
};

const LoginHandlers = ({
  form,
  setErrorMessage,
  setSuccessMessage,
  setIsLoading,
}: LoginHandlersPropsType): LoginHandlersReturnType => {
  return {
    handleSubmit: (values: LoginFormValuesType) =>
      submitHandler({
        form,
        setErrorMessage,
        setSuccessMessage,
        setIsLoading,
        values,
      }),
  };
};

export default LoginHandlers;
