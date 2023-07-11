import {migrate} from "drizzle-orm/planetscale-serverless/migrator"
import { db } from "../db";
export default async function Jp(){
    const data  = await migrate(db, { migrationsFolder: './drizzle' });
    return "ok"
}