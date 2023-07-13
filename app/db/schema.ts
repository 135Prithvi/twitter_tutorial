import {
  int,
  mysqlEnum,
  mysqlTable,
  serial,
  uniqueIndex,
  varchar,
  bigint,
  index,
  timestamp

} from "drizzle-orm/mysql-core";

export const tweets = mysqlTable(
  "tweets",
  {
    id: bigint("tweet_id", { mode: "bigint" }).primaryKey().autoincrement(),
    content: varchar("content", { length: 256 }),
    username: varchar("username", { length: 256 }),
    likes: bigint("likes", { mode: "number" }).default(0),
    retweets: bigint("retweets", { mode: "number" }).default(0),
    replies: bigint("replies_tweet_id", { mode: "bigint" }),
    created_at:timestamp("created_at").defaultNow()
  },
  (table) => {
    return {
      repliesIdx: index("replies_idx").on(table.replies),
    };
  }
);
export const likes = mysqlTable(
  "likes",
  {
    id: bigint("likes_id", { mode: "bigint" }).primaryKey().autoincrement(),
    username: varchar("username", { length: 256 }),
    tweet_id: bigint("tweet_id", { mode: "bigint" }),
    created_at:timestamp("created_at").defaultNow()
  },
  (table) => {
    return {
      tweetIdx: index("tweet_idx").on(table.tweet_id),
      userIdx: index("user_idx").on(table.username),
    };
  }
);
