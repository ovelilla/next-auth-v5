// Vendors
import { useForm } from "react-hook-form";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
// Handlers
import ResetHandlers from "../handlers/reset.handlers";
// Schemas
import { ResetSchema } from "../schemas/reset.schema";
// Types
import { ResetFormValuesType } from "../types/reset-form-values.type";
import { ResetHookReturnType } from "./types/reset-hook-return.type";

const ResetHook = (): ResetHookReturnType => {
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [successMessage, setSuccessMessage] = useState<string>("");

  const form = useForm<ResetFormValuesType>({
    resolver: zodResolver(ResetSchema),
    defaultValues: {
      email: "",
    },
  });

  const { handleSubmit } = ResetHandlers({
    form,
    setErrorMessage,
    setLoading,
    setSuccessMessage,
  });

  return {
    errorMessage,
    form,
    handleSubmit,
    loading,
    successMessage,
  };
};

export default ResetHook;
