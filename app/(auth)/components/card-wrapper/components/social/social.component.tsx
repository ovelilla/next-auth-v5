"use client";
// Components
import { Button } from "@/components/ui/button";
// Icons
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

export const Social = (): React.ReactElement => (
  <div className="flex items-center w-full gap-x-2">
    <Button
      size="lg"
      className="w-full"
      variant="outline"
      onClick={() => console.log("google")}
    >
      <FcGoogle className="h-5 w-5" />
    </Button>
    <Button
      size="lg"
      className="w-full"
      variant="outline"
      onClick={() => console.log("github")}
    >
      <FaGithub className="h-5 w-5" />
    </Button>
  </div>
);
