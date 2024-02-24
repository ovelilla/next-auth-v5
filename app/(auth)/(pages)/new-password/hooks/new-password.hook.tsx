// Vendors
import { useForm } from "react-hook-form";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
// Handlers
import NewPasswordHandlers from "../handlers/new-password.handlers";
// Schemas
import { NewPasswordSchema } from "../schemas/new-password.schema";
// Types
import { NewPasswordFormValuesType } from "../types/new-password-form-values.type";
import { NewPasswordHookReturnType } from "./types/new-password-hook-return.type";

const NewPasswordHook = (): NewPasswordHookReturnType => {
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [successMessage, setSuccessMessage] = useState<string>("");

  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const form = useForm<NewPasswordFormValuesType>({
    resolver: zodResolver(NewPasswordSchema),
    defaultValues: {
      password: "",
    },
  });

  const { handleSubmit, handleToggleShowPassword } = NewPasswordHandlers({
    form,
    setErrorMessage,
    setLoading,
    setShowPassword,
    setSuccessMessage,
    showPassword,
    token,
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

export default NewPasswordHook;
