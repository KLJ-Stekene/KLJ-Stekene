import { NextMiddleware } from "next/server";

export type Plugin = (next: NextMiddleware) => NextMiddleware;