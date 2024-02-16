import { createServer } from  "./src/webserver/webserver.ts";
import { load } from "https://deno.land/std@0.216.0/dotenv/mod.ts";
import { Env } from "./src/common/env.ts";


await load({export: true})

const port = Env.getEnvVarAsNumber("PORT");

createServer(port);