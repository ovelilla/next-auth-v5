// Vendors
import { useForm } from "react-hook-form";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
// Handlers
import RegisterHandlers from "../handlers/register.handlers";
// Schemas
import { RegisterSchema } from "../schemas/register.schema";
// Stores
import { useAuthStore } from "@/app/(auth)/store/auth.store";
// Types
import { RegisterFormValuesType } from "../types/register-form-values.type";
import { RegisterHookReturnType } from "./types/register-hook-return.type";

const RegisterHook = (): RegisterHookReturnType => {
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [successMessage, setSuccessMessage] = useState<string>("");

  const { loading, setLoading } = useAuthStore();

  const form = useForm<RegisterFormValuesType>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { handleSubmit, handleToggleShowPassword } = RegisterHandlers({
    form,
    setErrorMessage,
    setLoading,
    setShowPassword,
    setSuccessMessage,
    showPassword,
  });

  return {
    errorMessage,
    form,
    handleSubmit,
    handleToggleShowPassword,
    loading,
    showPassword,
    successMessage,
  };
};

export default RegisterHook;
