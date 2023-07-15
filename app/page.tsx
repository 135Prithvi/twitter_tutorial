import Link from "next/link";

import { db } from "./db";
import { tweets } from "./db/schema";
import TweetComposer from "./components/TweetComposer";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

import { desc, eq, isNull, sql } from "drizzle-orm";

import { Suspense } from "react";
import Tweets from "./components/Tweets";
import { clerkClient, currentUser } from "@clerk/nextjs";
import { redis } from "./cache/redis";
dayjs.extend(relativeTime);
export const runtime = "nodejs";
export default async function Home() {
  const user = await currentUser();

  if (!user)
    return (
      <div className="">
        Not logged in{" "}
        <Link
          className="hover:underline text-blue-600 hover:text-blue-500 font-bold"
          href={"/sign-up"}
        >
          pls signup
        </Link>{" "}
        or{" "}
        <Link
          className="hover:underline text-blue-600 hover:text-blue-500 font-bold"
          href={"/sign-in"}
        >
          login
        </Link>
      </div>
    );
  // const feed = await db.select().from(tweets).where(eq(tweets.replies,null));
  const feed = await db.query.tweets.findMany({
    where: isNull(tweets.replies),
    limit: 10,
    orderBy: [desc(tweets.created_at)],
  });

  for (let i = 0; i < feed.length; i++) {
    const imageUrl = await redis.get(`${feed[i].username}`);
    // Check if the user's image URL is in Redis cache
    const result = await db
      .select({ count: sql<number>`count(*)` })
      .from(tweets)
      .where(eq(tweets.replies, BigInt(feed[i].id)));
    if (imageUrl) {
      // If cached value is present, use it
      feed[i].imageUrl = imageUrl;
      feed[i].reply_count = result[0].count;
    } else {
      // If cached value is not present, fetch it and add it to Redis cache
      const user = await clerkClient.users.getUserList({
        username: [feed[i].username],
      });
      const imageUrl = user[0]?.imageUrl;
      feed[i].imageUrl = imageUrl;
      feed[i].reply_count = result[0].count;
      // Add the value to Redis cache
      redis.set(`${user[0]?.username}`, imageUrl);
    }
  }
  // console.log(feed);
  const data = [
    {
      id: BigInt(4232323232),
      author: {
        name: "elonmusk",
        image:
          "https://pbs.twimg.com/profile_images/1663819132234784770/2A7NJSJg_400x400.jpg",
      },
      createdAt: new Date(),
      content: "This is the first post.",
    },
    {
      id: BigInt(4257857532),
      author: {
        name: "TateTheTalisman",
        image:
          "https://pbs.twimg.com/profile_images/1664589364276461575/9dGp_mPS_400x400.jpg",
      },
      createdAt: new Date(),
      content: "This is the second post.",
    },
    // Add more fake data items as needed
  ];

  return (
    <main className="flex min-h-screen justify-center ">
      <div
        className="w-full max-w-xl border-x-2 border-slate-300 text-xl border-opacity-40 text-white
        "
      >
        <TweetComposer reply_tweet_id={undefined} />
        <Suspense
          fallback={
            <div className="flex w-full flex-col">
              {" "}
              <div role="status">
                <svg
                  aria-hidden="true"
                  className="inline w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
                <span className="sr-only">Loading...</span>
              </div>
            </div>
          }
        >
          <div className="flex w-full flex-col">
            {[...feed]?.map((post) => (
              <Tweets post={post} />
            ))}
          </div>
        </Suspense>
      </div>
    </main>
  );
}
