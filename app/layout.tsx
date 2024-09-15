import type { Metadata } from "next";

import { inter } from "@/components/fonts";
import Tools from "@/components/Tools";
import { cn } from "@/lib/utils";
import React from "react";

import "./globals.css";

export const metadata: Metadata = {
  description: "Generated by create next app",
  title: "Create Next App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(inter.variable)}>
        {children}
        <Tools />
      </body>
    </html>
  );
}
