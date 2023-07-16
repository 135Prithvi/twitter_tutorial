import type { Config } from "drizzle-kit";
import * as dotenv from "dotenv";
// import { env } from "./app/env/env.mjs";
dotenv.config()
 
export default {
    out: "./drizzle",
    schema: "./app/db/schema.ts",
    dbCredentials: {
      connectionString: `mysql://${process.env.DATABASE_USERNAME}:${process.env.DATABASE_PASSWORD}@${process.env.DATABASE_HOST}/twitter-db?ssl={"rejectUnauthorized":true}`
    },
    driver:"mysql2",
    breakpoints: true

   
  } satisfies Config;