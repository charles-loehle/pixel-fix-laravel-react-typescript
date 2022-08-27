import React from "react";
import { Link, Head } from "@inertiajs/inertia-react";

export default function Welcome(props) {
  return (
    <>
      <Head title="Welcome" />
      <div className="relative flex items-top justify-center min-h-screen bg-gray-100 dark:bg-gray-900 sm:items-center sm:pt-0">
        <div className="fixed top-0 right-0 px-6 py-4 sm:block">
          {props.auth.user ? (
            <Link
              href={route("dashboard")}
              className="text-sm text-gray-700 dark:text-gray-500 underline"
            >
              Dashboard
            </Link>
          ) : (
            <>
              <Link
                href={route("login")}
                className="text-sm text-gray-700 dark:text-gray-500 underline"
              >
                Log in
              </Link>

              <Link
                href={route("register")}
                className="ml-4 text-sm text-gray-700 dark:text-gray-500 underline"
              >
                Register
              </Link>
            </>
          )}
        </div>

        <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
          <div className="flex justify-center pt-8 sm:justify-start sm:pt-0">
            <h1 className="text-5xl text-white">TEST</h1>
          </div>

          <div className="mt-8 bg-white dark:bg-gray-800 overflow-hidden shadow sm:rounded-lg">
            <div className="">
              <div className="p-6">
                <div className="flex items-center">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    className="w-8 h-8 text-gray-500"
                  >
                    <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                  </svg>

                  <div className="ml-4 text-lg leading-7 font-semibold">
                    <a
                      href="https://laravel.com/docs"
                      className="underline text-gray-900 dark:text-white"
                    >
                      Poop
                    </a>
                  </div>
                </div>

                <div className="ml-12">
                  <div className="mt-2 text-gray-600 dark:text-gray-400 text-sm">
                    This is a poop test
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-4 sm:items-center sm:justify-between">
            <div className="text-center text-sm text-gray-500 sm:text-left">
              <div className="flex items-center">
                <svg
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="-mt-px w-5 h-5 text-gray-400"
                >
                  <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>

                <a
                  href="https://laravel.bigcartel.com"
                  className="ml-1 underline"
                >
                  Shop
                </a>

                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  className="ml-4 -mt-px w-5 h-5 text-gray-400"
                >
                  <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                </svg>

                <a
                  href="https://github.com/sponsors/taylorotwell"
                  className="ml-1 underline"
                >
                  Sponsor
                </a>
              </div>
            </div>

            <div className="ml-4 text-center text-sm text-gray-500 sm:text-right sm:ml-0">
              Laravel v{props.laravelVersion} (PHP v{props.phpVersion})
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
