import type { Stack } from "@/types/middleware/stack";

import { pluginDefault } from "./plugins";

const stack: Stack = async ({ event, plugins, request }) => {
    if (plugins.length === 0) return pluginDefault(() => {});

    const [plugin, ...rest] = plugins;
    const next = await stack({ event, plugins: rest, request });
    return plugin(next);
};
export default stack;
