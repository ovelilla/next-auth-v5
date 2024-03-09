// Components
import { Container } from "@/components/container/container.component";
// Types
import { LayoutPropsType } from "./types/layout-props.type";

const AuthLayout = ({ children }: LayoutPropsType): React.ReactElement => {
  return (
    <Container>
      <div className="flex sm:items-center justify-center grow py-4 sm:py-6 lg:py-8">
        {children}
      </div>
    </Container>
  );
};

export default AuthLayout;
