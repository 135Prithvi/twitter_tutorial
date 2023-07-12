"use server";

import { FormEvent } from "react";
import { db } from "../db";
import { tweets } from "../db/schema";
import {revalidatePath} from "next/cache"
export default async function(username:string, tweet:string) {

    const tweetPost = await db.insert(tweets).values({content:tweet,username:username })
    revalidatePath("/")
}