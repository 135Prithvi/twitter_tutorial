CREATE TABLE `tweets` (
	`tweet_id` bigint PRIMARY KEY NOT NULL,
	`content` varchar(256),
	`username` varchar(256),
	`likes` bigint DEFAULT 0,
	`retweets` bigint DEFAULT 0,
	`replies_tweet_id` bigint);
--> statement-breakpoint
CREATE INDEX `replies_idx` ON `tweets` (`replies_tweet_id`);