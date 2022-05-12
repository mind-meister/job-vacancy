import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../img/logo.png";
import Cookies from "js-cookie";
import { useHistory } from "react-router-dom";

function Navbar() {
  let history = useHistory()
  
  return (
    <div className="bg-slate-300">
      <nav className="shadow py-4 ">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex items-center justify-between h-16">
            <div className=" flex items-center">
              <img className="h-8 w-100" src={Logo} />
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <Link
                    className="text-gray-900 hover:text-gray-400 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium active"
                    to="/"
                  >
                    Beranda
                  </Link>
                  <Link
                    className="text-gray-900  hover:text-gray-400 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    to="/job-vacancy"
                  >
                    Lowongan Pekerjaan
                  </Link>
                </div>
              </div>
            </div>

            <div className="flex">
              <div className="pr-5">
                {!Cookies.get("token") && (
                  <>
                    <Link
                      className="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white  transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                      to="/login"
                    >
                      Login
                    </Link>
                  </>
                )}

                {Cookies.get("token") && (
                  <>
                    <Link
                      className="py-2 px-4 mr-4 bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white  transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                      to="/dashboard"
                    >
                      Dashboard
                    </Link>

                    <button
                      onClick={() => {
                        Cookies.remove("token");
                        Cookies.remove("user");
                        history.push("/login")
                        
                      }}
                      className="py-2 px-4 mr-4 bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white  transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                    >
                      Log out
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
