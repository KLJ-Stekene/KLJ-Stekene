import { Toaster as SonnerToaster } from "@/components/atoms/sonner";
import { Toaster as ShadCNToaster } from "@/components/atoms/toaster";
import React from "react";
import { FC } from "react";

const Hosts: FC = () => (
  <>
    <ShadCNToaster />
    <SonnerToaster richColors />
  </>
);
export default Hosts;
