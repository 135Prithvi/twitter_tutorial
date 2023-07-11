import { SignUp } from "@clerk/nextjs";
import Link from "next/link";
import { currentUser } from '@clerk/nextjs';
export const runtime = "nodejs"
export default async function Home() {
  const user = await currentUser();
  if (!user) return <div>Not logged in</div>;
  const data = [
    {
      id: "fd",
      author: {
        name: "elonmusk",
        image:
          "https://pbs.twimg.com/profile_images/1663819132234784770/2A7NJSJg_400x400.jpg",
      },
      createdAt: new Date(),
      content: "This is the first post.",
    },
    {
      id: "szgf",
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
        <div className="flex w-full border-b border-slate-200 border-opacity-40 p-1">
          <img
            src={
             user.imageUrl || "https://pbs.twimg.com/profile_images/1662398681713131522/SumjkDX0_400x400.jpg"
            }
            alt="twitter user"
            className="ml-3 h-14 w-14 rounded-full"
          />
        
          <form action="" className="w-full">
            <input
              type="text"
              id="tweet"
              className="w-full flex-grow bg-transparent p-4 text-xl outline-none "
              placeholder="What is happening?!"
              autoComplete="off"
            />
            <div className="mt-2 flex justify-between pl-4 py-2 ">
              <div className="flex space-x-5 items-center">
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className="r-1gfgf0w r-4qtqp9 r-yyyyoo r-z80fyv r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-19wmn03 text-blue-500 fill-blue-500 w-6 h-6"
                >
                  <g>
                    <path d="M3 5.5C3 4.119 4.119 3 5.5 3h13C19.881 3 21 4.119 21 5.5v13c0 1.381-1.119 2.5-2.5 2.5h-13C4.119 21 3 19.881 3 18.5v-13zM5.5 5c-.276 0-.5.224-.5.5v9.086l3-3 3 3 5-5 3 3V5.5c0-.276-.224-.5-.5-.5h-13zM19 15.414l-3-3-5 5-3-3-3 3V18.5c0 .276.224.5.5.5h13c.276 0 .5-.224.5-.5v-3.086zM9.75 7C8.784 7 8 7.784 8 8.75s.784 1.75 1.75 1.75 1.75-.784 1.75-1.75S10.716 7 9.75 7z"></path>
                  </g>
                </svg>
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
              <button className="text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2  dark:focus:ring-yellow-900">
                Tweet
              </button>
            </div>
          </form>
        </div>
        <div className="flex w-full flex-col">
          {[...data]?.map((post) => (
            <div
              key={post.id}
              className="border-b border-slate-200 border-opacity-40 p-3"
            >
              <div className="flex gap-2">
                <Link href={`${post.author.name} `} shallow className="h-10">
                  <img
                    src={post.author.image as string}
                    alt="twitter user"
                    className=" h-10 w-10 rounded-full"
                  />
                </Link>
                <div className="flex flex-col">
                  <span className="align-text-top text-xs opacity-50">
                    <Link href={`${post.author.name} `}>
                      {`@` + post.author.name?.split(" ").join("")}
                    </Link>
                    <span className="font-thin">{` · 20 days ago`}</span>
                  </span>

                  <Link href={`/${post.author.name}/status/${post.id} `}>
                    <span>{post.content}</span>
                  </Link>
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
                      <span className="text-sm opacity-60">598</span>
                    </div>
                    <div className="flex items-end space-x-3 ">
                      <svg
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        className="r-1gfgf0w r-4qtqp9 r-yyyyoo r-z80fyv r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-19wmn03 text-blue-500 fill-blue-500 w-6 h-6"
                      >
                        <g>
                          <path d="M16.697 5.5c-1.222-.06-2.679.51-3.89 2.16l-.805 1.09-.806-1.09C9.984 6.01 8.526 5.44 7.304 5.5c-1.243.07-2.349.78-2.91 1.91-.552 1.12-.633 2.78.479 4.82 1.074 1.97 3.257 4.27 7.129 6.61 3.87-2.34 6.052-4.64 7.126-6.61 1.111-2.04 1.03-3.7.477-4.82-.561-1.13-1.666-1.84-2.908-1.91zm4.187 7.69c-1.351 2.48-4.001 5.12-8.379 7.67l-.503.3-.504-.3c-4.379-2.55-7.029-5.19-8.382-7.67-1.36-2.5-1.41-4.86-.514-6.67.887-1.79 2.647-2.91 4.601-3.01 1.651-.09 3.368.56 4.798 2.01 1.429-1.45 3.146-2.1 4.796-2.01 1.954.1 3.714 1.22 4.601 3.01.896 1.81.846 4.17-.514 6.67z"></path>
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
                          <path d="M8.75 21V3h2v18h-2zM18 21V8.5h2V21h-2zM4 21l.004-10h2L6 21H4zm9.248 0v-7h2v7h-2z"></path>
                        </g>
                      </svg>
                      <span className="text-sm opacity-60">598</span>
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
          ))}
        </div>
      </div>
    </main>
  );
}
