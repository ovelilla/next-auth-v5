// Vendors
import { Dispatch, SetStateAction } from "react";

export type LoadHandlerPropsType = {
  setErrorMessage: Dispatch<SetStateAction<string>>;
  setLoading: Dispatch<SetStateAction<boolean>>;
  setSuccessMessage: Dispatch<SetStateAction<string>>;
  token: string | null;
};
