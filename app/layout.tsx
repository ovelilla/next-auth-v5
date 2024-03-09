// Vendors
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import { SessionProvider } from "next-auth/react";
import { Toaster } from "@/components/ui/sonner";
// Auth
import { auth } from "@/auth";
// Components
import { Header } from "@/components/header/header.component";
// Styles
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next Auth v5",
  description: "Next Auth v5",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();

  return (
    <SessionProvider session={session}>
      <html lang="en">
        <body className={inter.className}>
          <div className="flex flex-col h-full">
            <Header />
            <main className="flex grow">{children}</main>
          </div>
          <Toaster />
        </body>
      </html>
    </SessionProvider>
  );
}
