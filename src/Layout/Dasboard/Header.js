import React from "react";
import Cookies from 'js-cookie'

function Header() {
  let user = JSON.parse(Cookies.get('user'))
  // console.log(user)
  let image_url = user.image_url
  return (
    <>
      <header className="w-full shadow-lg bg-white dark:bg-gray-700 items-center h-16 rounded-2xl z-40">
        <div className="relative z-20 flex flex-col justify-center h-full px-3 mx-auto flex-center">
          <div className="relative items-center pl-1 flex w-full lg:max-w-68 sm:pr-2 sm:ml-0">
            <div className="container relative left-0 z-50 flex w-3/4 h-auto h-full">
              <div className="relative p-1 flex items-center w-full space-x-4 justify-end">

                <a href="#" className="block relative">
                  <img
                    alt="profil"
                    src={image_url}
                    className="mx-auto object-cover rounded-full h-10 w-10"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
