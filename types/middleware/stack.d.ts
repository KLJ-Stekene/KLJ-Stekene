import type { NextFetchEvent, NextRequest } from "next/server";

import type { Plugin } from "./plugin";

export interface StackProps {
    event: NextFetchEvent;
    plugins: Plugin[];
    request: NextRequest;
}
export type Stack = (props: StackProps) => Promise<NextMiddleware>;