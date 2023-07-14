import { migrate } from "drizzle-orm/planetscale-serverless/migrator";
import { db } from "../db";
import { likes, tweets } from "../db/schema";
import { redis } from "../cache/redis";
export default async function Jp() {
  // const res = await redis.set("elonmusk", "https://img.clerk.com/eyJ0eXBlIjoiZGVmYXVsdCIsImlpZCI6Imluc18yUzJrS1pDazJXOENoa3Y0dGtieWxlU1BDS0wiLCJyaWQiOiJ1c2VyXzJTMmxNbnc0ZlFpMzJyaHBxZzh5U1ROUE5iYiIsImluaXRpYWxzIjoiRU0iLCJzIjoiRGdxdTFaQ2ZSRWZlaVRPd0g3NkRKcjdCSHliNUN6ZzFCcldocDQ5dVp4WSJ9")
  return "ok";
}
