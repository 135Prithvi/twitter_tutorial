import { migrate } from "drizzle-orm/planetscale-serverless/migrator";
import { db } from "../db";
import { tweets } from "../db/schema";
export default async function Jp() {
  const data = [
    {
      id: BigInt(4232323232),

      username: "elonmusk",

      content: "This is the first post.",
    },
    {
      id: BigInt(4257857532),

      username: "TateTheTalisman",

      content: "This is the second post.",
    },
    // Add more fake data items as needed
  ];
  // const res = await db.insert(tweets).values(data);
  return "ok";
}
