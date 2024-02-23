"use client";
// Components
import { ButtonLink } from "@/components/button-link/button-link.component";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Header } from "./components/header/header.component";
import { Social } from "./components/social/social.component";
// Types
import { CardWrapperPropsType } from "./types/card-wrapper-props.type";

export const CardWrapper = ({
  buttonLink,
  children,
  header,
  showSocial,
}: CardWrapperPropsType): React.ReactElement => (
  <Card className="w-[400px] sm:m-auto">
    <CardHeader>
      <Header {...header} />
    </CardHeader>
    <CardContent>{children}</CardContent>
    {showSocial && (
      <CardFooter>
        <Social />
      </CardFooter>
    )}
    <CardFooter>
      <ButtonLink {...buttonLink} />
    </CardFooter>
  </Card>
);
