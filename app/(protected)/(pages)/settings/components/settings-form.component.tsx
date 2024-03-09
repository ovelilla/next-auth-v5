"use client";
// Components
import { Alert } from "@/components/alert/alert.component";
import { ButtonLoading } from "@/components/button-loading/button-loading.component";
import {
  Form,
  FormField,
  FormControl,
  FormItem,
  FormLabel,
  FormDescription,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { TogglePasswordButton } from "@/components/toggle-password-button/toggle-password-button.component";
// Constants
import constants from "./constants/settings.constants";
// Hooks
import SettingsHook from "../hooks/settings.hook";

export const SettingsForm = () => {
  const {
    form,
    handleSubmit,
    handleToggleShowPassword,
    handleToggleShowNewPassword,
    loading,
    showPassword,
    showNewPassword,
    errorMessage,
    successMessage,
    user,
  } = SettingsHook();

  const passwordType = showPassword
    ? constants.FIELD_PASSWORD_TYPE_VISIBLE
    : constants.FIELD_PASSWORD_TYPE_HIDDEN;

  const newPasswordType = showNewPassword
    ? constants.FIELD_PASSWORD_TYPE_VISIBLE
    : constants.FIELD_PASSWORD_TYPE_HIDDEN;

  return (
    <Form {...form}>
      <form className="space-y-6" onSubmit={form.handleSubmit(handleSubmit)}>
        <div className="space-y-4">
          <FormField
            control={form.control}
            name={constants.FIELD_NAME_PROPS.name}
            render={({ field }) => (
              <FormItem>
                <FormLabel>{constants.FIELD_NAME_PROPS.label}</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    disabled={loading}
                    placeholder={constants.FIELD_NAME_PROPS.placeholder}
                    type={constants.FIELD_NAME_PROPS.type}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {!user?.isOAuth && (
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
                        disabled={loading}
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
                          placeholder={
                            constants.FIELD_PASSWORD_PROPS.placeholder
                          }
                          type={passwordType}
                          disabled={loading}
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
              <FormField
                control={form.control}
                name={constants.FIELD_NEW_PASSWORD_PROPS.name}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      {constants.FIELD_NEW_PASSWORD_PROPS.label}
                    </FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input
                          {...field}
                          placeholder={
                            constants.FIELD_NEW_PASSWORD_PROPS.placeholder
                          }
                          type={newPasswordType}
                          disabled={loading}
                        />
                        <TogglePasswordButton
                          {...{
                            handleToggleShowPassword:
                              handleToggleShowNewPassword,
                            showPassword: showNewPassword,
                          }}
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </>
          )}
          <FormField
            control={form.control}
            name={constants.FIELD_ROLE_PROPS.name}
            render={({ field }) => (
              <FormItem>
                <FormLabel>{constants.FIELD_ROLE_PROPS.label}</FormLabel>
                <Select
                  disabled={loading}
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue
                        placeholder={constants.FIELD_ROLE_PROPS.placeholder}
                      />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {constants.FIELD_ROLE_PROPS.items.map((item, index) => (
                      <SelectItem key={index} value={item.value}>
                        {item.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          {user?.isOAuth === false && (
            <FormField
              control={form.control}
              name={constants.FIELD_IS_TWO_FACTOR_ENABLED_PROPS.name}
              render={({ field }) => (
                <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3">
                  <div className="flex flex-col gap-1">
                    <FormLabel>
                      {constants.FIELD_IS_TWO_FACTOR_ENABLED_PROPS.label}
                    </FormLabel>
                    <FormDescription>
                      {constants.FIELD_IS_TWO_FACTOR_ENABLED_PROPS.description}
                    </FormDescription>
                  </div>
                  <FormControl>
                    <Switch
                      disabled={loading}
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
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
        <ButtonLoading {...constants.BUTTON_SUBMIT_PROPS} {...{ loading }} />
      </form>
    </Form>
  );
};
