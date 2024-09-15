import { VercelToolbar } from "@vercel/toolbar/next";
import { headers } from "next/headers";
import React from "react";
import { FC } from "react";

const development = process.env.NODE_ENV === "development";
const Tools: FC = () => {
    const nonce = headers().get("x-nonce") ?? undefined;
    return (
        <>
            {development && <VercelToolbar nonce={nonce} />}
        </>
    );
};

export default Tools;