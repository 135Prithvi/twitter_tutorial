"use server";

import { FormEvent } from "react";
import { db } from "../db";
import { tweets } from "../db/schema";
import {revalidatePath} from "next/cache"
import { currentUser } from '@clerk/nextjs';
export default async function(reply_tweet_id:bigint, tweet:string,) {
    const user = await currentUser();
    const tweetPost = await db.insert(tweets).values({content:tweet,username:user?.username,replies:BigInt(reply_tweet_id) })
    revalidatePath("/")
}