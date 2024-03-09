// Types
import { HeaderPropsType } from "./types/header-props.type";

export const Header = ({
  title,
  description,
}: HeaderPropsType): React.ReactElement => (
  <div className="flex flex-col gap-y-1">
    <h1 className="text-3xl lg:text-4xl font-bold">{title}</h1>
    <p className="text-muted-foreground text-md">{description}</p>
  </div>
);
