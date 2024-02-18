type LoadingType = {
  provider: string;
  status: boolean;
};

export type AuthStoreType = {
  loading: LoadingType;
  setLoading: ({ provider, status }: LoadingType) => void;
};
