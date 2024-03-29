// Vendors
import { useForm } from "react-hook-form";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
// Constants
import constants from "../constants/login.constants";
// Handlers
import LoginHandlers from "../handlers/login.handlers";
// Schemas
import { LoginSchema } from "../schemas/login.schema";
// Stores
import { useAuthStore } from "@/app/(auth)/store/auth.store";
// Types
import { LoginFormValuesType } from "../types/login-form-values.type";
import { LoginHookReturnType } from "./types/login-hook-return.type";

const LoginHook = (): LoginHookReturnType => {
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showTwoFactor, setShowTwoFactor] = useState<boolean>(false);
  const [successMessage, setSuccessMessage] = useState<string>("");

  const { loading, setLoading } = useAuthStore();

  const searchParams = useSearchParams();
  const urlError = searchParams.get("error");

  const form = useForm<LoginFormValuesType>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
      code: "",
    },
  });

  const { handleSubmit, handleToggleShowPassword } = LoginHandlers({
    form,
    setErrorMessage,
    setLoading,
    setShowPassword,
    setShowTwoFactor,
    setSuccessMessage,
    showPassword,
  });

  useEffect(() => {
    if (urlError === constants.OAUTH_ACCOUNT_NOT_LINKED) {
      setErrorMessage(constants.OAUTH_ACCOUNT_NOT_LINKED_ERROR);
    }
  }, [urlError]);

  return {
    errorMessage,
    form,
    handleSubmit,
    handleToggleShowPassword,
    loading,
    showPassword,
    showTwoFactor,
    successMessage,
  };
};

export default LoginHook;
