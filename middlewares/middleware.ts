import { default as pluginStack } from "@/middlewares/stack";
import { Plugin } from "@/types/middleware/plugin";
import { NextMiddleware } from "next/server";

const middleware: NextMiddleware = async (request, event) => {
    const plugins: Plugin[] = [];
    const stack = await pluginStack({ event, plugins, request });
    return await stack(request, event);
}
export default middleware;