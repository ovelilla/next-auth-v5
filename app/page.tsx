"use client";
// Vendors
import { useRouter } from "next/navigation";
// Components
import { Button } from "@/components/ui/button";

const Home = (): React.ReactElement => {
  const router = useRouter();

  const handleOnClick = () => {
    router.push("/login");
  };

  return (
    <main className="flex flex-col items-center justify-center h-full">
      <div className="flex flex-col gap-y-2">
        <h1 className="text-4xl font-semibold">Auth</h1>
        <p>A simple authentication service</p>
        <div>
          <Button onClick={handleOnClick}>Sign in</Button>
        </div>
      </div>
    </main>
  );
};

export default Home;
