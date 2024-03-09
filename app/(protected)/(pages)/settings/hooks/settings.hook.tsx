// Vendors
import { useForm } from "react-hook-form";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { UserRole } from "@prisma/client";
import { useSession } from "next-auth/react";
// Handlers
import SettingsHandlers from "../handlers/settings.handlers";
// Schemas
import { SettingsSchema } from "../schemas/settings.schema";
// Types
import { SettingsFormValuesType } from "../types/settings-form-values.type";
import { SettingsHookReturnType } from "./types/settings-hook-return.type";

const SettingsHook = (): SettingsHookReturnType => {
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showNewPassword, setShowNewPassword] = useState<boolean>(false);
  const [successMessage, setSuccessMessage] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const session = useSession();
  const user = session.data?.user;

  const form = useForm<SettingsFormValuesType>({
    resolver: zodResolver(SettingsSchema),
    defaultValues: {
      email: user?.email || "",
      isTwoFactorEnabled: user?.isTwoFactorEnabled || false,
      name: user?.name || "",
      newPassword: "",
      password: "",
      role: user?.role || UserRole.USER,
    },
  });

  const {
    handleSubmit,
    handleToggleShowNewPassword,
    handleToggleShowPassword,
  } = SettingsHandlers({
    setErrorMessage,
    setLoading,
    setShowNewPassword,
    setShowPassword,
    setSuccessMessage,
    showPassword,
    showNewPassword,
  });

  return {
    errorMessage,
    form,
    handleSubmit,
    handleToggleShowNewPassword,
    handleToggleShowPassword,
    loading,
    showNewPassword,
    showPassword,
    successMessage,
    user,
  };
};

export default SettingsHook;
