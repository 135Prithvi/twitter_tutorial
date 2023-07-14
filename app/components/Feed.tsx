"use client";

import Tweets from "./Tweets";

interface PostFromFEED {
  username: string | null;
  id: bigint;
  content: string | null;
  likes: number | null;
  retweets: number | null;
  replies: bigint | null;
  created_at: Date | null;
}
export default function Feed({ posts }: { posts: PostFromFEED[] }) {
  return (
    <div className="flex w-full flex-col">
      {[...posts]?.map((post) => (
        <Tweets post={post} />
      ))}
    </div>
  );
}
