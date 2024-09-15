import type { Database } from "@/types/supabase/database";
import type { SupabaseClient } from "@supabase/supabase-js";

import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

const createClient: () => SupabaseClient<Database> = () =>
    createServerClient<Database>(
        process.env.SUPABASE_URL,
        process.env.SUPABASE_ANON_KEY,
        {
            cookies: {
                getAll: () => cookies().getAll(),
                setAll: (cookiesToSet) => {
                    for (const cookie of cookiesToSet) cookies().set(cookie);
                },
            },
        },
    );
export default createClient;
