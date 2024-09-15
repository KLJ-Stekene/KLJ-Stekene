"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import { ReactNode } from "react";

interface ProvidersProps {
  children: ReactNode;
}
const queryClient = new QueryClient();
const Providers = ({ children }: ProvidersProps) => {
  return (
    <>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </>
  );
};
export default Providers;
