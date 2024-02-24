// Vendors
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
// Handlers
import VerificationHandlers from "../handlers/verification.handlers";
// Types
import { VerificationHookReturnType } from "./types/verification-hook-return.type";

const VerificationHook = (): VerificationHookReturnType => {
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [successMessage, setSuccessMessage] = useState<string>("");

  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const { handleLoad } = VerificationHandlers({
    setErrorMessage,
    setLoading,
    setSuccessMessage,
    token,
  });

  useEffect(() => {
    handleLoad();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    errorMessage,
    loading,
    successMessage,
  };
};

export default VerificationHook;
