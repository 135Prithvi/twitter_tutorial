"use server";

import { FormEvent } from "react";
import { db } from "../db";
import { likes, tweets } from "../db/schema";
import {revalidatePath} from "next/cache"
import { eq } from "drizzle-orm";
export default async function(username:string, tweet_id:string,Clikes:number ) {

    const tweetPost = await db.update(tweets).set({likes:Clikes-1 }).where(eq(tweets.id,BigInt(tweet_id)))
    const liked = await db.delete(likes).where(eq(likes.tweet_id,BigInt(tweet_id)))
    revalidatePath("/ap")
}