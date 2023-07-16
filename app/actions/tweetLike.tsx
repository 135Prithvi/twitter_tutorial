"use server";

import { FormEvent } from "react";
import { db } from "../db";
import { likes, tweets } from "../db/schema";
import { revalidatePath } from "next/cache";
import { eq } from "drizzle-orm";
import { currentUser } from "@clerk/nextjs";
export default async function (
  tweet_id: string,
  Clikes: number
) {
  const user = await currentUser();
  const tweetPost = await db
    .update(tweets)
    .set({ likes: Clikes + 1 })
    .where(eq(tweets.id, BigInt(tweet_id)));
  const liked = await db
    .insert(likes)
    .values({ tweet_id: BigInt(tweet_id), username: user?.username });
  revalidatePath("/ap");
}
