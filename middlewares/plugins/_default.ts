import { Plugin } from "@/types/middleware/plugin";
import { NextResponse } from "next/server";

const plugin: Plugin = () => async () => NextResponse.next();
export default plugin;