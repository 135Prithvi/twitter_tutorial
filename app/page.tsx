import Link from "next/link";

import { db } from "./db";
import { tweets } from "./db/schema";
import TweetComposer from "./components/TweetComposer";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import Liked from "./components/Liked";
import { asc, desc, isNotNull, isNull } from "drizzle-orm";
import Image from "next/image";
import { Suspense } from "react";
import Tweets from "./components/Tweets";
dayjs.extend(relativeTime);
export const runtime = "nodejs";
export default async function Home() {
  // const user = await currentUser();
  // if (!user) return <div>Not logged in</div>;
  // const feed = await db.select().from(tweets).where(eq(tweets.replies,null));
  const feed = await db.query.tweets.findMany({
    where: isNull(tweets.replies),
    // limit: 6,
    orderBy: [desc(tweets.created_at)],
  });
  console.log(feed);
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
        <div className="flex w-full flex-col">
          {[...feed]?.map((post) => (
            <Tweets post={post} />
          ))}
        </div>
      </div>
    </main>
  );
}
