declare namespace NodeJS {
    export interface ProcessEnv {
        NEXT_PUBLIC_SUPABASE_ANON_KEY: string;
        NEXT_PUBLIC_SUPABASE_URL: string;

        SUPABASE_ANON_KEY: string;
        SUPABASE_URL: string;
    }
}