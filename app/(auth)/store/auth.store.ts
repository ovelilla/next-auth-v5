// Vendors
import { create } from "zustand";
// Types
import { AuthStoreType } from "./types/auth.store.type";

export const useAuthStore = create<AuthStoreType>()((set) => ({
  loading: {
    provider: "",
    status: false,
  },
  setLoading: ({ provider, status }) =>
    set(() => ({
      loading: {
        provider,
        status,
      },
    })),
}));
