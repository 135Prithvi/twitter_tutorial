import { clerkClient } from "@clerk/nextjs";
import { Suspense } from "react";

export default async function ProfilePage({
  params: { username },
}: {
  params: { username: string };
}) {
  // const user = {

  //     data:{
  //         name:username,
  //         image:"https://pbs.twimg.com/profile_images/1662398681713131522/SumjkDX0_400x400.jpg"
  //     }
  // }
  const UserData = await clerkClient.users.getUserList({
    username: [username],
  });
  const user = UserData[0];
  console.log(UserData[0]);

  return (
    <>
      <main className="flex min-h-screen justify-center ">
        <div
          className="relative w-full max-w-xl border-x-2 border-slate-300 border-opacity-40 text-xl text-white
        "
        >
          <div className="flex h-48 w-full border-b border-slate-200 border-opacity-40 bg-[url('https://pbs.twimg.com/profile_banners/1300661071015936001/1676564910/600x200')] "></div>

          <div className="absolute  inset-y-[9.75rem] flex select-none	">
            <Suspense fallback={<img src={""} alt="" />}>
              <img
                src={user?.imageUrl as string}
                alt="twitter user"
                className="ml-3 h-20 w-20 rounded-full border-4 border-black"
              />
            </Suspense>
          </div>
          <div className="h-12" />
          <div className="flex flex-col">
            <span className="ml-4 text-lg font-bold">
              <Suspense fallback={<div>loading...</div>}>
                {" "}
                {user?.firstName + " " + user?.lastName}{" "}
              </Suspense>
            </span>
            <span className="ml-4 text-xs opacity-50">
              {" "}
              <Suspense fallback={<div>loading...</div>}>
                {" "}
                {`@` + user?.username?.split(" ").join("")}
              </Suspense>
            </span>
          </div>

          <div className="border-b border-slate-800 px- mt-3">
            <ul className="-mb-px flex grow flex-wrap text-center w-full text-sm font-medium">
              <li className="mr-2 grow" role="presentation">
                <span className="inline-block rounded grow w-full p-2 hover:bg-white/30">
                  Tweets
                </span>
              </li>
              <li className="grow" role="presentation">
                <span className="inline-block rounded grow w-full p-2 hover:bg-white/30">
                  Replies
                </span>
              </li>

              <li className="grow" role="presentation">
                <span className="inline-block rounded grow w-full p-2 hover:bg-white/30">
                  Likes
                </span>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </>
  );
}
