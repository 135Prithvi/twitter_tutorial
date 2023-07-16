import Link from "next/link";

export default async function Home() {
  return (
    <div className="bg-gray-100">
      {/* Navigation */}
      <nav className="bg-white shadow">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <img src={"/homepageicon.png"} alt="" className="w-10 h-10" />
              <span className="text-gray-700 font-semibold text-xl">
                Twi Twi Ter
              </span>
            </div>
            <div className="flex items-center">
              <Link
                href="/ap"
                className="hover:underline text-gray-600 hover:text-gray-500 font-bold"
              >
                The app
              </Link>{" "}
              or{" "}
              <Link
                className="hover:underline text-blue-600 hover:text-blue-500 font-bold"
                href={"/sign-up"}
              >
                Signup
              </Link>{" "}
              or{" "}
              <Link
                className="hover:underline text-blue-600 hover:text-blue-500 font-bold"
                href={"/sign-in"}
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero section */}
      <section className="bg-blue-500 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Welcome to Twi Twi Ter!</h1>
            <p className="text-lg">Showcasing the demo of what I teach</p>
          </div>
        </div>
      </section>

      {/* Content section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-3 gap-8">
            <div className="col-span-3 md:col-span-1">
              <div className="bg-white shadow rounded-lg p-8">
                <h2 className="text-2xl font-bold mb-4 text-black">
                  Lesson 1: Introduction
                </h2>
                <img
                  src="https://cdn.sanity.io/files/uu0pc99l/production/f7bac1197dc59078fd6eae4360c09b11662b5b09.webp"
                  alt=""
                />
                <p className="text-gray-700">
                  In this introductory lesson, we will cover the basics of Twi
                  Twi Ter and its key features. You will learn about the
                  concepts and principles that form the foundation of our
                  teaching methodology.
                </p>
              </div>
            </div>
            <div className="col-span-3 md:col-span-1">
              <div className="bg-white shadow rounded-lg p-8">
                <h2 className="text-2xl font-bold mb-4 text-black">
                  Lesson 2: Hands-on Practice
                </h2>
                <img
                  src="https://cdn.sanity.io/files/uu0pc99l/production/b8bcdef83905293c9742e4162560c84765f7c836.webp"
                  alt=""
                />
                <p className="text-gray-700">
                  In this hands-on lesson, you will have the opportunity to put
                  your knowledge into action. We will guide you through
                  practical exercises and provide real-world examples to enhance
                  your learning experience.
                </p>
              </div>
            </div>
            <div className="col-span-3 md:col-span-1">
              <div className="bg-white shadow rounded-lg p-8">
                <h2 className="text-2xl font-bold mb-4 text-black">
                  Lesson 3: Advanced Techniques
                </h2>
                <img
                  src="https://cdn.sanity.io/files/uu0pc99l/production/a961536aa69bca2b00dadb839419e66145b314d8.webp"
                  alt=""
                />
                <p className="text-gray-700">
                  Take your skills to the next level with our advanced
                  techniques lesson. Discover the tips, tricks, and best
                  practices that will allow you to maximize the potential of Twi
                  Twi Ter and excel in your projects.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Login and Signup */}
      <section className="bg-gray-200 py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-center flex-col gap-y-3">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold px-6 py-3 mr-4 rounded-full w-full">
              <Link className="hover:underline font-bold" href={"/sign-in"}>
                Login
              </Link>
            </button>
            <button className="bg-green-500 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-full w-full">
              <Link
                className="hover:underline font-bold h-full w-full grow"
                href={"/sign-up"}
              >
                Signup
              </Link>
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto px-4">
          <div className="flex justify-between">
            <span>&copy; 2023 Twi Twi Ter. All rights reserved.</span>
            <Link
              target="_blank"
              href="https://www.youtube.com/@techs7296"
              className="hover:underline text-red-600 hover:text-rose-500 "
            >
              Visit my youtube channel
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
