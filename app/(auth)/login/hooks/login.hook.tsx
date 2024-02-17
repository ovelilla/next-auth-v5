// Vendors
import { useForm } from "react-hook-form";
import { useState, useTransition } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
// Handlers
import LoginHandlers from "../handlers/login.handlers";
// Schemas
import { LoginSchema } from "../schemas/login.schema";
// Types
import { LoginFormValuesType } from "../types/login-form-values.type";
import { LoginHookReturnType } from "./types/login-hook-return.type";

const LoginHook = (): LoginHookReturnType => {
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [isLoading, setIsLoading ] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string>("");

  const form = useForm<LoginFormValuesType>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { handleSubmit } = LoginHandlers({
    form,
    setErrorMessage,
    setSuccessMessage,
    setIsLoading,
  });

  return {
    errorMessage,
    form,
    handleSubmit,
    isLoading,
    successMessage,
  };
};

export default LoginHook;
