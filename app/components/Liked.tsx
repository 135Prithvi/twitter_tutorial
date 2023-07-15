import { and, eq } from "drizzle-orm";
import { db } from "../db";
import { likes } from "../db/schema";
import AlreadyLiked from "./Likes";
import NotLiked from "./Notliked";
import { auth } from "@clerk/nextjs";

export default async function Liked({
  Clikes,
  tweet_id,
}: {
  Clikes: number | null;
  tweet_id: any;
}) {
  const {sessionClaims} = auth()
  const liked = await db
    .select()
    .from(likes)
    .where(
      and(
        eq(likes.tweet_id, BigInt(tweet_id)),
        eq(likes.username, `${sessionClaims?.username}`),
      )
    );
  // console.log(liked, `>>> ${tweet_id} `);
  return (
    <>
      {liked[0]?.username !== `${sessionClaims?.username}` ? (
        <NotLiked tweet_id={tweet_id} likes={Clikes} />
      ) : (
        <AlreadyLiked tweet_id={tweet_id} likes={Clikes} />
      )}
    </>
  );
}
