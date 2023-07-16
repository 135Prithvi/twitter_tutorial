"use client";

import { UserButton, UserProfile, useUser } from "@clerk/nextjs";
import { useRef, useState } from "react";
import tweetReply from "../actions/tweetReply";
import tweetAction from "../actions/tweet";
import { FormEvent } from "react";
import { useUploadThing } from "../utils/uploadthing";
export default function TweetComposer({
  reply_tweet_id,
}: {
  reply_tweet_id: bigint | undefined;
}) {
  const [tweet, setTweet] = useState("");
  const [isUploadeding, setUploading] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const mediaRef = useRef(null);
  const { isLoaded, isSignedIn, user } = useUser();
  const { startUpload } = useUploadThing("imageUploader", {
    onClientUploadComplete: (v) => {
      
    },
    onUploadError: () => {
      alert("error occurred while uploading");
    },
  });
  if (!isLoaded || !isSignedIn) {
    return null;
  }
  const addImageToPost = (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };
  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!reply_tweet_id) {
      if (!selectedFile) {
        setUploading(true)
        await tweetAction(user?.username, tweet);
        setTweet("");
        setUploading(false)
        return null;
      }
      setUploading(true)
      const filess = await startUpload([selectedFile]);

      await tweetAction(user?.username, `${tweet} ${filess[0].fileUrl}`);
      
      setTweet("");
      setUploading(false)
      setSelectedFile(null);
      return null;
    }
    await tweetReply(reply_tweet_id, tweet);
    setTweet("");
  }
  return (
    <div className="flex w-full border-b border-slate-200 border-opacity-40 p-1 h-auto">
      <img
        src={
          user.imageUrl ||
          "https://pbs.twimg.com/profile_images/1471990369176875011/B29AATen_400x400.jpg"
        }
        alt="twitter user"
        className="ml-3 h-14 w-14 rounded-full"
      />

      <form onSubmit={handleSubmit} className="w-full h-auto">
        <textarea
          id="tweet"
          name="tweet"
          disabled={isUploadeding}
          value={tweet}
          onChange={(e) => setTweet(e.target.value)}
          className="w-full flex- resize-none h-auto  bg-transparent p-4 text-xl outline-none break-words "
          placeholder="What is happening?!"
          autoComplete="off"
        />
        {selectedFile ? (
          <div className="relative">
            <div
            
              className="absolute w-8 h-8 bg-[#15181c] hover:bg-[#272c26] 
                bg-opacity-75 rounded-full flex items-center justify-center top-1 left-1 cursor-pointer"
              onClick={() => setSelectedFile(null)}
            >
              {/* <XIcon className="text-white h-5" /> */}
            </div>
            <img
              src={URL.createObjectURL(selectedFile)}
              alt=""
              className="rounded-2xl max-h-80 object-contain"
            />
          </div>
        ) : null}
        <div className="mt-2 flex justify-between pl-4 py-2 ">
          <div className="flex space-x-5 items-center">
            <div onClick={() => mediaRef.current?.click()}>
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="r-1gfgf0w r-4qtqp9 r-yyyyoo r-z80fyv r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-19wmn03 text-blue-500 fill-blue-500 w-6 h-6"
              >
                <g>
                  <path d="M3 5.5C3 4.119 4.119 3 5.5 3h13C19.881 3 21 4.119 21 5.5v13c0 1.381-1.119 2.5-2.5 2.5h-13C4.119 21 3 19.881 3 18.5v-13zM5.5 5c-.276 0-.5.224-.5.5v9.086l3-3 3 3 5-5 3 3V5.5c0-.276-.224-.5-.5-.5h-13zM19 15.414l-3-3-5 5-3-3-3 3V18.5c0 .276.224.5.5.5h13c.276 0 .5-.224.5-.5v-3.086zM9.75 7C8.784 7 8 7.784 8 8.75s.784 1.75 1.75 1.75 1.75-.784 1.75-1.75S10.716 7 9.75 7z"></path>
                </g>
              </svg>
              <input
                type="file"
                ref={mediaRef}
                hidden
                disabled={isUploadeding}
                onChange={addImageToPost}
              />
            </div>
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="r-1gfgf0w r-4qtqp9 r-yyyyoo r-z80fyv r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-19wmn03 text-blue-500 fill-blue-500 w-6 h-6"
            >
              <g>
                <path d="M3 5.5C3 4.119 4.12 3 5.5 3h13C19.88 3 21 4.119 21 5.5v13c0 1.381-1.12 2.5-2.5 2.5h-13C4.12 21 3 19.881 3 18.5v-13zM5.5 5c-.28 0-.5.224-.5.5v13c0 .276.22.5.5.5h13c.28 0 .5-.224.5-.5v-13c0-.276-.22-.5-.5-.5h-13zM18 10.711V9.25h-3.74v5.5h1.44v-1.719h1.7V11.57h-1.7v-.859H18zM11.79 9.25h1.44v5.5h-1.44v-5.5zm-3.07 1.375c.34 0 .77.172 1.02.43l1.03-.86c-.51-.601-1.28-.945-2.05-.945C7.19 9.25 6 10.453 6 12s1.19 2.75 2.72 2.75c.85 0 1.54-.344 2.05-.945v-2.149H8.38v1.032H9.4v.515c-.17.086-.42.172-.68.172-.76 0-1.36-.602-1.36-1.375 0-.688.6-1.375 1.36-1.375z"></path>
              </g>
            </svg>
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="r-1gfgf0w r-4qtqp9 r-yyyyoo r-z80fyv r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-19wmn03 text-blue-500 fill-blue-500 w-6 h-6"
            >
              <g>
                <path d="M6 5c-1.1 0-2 .895-2 2s.9 2 2 2 2-.895 2-2-.9-2-2-2zM2 7c0-2.209 1.79-4 4-4s4 1.791 4 4-1.79 4-4 4-4-1.791-4-4zm20 1H12V6h10v2zM6 15c-1.1 0-2 .895-2 2s.9 2 2 2 2-.895 2-2-.9-2-2-2zm-4 2c0-2.209 1.79-4 4-4s4 1.791 4 4-1.79 4-4 4-4-1.791-4-4zm20 1H12v-2h10v2zM7 7c0 .552-.45 1-1 1s-1-.448-1-1 .45-1 1-1 1 .448 1 1z"></path>
              </g>
            </svg>
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="r-1gfgf0w r-4qtqp9 r-yyyyoo r-z80fyv r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-19wmn03 text-blue-500 fill-blue-500 w-6 h-6"
            >
              <g>
                <path d="M6 3V2h2v1h6V2h2v1h1.5C18.88 3 20 4.119 20 5.5v2h-2v-2c0-.276-.22-.5-.5-.5H16v1h-2V5H8v1H6V5H4.5c-.28 0-.5.224-.5.5v12c0 .276.22.5.5.5h3v2h-3C3.12 20 2 18.881 2 17.5v-12C2 4.119 3.12 3 4.5 3H6zm9.5 8c-2.49 0-4.5 2.015-4.5 4.5s2.01 4.5 4.5 4.5 4.5-2.015 4.5-4.5-2.01-4.5-4.5-4.5zM9 15.5C9 11.91 11.91 9 15.5 9s6.5 2.91 6.5 6.5-2.91 6.5-6.5 6.5S9 19.09 9 15.5zm5.5-2.5h2v2.086l1.71 1.707-1.42 1.414-2.29-2.293V13z"></path>
              </g>
            </svg>
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="r-1gfgf0w r-4qtqp9 r-yyyyoo r-z80fyv r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-19wmn03 text-blue-500 fill-blue-500 w-6 h-6"
            >
              <g>
                <path d="M12 7c-1.93 0-3.5 1.57-3.5 3.5S10.07 14 12 14s3.5-1.57 3.5-3.5S13.93 7 12 7zm0 5c-.827 0-1.5-.673-1.5-1.5S11.173 9 12 9s1.5.673 1.5 1.5S12.827 12 12 12zm0-10c-4.687 0-8.5 3.813-8.5 8.5 0 5.967 7.621 11.116 7.945 11.332l.555.37.555-.37c.324-.216 7.945-5.365 7.945-11.332C20.5 5.813 16.687 2 12 2zm0 17.77c-1.665-1.241-6.5-5.196-6.5-9.27C5.5 6.916 8.416 4 12 4s6.5 2.916 6.5 6.5c0 4.073-4.835 8.028-6.5 9.27z"></path>
              </g>
            </svg>
          </div>
          <button  disabled={isUploadeding} className="text-white disabled:bg-yellow-600 bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2  dark:focus:ring-yellow-900">
            Tweet
          </button>
        </div>
      </form>
    </div>
  );
}
