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
import { ButtonLink } from "@/components/button-link/button-link.component";
import { Button } from "@/components/ui/button";
import { FormError } from "@/components/form-error/form-error.component";
import { FormSuccess } from "@/components/form-success/form-success.component";
import { Input } from "@/components/ui/input";
// Hooks
import LoginHook from "../../hooks/login.hook";
// Types
import { LoginFormPropsType } from "./types/login-form-props.types";

export const LoginForm = ({
  buttonLinkForgotPassword,
  buttonSubmit,
  fieldEmail,
  fieldPassword,
}: LoginFormPropsType): React.ReactElement => {
  const { errorMessage, form, handleSubmit, isLoading, successMessage } =
    LoginHook();

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
                    disabled={isLoading}
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
                    disabled={isLoading}
                    placeholder={fieldPassword.placeholder}
                    type="password"
                  />
                </FormControl>
                <FormMessage />
                <ButtonLink {...buttonLinkForgotPassword} />
              </FormItem>
            )}
          />
        </div>
        <FormError message={errorMessage} />
        <FormSuccess message={successMessage} />
        <Button disabled={isLoading} type="submit" className="w-full">
          {buttonSubmit.label}
        </Button>
      </form>
    </Form>
  );
};
