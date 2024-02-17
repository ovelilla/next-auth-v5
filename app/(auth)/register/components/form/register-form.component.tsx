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
import { Button } from "@/components/ui/button";
import { FormError } from "@/components/form-error/form-error.component";
import { FormSuccess } from "@/components/form-success/form-success.component";
import { Input } from "@/components/ui/input";
// Hooks
import RegisterHook from "../../hooks/register.hook";
// Types
import { RegisterFormPropsType } from "./types/register-form-props.types";

export const RegisterForm = ({
  buttonSubmit,
  fieldEmail,
  fieldPassword,
}: RegisterFormPropsType): React.ReactElement => {
  const { errorMessage, form, handleSubmit, isLoading, successMessage } =
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
