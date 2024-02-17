export type CardWrapperPropsType = {
  buttonLink: {
    fullWidth?: boolean;
    href: string;
    label: string;
  };
  children: React.ReactNode;
  header: {
    title: string;
    description: string;
  };
  showSocial?: boolean;
};
