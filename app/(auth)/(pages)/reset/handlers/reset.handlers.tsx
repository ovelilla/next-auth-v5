// Actions
import { resetAction } from "../actions/reset.action";
// Types
import { ResetFormValuesType } from "../types/reset-form-values.type";
import { ResetHandlersPropsType } from "./types/reset-handlers-props.type";
import { ResetHandlersReturnType } from "./types/reset-handlers-return.type";
import { SubmitHandlerPropsType } from "./types/submit-handler-props.type";

const submitHandler = async ({
  form,
  setErrorMessage,
  setSuccessMessage,
  setLoading,
  values,
}: SubmitHandlerPropsType): Promise<void> => {
  setErrorMessage("");
  setSuccessMessage("");
  setLoading(true);

  try {
    const data = await resetAction({ values });

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

const ResetHandlers = ({
  form,
  setErrorMessage,
  setSuccessMessage,
  setLoading,
}: ResetHandlersPropsType): ResetHandlersReturnType => {
  return {
    handleSubmit: (values: ResetFormValuesType) =>
      submitHandler({
        form,
        setErrorMessage,
        setSuccessMessage,
        setLoading,
        values,
      }),
  };
};

export default ResetHandlers;
