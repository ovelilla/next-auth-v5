// Vendors
import { Dispatch, SetStateAction } from "react";

export type VerificationHandlersPropsType = {
  setErrorMessage: Dispatch<SetStateAction<string>>;
  setLoading: Dispatch<SetStateAction<boolean>>;
  setSuccessMessage: Dispatch<SetStateAction<string>>;
  token: string | null;
};
