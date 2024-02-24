// Actions
import { newPasswordAction } from "../actions/new-password.action";
// Types
import { NewPasswordFormValuesType } from "../types/new-password-form-values.type";
import { NewPasswordHandlersPropsType } from "./types/new-password-handlers-props.type";
import { NewPasswordHandlersReturnType } from "./types/new-password-handlers-return.type";
import { SubmitHandlerPropsType } from "./types/submit-handler-props.type";
import { ToggleShowPasswordHandlerPropsType } from "./types/toggle-show-password-handler-props.type";

const submitHandler = async ({
  form,
  setErrorMessage,
  setSuccessMessage,
  setLoading,
  token,
  values,
}: SubmitHandlerPropsType): Promise<void> => {
  setErrorMessage("");
  setSuccessMessage("");
  setLoading(true);

  try {
    const data = await newPasswordAction({ values, token });

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
    setLoading(false);
  }
};

const toggleShowPasswordHandler = ({
  setShowPassword,
  showPassword,
}: ToggleShowPasswordHandlerPropsType): void => {
  setShowPassword(!showPassword);
};

const NewPasswordHandlers = ({
  form,
  setErrorMessage,
  setShowPassword,
  setSuccessMessage,
  setLoading,
  showPassword,
  token,
}: NewPasswordHandlersPropsType): NewPasswordHandlersReturnType => {
  return {
    handleSubmit: (values: NewPasswordFormValuesType) =>
      submitHandler({
        form,
        setErrorMessage,
        setSuccessMessage,
        setLoading,
        token,
        values,
      }),
    handleToggleShowPassword: () =>
      toggleShowPasswordHandler({ setShowPassword, showPassword }),
  };
};

export default NewPasswordHandlers;
