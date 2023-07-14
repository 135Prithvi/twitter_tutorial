import type { Config } from "drizzle-kit";
import * as dotenv from "dotenv";
dotenv.config()
 
export default {
    out: "./drizzle",
    schema: "./app/db/schema.ts",
    dbCredentials: {
      connectionString: "mysql://461g5oiw5uhius324e9l:pscale_pw_oiXl1g3JrEaoWaxEMYmLaWjWk3MBz8awtpwIQH9PpTr@aws.connect.psdb.cloud/twitter?sslaccept=strict"
    },
    driver:"mysql2",
    breakpoints: true

   
  } satisfies Config;