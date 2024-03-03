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
import { ButtonLink } from "@/components/button-link/button-link.component";
import { ButtonLoading } from "@/components/button-loading/button-loading.component";
import { Input } from "@/components/ui/input";
import { TogglePasswordButton } from "../../../../components/toggle-password-button/toggle-password-button.component";
// Constants
import authConstants from "../../../../constants/auth.constants";
import constants from "./constants/login.constants";
// Hooks
import LoginHook from "../../hooks/login.hook";

export const LoginForm = (): React.ReactElement => {
  const {
    errorMessage,
    form,
    handleToggleShowPassword,
    handleSubmit,
    loading,
    showPassword,
    showTwoFactor,
    successMessage,
  } = LoginHook();

  const passwordType = showPassword
    ? constants.FIELD_PASSWORD_TYPE_VISIBLE
    : constants.FIELD_PASSWORD_TYPE_HIDDEN;
  const submitLabel = showTwoFactor
    ? constants.BUTTON_SUBMIT_LABEL_TWO_FACTOR
    : constants.BUTTON_SUBMIT_LABEL_DEFAULT;
  const submitLoading =
    loading.status && loading.provider === authConstants.PROVIDERS.credentials;

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
        <div className="space-y-4">
          {showTwoFactor && (
            <FormField
              control={form.control}
              name={constants.FIELD_TWO_FACTOR_PROPS.name}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    {constants.FIELD_TWO_FACTOR_PROPS.label}
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={loading.status}
                      placeholder={constants.FIELD_TWO_FACTOR_PROPS.placeholder}
                      type={constants.FIELD_TWO_FACTOR_PROPS.type}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}
          {!showTwoFactor && (
            <>
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
                    <FormLabel>
                      {constants.FIELD_PASSWORD_PROPS.label}
                    </FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input
                          {...field}
                          disabled={loading.status}
                          placeholder={
                            constants.FIELD_PASSWORD_PROPS.placeholder
                          }
                          type={passwordType}
                          className="pr-12"
                        />
                        <TogglePasswordButton
                          {...{ handleToggleShowPassword, showPassword }}
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                    <ButtonLink
                      {...constants.BUTTON_LINK_FORGOT_PASSWORD_PROPS}
                    />
                  </FormItem>
                )}
              />
            </>
          )}
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
          {...{ loading: submitLoading, label: submitLabel }}
        />
      </form>
    </Form>
  );
};
