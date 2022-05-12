import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../img/logo.png";

function Sidebar() {
  return (
    <>
      <div className="h-screen hidden lg:block my-4 ml-4 shadow-lg relative w-80">
        <div className="bg-white h-full rounded-2xl dark:bg-gray-700">
          <div className="flex items-center justify-center pt-6">
            <img src={Logo} />
          </div>
          <nav className="mt-6">
            <div>
              <Link
                className="w-full font-thin uppercase text-gray-500 dark:text-gray-200 flex items-center p-4 my-2 transition-colors duration-200 justify-start hover:text-blue-500"
                to="/"
              >
                <span className="text-left">
                  <svg
                    width="20"
                    height="20"
                    fill="currentColor"
                    viewBox="0 0 2048 1792"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1070 1178l306-564h-654l-306 564h654zm722-282q0 182-71 348t-191 286-286 191-348 71-348-71-286-191-191-286-71-348 71-348 191-286 286-191 348-71 348 71 286 191 191 286 71 348z"></path>
                  </svg>
                </span>
                <span className="mx-4 text-sm font-normal">Beranda</span>
              </Link>

              <Link
                className="w-full font-thin uppercase text-gray-500 dark:text-gray-200 flex items-center p-4 my-2 transition-colors duration-200 justify-start hover:text-blue-500"
                to="/dashboard"
              >
                <span className="text-left">
                  <svg
                    width="20"
                    height="20"
                    fill="currentColor"
                    viewBox="0 0 2048 1792"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1472 992v480q0 26-19 45t-45 19h-384v-384h-256v384h-384q-26 0-45-19t-19-45v-480q0-1 .5-3t.5-3l575-474 575 474q1 2 1 6zm223-69l-62 74q-8 9-21 11h-3q-13 0-21-7l-692-577-692 577q-12 8-24 7-13-2-21-11l-62-74q-8-10-7-23.5t11-21.5l719-599q32-26 76-26t76 26l244 204v-195q0-14 9-23t23-9h192q14 0 23 9t9 23v408l219 182q10 8 11 21.5t-7 23.5z"></path>
                  </svg>
                </span>
                <span className="mx-4 text-sm font-normal">Dashboard</span>
              </Link>

              <Link
                className="w-full font-thin uppercase text-gray-500 dark:text-gray-200 flex items-center p-4 my-2 transition-colors duration-200 justify-start hover:text-blue-500"
                to="/dashboard/list-job-vacancy"
              >
                <span className="text-left">
                  <svg
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="m-auto"
                    viewBox="0 0 2048 1792"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1728 608v704q0 92-66 158t-158 66h-1216q-92 0-158-66t-66-158v-960q0-92 66-158t158-66h320q92 0 158 66t66 158v32h672q92 0 158 66t66 158z"></path>
                  </svg>
                </span>
                <span className="mx-4 text-sm font-normal">List Data</span>
              </Link>

              <Link
                className="w-full font-thin uppercase text-gray-500 dark:text-gray-200 flex items-center p-4 my-2 transition-colors duration-200 justify-start hover:text-blue-500"
                to="/dashboard/list-job-vacancy/form"
              >
                <span className="text-left">
                  <svg
                    class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </span>
                <span className="mx-4 text-sm font-normal">Form Data</span>
              </Link>

              <Link
                className="w-full font-thin uppercase text-gray-500 dark:text-gray-200 flex items-center p-4 my-2 transition-colors duration-200 justify-start hover:text-blue-500"
                to="/dashboard/profile"
              >
                <span className="text-left">
                  <svg
                    class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </span>
                <span className="mx-4 text-sm font-normal">Profile</span>
              </Link>

              <Link
                className="w-full font-thin uppercase text-gray-500 dark:text-gray-200 flex items-center p-4 my-2 transition-colors duration-200 justify-start hover:text-blue-500"
                to="/dashboard/change-password"
              >
                <span className="text-left">
                  <svg
                    className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </span>
                <span className="mx-4 text-sm font-normal">
                  Change Password
                </span>
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
