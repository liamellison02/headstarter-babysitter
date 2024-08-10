import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { userId } = auth();

  if (userId) {
    redirect("/chat");
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-dark-200">
      {children}
    </main>
  );
};

export default Layout;
