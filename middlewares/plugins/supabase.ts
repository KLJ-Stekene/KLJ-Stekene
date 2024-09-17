import type { Database } from "@/types/supabase/database";

import { Plugin } from "@/types/middleware/plugin";
import { createServerClient } from "@supabase/ssr";
import { NextFetchEvent, NextRequest } from "next/server";

const plugin: Plugin =
    (next) => async (request: NextRequest, event: NextFetchEvent) => {
        // const supabase =
        createServerClient<Database>(
            process.env.SUPABASE_URL,
            process.env.SUPABASE_ANON_KEY,
            {
                cookies: {
                    getAll: () => request.cookies.getAll(),
                    setAll: (cookies) => {
                        for (const cookie of cookies) {
                            request.cookies.set(cookie);
                        }
                    },
                },
            },
        );

        return await next(request, event);
    };
export default plugin;
