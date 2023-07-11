export default async function ProfilePage({params:{username}}:{params:{username:string}}){
    const user = {
        data:{
            name:username,
            image:"https://pbs.twimg.com/profile_images/1662398681713131522/SumjkDX0_400x400.jpg"

        }
    }
    return (
        <>
             <main className="flex min-h-screen justify-center ">
        <div
          className="relative w-full max-w-xl border-x-2 border-slate-300 border-opacity-40 text-xl text-white
        "
        >
          <div className="flex h-48 w-full border-b border-slate-200 border-opacity-40 bg-[url('https://pbs.twimg.com/profile_banners/1300661071015936001/1676564910/600x200')] "></div>

          <div className="absolute  inset-y-[9.75rem] flex select-none	">
            <img
              src={user.data?.image as string}
              alt="twitter user"
              className="ml-3 h-20 w-20 rounded-full border-4 border-black"
            />
          </div>
          <div className="h-12" />
          <div className="flex flex-col">
            <span className="ml-4 text-lg font-bold">{user.data?.name}</span>
            <span className="ml-4 text-xs opacity-50">
              {" "}
              {`@` + user.data?.name?.split(" ").join("")}
            </span>
          </div>

          <div className="border-b border-slate-800 px-4">
            <ul className="-mb-px flex flex-wrap text-center text-sm font-medium">
              <li className="mr-2" role="presentation">
                <span className="inline-block rounded-t-lg  p-4">Tweets</span>
              </li>
            </ul>
          </div>
        
          
        </div>
      </main>
        </>
    )
}
