CREATE TABLE `likes` (
	`likes_id` bigint AUTO_INCREMENT PRIMARY KEY NOT NULL,
	`username` varchar(256),
	`tweet_id` bigint,
	`created_at` timestamp DEFAULT (now())
);
--> statement-breakpoint
CREATE INDEX `tweet_idx` ON `likes` (`tweet_id`);--> statement-breakpoint
CREATE INDEX `user_idx` ON `likes` (`username`);