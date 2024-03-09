// Actions
import { settingsAction } from "../actions/settings.action";
// Types
import { SettingsFormValuesType } from "../types/settings-form-values.type";
import { SettingsHandlersPropsType } from "./types/settings-handlers-props.type";
import { SettingsHandlersReturnType } from "./types/settings-handlers-return.type";
import { SubmitHandlerPropsType } from "./types/submit-handler-props.type";
import { ToggleShowPasswordHandlerPropsType } from "./types/toggle-show-password-handler-props.type";
import { ToggleShowNewPasswordHandlerPropsType } from "./types/toggle-show-new-password-handler-props.type";

const submitHandler = async ({
  setErrorMessage,
  setSuccessMessage,
  setLoading,
  values,
}: SubmitHandlerPropsType): Promise<void> => {
  setErrorMessage("");
  setSuccessMessage("");
  setLoading(true);

  try {
    const data = await settingsAction({ values });
    console.log(data);
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

const toggleShowPasswordHandler = ({
  setShowPassword,
  showPassword,
}: ToggleShowPasswordHandlerPropsType): void => {
  setShowPassword(!showPassword);
};

const toggleShowNewPasswordHandler = ({
  setShowNewPassword,
  showNewPassword,
}: ToggleShowNewPasswordHandlerPropsType): void => {
  setShowNewPassword(!showNewPassword);
};

const SettingHandlers = ({
  setErrorMessage,
  setLoading,
  setShowNewPassword,
  setShowPassword,
  setSuccessMessage,
  showNewPassword,
  showPassword,
}: SettingsHandlersPropsType): SettingsHandlersReturnType => {
  return {
    handleSubmit: (values: SettingsFormValuesType) =>
      submitHandler({
        setErrorMessage,
        setSuccessMessage,
        setLoading,
        values,
      }),
    handleToggleShowPassword: () =>
      toggleShowPasswordHandler({ setShowPassword, showPassword }),
    handleToggleShowNewPassword: () =>
      toggleShowNewPasswordHandler({ setShowNewPassword, showNewPassword }),
  };
};

export default SettingHandlers;
