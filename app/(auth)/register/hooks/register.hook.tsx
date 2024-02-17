// Vendors
import { useForm } from "react-hook-form";
import { useState, useTransition } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
// Handlers
import RegisterHandlers from "../handlers/register.handlers";
// Schemas
import { RegisterSchema } from "../schemas/register.schema";
// Types
import { RegisterFormValuesType } from "../types/register-form-values.type";
import { RegisterHookReturnType } from "./types/register-hook-return.type";

const RegisterHook = (): RegisterHookReturnType => {
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [isLoading, setIsLoading ] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string>("");

  const form = useForm<RegisterFormValuesType>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { handleSubmit } = RegisterHandlers({
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

export default RegisterHook;
