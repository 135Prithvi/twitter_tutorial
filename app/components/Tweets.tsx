import Link from "next/link";


import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import Liked from "./Liked";

import Image from "next/image"
import { Suspense } from "react";
import { clerkClient } from "@clerk/nextjs";
dayjs.extend(relativeTime);
interface PostFromFEED {
    
        username: string | null;
        id: bigint;
        content: string | null;
        likes: number | null;
        retweets: number | null;
        replies: bigint | null;
        created_at: Date | null;
    
}
export default async function  Tweets({post}:{post:PostFromFEED}){
    const user = await clerkClient.users.getUserList({username:[post.username]});

    function extractURL(text: string | null) {
        const urlRegex = /(https?:\/\/[^\s]+)/;
        const match = text?.match(urlRegex);
    
        if (match) {
          const url = match[0];
          return url;
        }
    
        return "";
      }
      function removURL(text: string | null) {
        const urlRegex = /(https?:\/\/[^\s]+)/;
        const match = text?.match(urlRegex);
    
        if (match) {
          const url = match[0];
          const updatedText = text?.replace(url, "");
          return updatedText;
        }
    
        return text;
      }
    
    return (
        <div
        key={Number(post.id)}
        className="border-b border-slate-200 border-opacity-40 p-3"
      >
        <div className="flex gap-2">
          <Link href={`/${post.username}`} shallow className="h-10">
            <img
              src={user[0]?.imageUrl}
              alt="twitter user"
              className=" h-10 w-10 rounded-full"
            />
          </Link>
          <div className="flex flex-col">
            <span className="align-text-top text-xs opacity-50">
              <Link href={`${post.username} `}>
                {`@` + post.username?.split(" ").join("")}
              </Link>
              <span className="font-thin">{` · ${dayjs(
                post.created_at
              ).fromNow()}`}</span>
            </span>

            <Link href={`/${post.username}/status/${post.id} `}>
              <span>{removURL(post.content)}</span>
            </Link>
            {extractURL(post.content) && (
              <div className="relative w-full mt-2">
                <Image
                  src={extractURL(post.content)}
                  alt=""
                  width={600}
                  height={600}
                  className="rounded-2xl w-full object-contain "
                />
              </div>
            )}
            <div className="flex space-x-5 items-end mt-2">
              <div className="flex items-end space-x-3 ">
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className="r-1gfgf0w r-4qtqp9 r-yyyyoo r-z80fyv r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-19wmn03 text-blue-500 fill-blue-500 w-6 h-6"
                >
                  <g>
                    <path d="M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01zm8.005-6c-3.317 0-6.005 2.69-6.005 6 0 3.37 2.77 6.08 6.138 6.01l.351-.01h1.761v2.3l5.087-2.81c1.951-1.08 3.163-3.13 3.163-5.36 0-3.39-2.744-6.13-6.129-6.13H9.756z"></path>
                  </g>
                </svg>
                <span className="text-sm opacity-60">598</span>
              </div>
              <div className="flex items-end space-x-3 ">
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className="r-1gfgf0w r-4qtqp9 r-yyyyoo r-z80fyv r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-19wmn03 text-blue-500 fill-blue-500 w-6 h-6"
                >
                  <g>
                    <path d="M4.5 3.88l4.432 4.14-1.364 1.46L5.5 7.55V16c0 1.1.896 2 2 2H13v2H7.5c-2.209 0-4-1.79-4-4V7.55L1.432 9.48.068 8.02 4.5 3.88zM16.5 6H11V4h5.5c2.209 0 4 1.79 4 4v8.45l2.068-1.93 1.364 1.46-4.432 4.14-4.432-4.14 1.364-1.46 2.068 1.93V8c0-1.1-.896-2-2-2z"></path>
                  </g>
                </svg>
                <span className="text-sm opacity-60">
                  {post.retweets}
                </span>
              </div>
              <Suspense fallback={<>...</>}>
                {" "}
                <Liked tweet_id={post.id} Clikes={post.likes} />{" "}
              </Suspense>
              <div className="flex items-end space-x-3 ">
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className="r-1gfgf0w r-4qtqp9 r-yyyyoo r-z80fyv r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-19wmn03 text-blue-500 fill-blue-500 w-6 h-6"
                >
                  <g>
                    <path d="M8.75 21V3h2v18h-2zM18 21V8.5h2V21h-2zM4 21l.004-10h2L6 21H4zm9.248 0v-7h2v7h-2z"></path>
                  </g>
                </svg>
                <span className="text-sm opacity-60">{598}</span>
              </div>
              <div className="flex items-end px-4 ">
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className="r-1gfgf0w r-4qtqp9 r-yyyyoo r-z80fyv r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-19wmn03 text-gray-500 fill-gray-500 w-6 h-6"
                >
                  <g>
                    <path d="M17 4c-1.1 0-2 .9-2 2 0 .33.08.65.22.92C15.56 7.56 16.23 8 17 8c1.1 0 2-.9 2-2s-.9-2-2-2zm-4 2c0-2.21 1.79-4 4-4s4 1.79 4 4-1.79 4-4 4c-1.17 0-2.22-.5-2.95-1.3l-4.16 2.37c.07.3.11.61.11.93s-.04.63-.11.93l4.16 2.37c.73-.8 1.78-1.3 2.95-1.3 2.21 0 4 1.79 4 4s-1.79 4-4 4-4-1.79-4-4c0-.32.04-.63.11-.93L8.95 14.7C8.22 15.5 7.17 16 6 16c-2.21 0-4-1.79-4-4s1.79-4 4-4c1.17 0 2.22.5 2.95 1.3l4.16-2.37c-.07-.3-.11-.61-.11-.93zm-7 4c-1.1 0-2 .9-2 2s.9 2 2 2c.77 0 1.44-.44 1.78-1.08.14-.27.22-.59.22-.92s-.08-.65-.22-.92C7.44 10.44 6.77 10 6 10zm11 6c-.77 0-1.44.44-1.78 1.08-.14.27-.22.59-.22.92 0 1.1.9 2 2 2s2-.9 2-2-.9-2-2-2z"></path>
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}