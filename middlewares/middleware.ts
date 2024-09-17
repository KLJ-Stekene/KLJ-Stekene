import { default as pluginStack } from "@/middlewares/stack";
import { Plugin } from "@/types/middleware/plugin";
import { NextMiddleware } from "next/server";

import { pluginSupabase as sb } from "./plugins";

const middleware: NextMiddleware = async (request, event) => {
    const plugins: Plugin[] = [sb];
    const stack = await pluginStack({ event, plugins, request });
    return await stack(request, event);
};
export default middleware;

export const config = {
    matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
