const AuthLayout = ({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement => (
  <div className="flex sm:items-center justify-center w-full h-full sm:p-4">
    {children}
  </div>
);

export default AuthLayout;
