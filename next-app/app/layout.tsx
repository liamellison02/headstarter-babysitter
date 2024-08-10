import type { Metadata } from "next";
import { Dosis } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ClerkProvider } from "@clerk/nextjs";

const dosis = Dosis({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Headstarter Babysitter",
  description:
    "The ultimate companion to hold the hand of novice Headstarter fellows!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={dosis.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
