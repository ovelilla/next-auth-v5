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
import authConstants from "../../../../constants/auth.constants";
import constants from "./constants/register-form.constants";
// Hooks
import RegisterHook from "../../hooks/register.hook";

export const RegisterForm = (): React.ReactElement => {
  const {
    errorMessage,
    form,
    handleSubmit,
    handleToggleShowPassword,
    loading,
    showPassword,
    successMessage,
  } = RegisterHook();

  const passwordType = showPassword
    ? constants.TYPE_FIELD_PASSWORD_VISIBLE
    : constants.TYPE_FIELD_PASSWORD_HIDDEN;
  const submitLoading =
    loading.status && loading.provider === authConstants.PROVIDERS.credentials;

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
        <div className="space-y-4">
          <FormField
            control={form.control}
            name={constants.FIELD_EMAIL_PROPS.name}
            render={({ field }) => (
              <FormItem>
                <FormLabel>{constants.FIELD_EMAIL_PROPS.label}</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    disabled={loading.status}
                    placeholder={constants.FIELD_EMAIL_PROPS.placeholder}
                    type={constants.FIELD_EMAIL_PROPS.type}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
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
                      disabled={loading.status}
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
        <ButtonLoading
          {...constants.BUTTON_SUBMIT_PROPS}
          {...{ loading: submitLoading }}
        />
      </form>
    </Form>
  );
};
