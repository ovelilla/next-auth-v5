// Components
import { Container } from "@/components/container/container.component";
// Types
import { LayoutPropsType } from "./types/layout-props.type";

const ProtectedLayout = ({ children }: LayoutPropsType): React.ReactElement => {
  return (
    <Container>
      <div className="flex flex-col grow py-4 sm:py-6 lg:py-8">{children}</div>
    </Container>
  );
};

export default ProtectedLayout;
