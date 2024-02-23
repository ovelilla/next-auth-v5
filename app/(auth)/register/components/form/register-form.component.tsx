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
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
// Constants
import authConstants from "../../../constants/auth.constants";
import registerConstants from "../../constants/register.constants";
// Hooks
import RegisterHook from "../../hooks/register.hook";
// Icons
import { LuLoader2 } from "react-icons/lu";
// Types
import { RegisterFormPropsType } from "./types/register-form-props.types";

export const RegisterForm = ({
  buttonSubmit,
  fieldEmail,
  fieldPassword,
}: RegisterFormPropsType): React.ReactElement => {
  const { errorMessage, form, handleSubmit, loading, successMessage } =
    RegisterHook();

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
        <div className="space-y-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{fieldEmail.label}</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    disabled={loading.status}
                    placeholder={fieldEmail.placeholder}
                    type="email"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{fieldPassword.label}</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    disabled={loading.status}
                    placeholder={fieldPassword.placeholder}
                    type="password"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Alert
          {...registerConstants.ALERT_ERROR_PROPS}
          {...{ message: errorMessage }}
        />
        <Alert
          {...registerConstants.ALERT_SUCCESS_PROPS}
          {...{ message: successMessage }}
        />
        <Button disabled={loading.status} type="submit" className="w-full">
          {loading.status &&
          loading.provider === authConstants.PROVIDERS.credentials ? (
            <LuLoader2 className="mr-2 h-5 w-5 animate-spin" />
          ) : (
            buttonSubmit.label
          )}
        </Button>
      </form>
    </Form>
  );
};
