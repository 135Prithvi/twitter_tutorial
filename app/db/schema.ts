import {
  int,
  mysqlEnum,
  mysqlTable,
  serial,
  uniqueIndex,
  varchar,
  bigint,
  index,

} from "drizzle-orm/mysql-core";

export const tweets = mysqlTable(
  "tweets",
  {
    id: bigint("tweet_id", { mode: "bigint" }).primaryKey(),
    content: varchar("content", { length: 256 }),
    username: varchar("username", { length: 256 }),
    likes: bigint("likes", { mode: "number" }).default(0),
    retweets: bigint("retweets", { mode: "number" }).default(0),
    replies: bigint("replies_tweet_id", { mode: "bigint" }),
  },
  (table) => {
    return {
      repliesIdx: index("replies_idx").on(table.replies),
    };
  }
);
