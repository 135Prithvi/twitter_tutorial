import { eq } from "drizzle-orm";
import { db } from "../db";
import { likes } from "../db/schema";
import AlreadyLiked from "./Likes";
import NotLiked from "./Notliked";

export default async function Liked({
  Clikes,
  tweet_id,
}: {
  Clikes: number | null;
  tweet_id: any;
}) {
  const liked = await db
    .select()
    .from(likes)
    .where(eq(likes.tweet_id, BigInt(tweet_id)))
    .where(eq(likes.username, "dickinsontiwari"));
  console.log(liked);
  return (
    <>
      {liked[0]?.tweet_id !== BigInt(tweet_id) ? (
       
        <NotLiked tweet_id={tweet_id} likes={Clikes}/>
      ) : (
        <AlreadyLiked tweet_id={tweet_id} likes={Clikes} />
      )}
    </>
  );
}
