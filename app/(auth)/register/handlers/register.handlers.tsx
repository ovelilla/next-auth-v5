// Actions
import { registerAction } from "../actions/register.actions";
// Constants
import constants from "../../constants/auth.constants";
// Types
import { RegisterFormValuesType } from "../types/register-form-values.type";
import { RegisterHandlersPropsType } from "./types/register-handlers-props.type";
import { RegisterHandlersReturnType } from "./types/register-handlers-return.type";
import { SubmitHandlerPropsType } from "./types/submit-handler-props.type";

const submitHandler = async ({
  form,
  setErrorMessage,
  setSuccessMessage,
  setLoading,
  values,
}: SubmitHandlerPropsType): Promise<void> => {
  const callbackUrl = "/dashboard";

  setErrorMessage("");
  setSuccessMessage("");
  setLoading({ provider: constants.PROVIDERS.credentials, status: true });

  try {
    const data = await registerAction({ values, callbackUrl });

    if (data?.error) {
      setErrorMessage(data.error);
    } else if (data?.success) {
      setSuccessMessage(data.success);
    }
  } catch (error) {
    setErrorMessage("Something went wrong");
  } finally {
    form.reset();
    setLoading({ provider: constants.PROVIDERS.credentials, status: false });
  }
};

const RegisterHandlers = ({
  form,
  setErrorMessage,
  setSuccessMessage,
  setLoading,
}: RegisterHandlersPropsType): RegisterHandlersReturnType => {
  return {
    handleSubmit: (values: RegisterFormValuesType) =>
      submitHandler({
        form,
        setErrorMessage,
        setSuccessMessage,
        setLoading,
        values,
      }),
  };
};

export default RegisterHandlers;
