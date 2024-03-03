"use client";
// Components
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Alert } from "@/components/alert/alert.component";
import { ButtonLoading } from "@/components/button-loading/button-loading.component";
import { Input } from "@/components/ui/input";
import { TogglePasswordButton } from "../../../../components/toggle-password-button/toggle-password-button.component";
// Constants
import constants from "./constants/new-password-form.constants";
// Hooks
import NewPasswordHook from "../../hooks/new-password.hook";

export const NewPasswordForm = (): React.ReactElement => {
  const {
    errorMessage,
    form,
    handleToggleShowPassword,
    handleSubmit,
    loading,
    showPassword,
    successMessage,
  } = NewPasswordHook();

  const passwordType = showPassword
    ? constants.FIELD_PASSWORD_TYPE_VISIBLE
    : constants.FIELD_PASSWORD_TYPE_HIDDEN;

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
        <div className="space-y-4">
          <FormField
            control={form.control}
            name={constants.FIELD_PASSWORD_PROPS.name}
            render={({ field }) => (
              <FormItem>
                <FormLabel>{constants.FIELD_PASSWORD_PROPS.label}</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input
                      {...field}
                      disabled={loading}
                      placeholder={constants.FIELD_PASSWORD_PROPS.placeholder}
                      type={passwordType}
                      className="pr-12"
                    />
                    <TogglePasswordButton
                      {...{ handleToggleShowPassword, showPassword }}
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Alert
          {...constants.ALERT_ERROR_PROPS}
          {...{ message: errorMessage }}
        />
        <Alert
          {...constants.ALERT_SUCCESS_PROPS}
          {...{ message: successMessage }}
        />
        <ButtonLoading {...constants.BUTTON_SUBMIT_PROPS} {...{ loading }} />
      </form>
    </Form>
  );
};
