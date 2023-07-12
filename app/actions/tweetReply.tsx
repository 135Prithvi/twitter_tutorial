"use server";

import { FormEvent } from "react";
import { db } from "../db";
import { tweets } from "../db/schema";
import {revalidatePath} from "next/cache"
export default async function(reply_tweet_id:bigint, tweet:string) {

    const tweetPost = await db.insert(tweets).values({content:tweet,username:"dickinsontiwari",replies:BigInt(reply_tweet_id) })
    revalidatePath("/")
}