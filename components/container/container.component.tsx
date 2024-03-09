// Types
import { ContainerPropsType } from "./types/container-props.type";

export const Container = ({
  children,
}: ContainerPropsType): React.ReactElement => {
  return (
    <div className="flex justify-center grow px-4 sm:px-6 lg:px-8">
      <div className="flex grow max-w-[1200px]">{children}</div>
    </div>
  );
};
