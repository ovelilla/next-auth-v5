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
// Constants
import constants from "./constants/reset-form.constants";
// Hooks
import ResetHook from "../../hooks/reset.hook";

export const ResetForm = (): React.ReactElement => {
  const { errorMessage, form, handleSubmit, loading, successMessage } =
    ResetHook();

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
                    disabled={loading}
                    placeholder={constants.FIELD_EMAIL_PROPS.placeholder}
                    type={constants.FIELD_EMAIL_PROPS.type}
                  />
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
          {...{ loading }}
        />
      </form>
    </Form>
  );
};
