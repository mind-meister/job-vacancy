import axios from 'axios';
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import Cookies from 'js-cookie';

function DashboardChangePassword() {
    let history = useHistory();
  const [input, setInput] = useState({
    password: "",
    passwordNew : "",
    confrimPasswordNew : "",
  });
  
  const handleChange = (e) => {
    let value = e.target.value;
    let name = e.target.name;

    setInput({ ...input, [name]: value });
  };


  const handleChangePassword = (e) => {
    e.preventDefault();
    let {password, passwordNew,confrimPasswordNew  } = input;

    axios
      .post(`https://dev-example.sanbercloud.com/api/change-password`, 
      { password,passwordNew,confrimPasswordNew},
      {
        headers: {
          Authorization: "Bearer " + Cookies.get("token"),
        },
      }
      )

      .then((res) => {
        console.log(res);
        let { token } = res.data;
        Cookies.set("token", token);
        // console.log(token)
        history.push("/dashboard");
      })
      .catch((err) => {
        console.log(err);
      });
  };




  return (
    <div className="flex flex-col w-full max-w-md px-4 py-8 bg-white rounded-lg shadow dark:bg-gray-800 sm:px-6 md:px-8 lg:px-10">
      <div className="self-center mb-6 text-xl font-light text-gray-600 sm:text-2xl dark:text-white">
        Change Password Your Account
      </div>

      <div className="mt-8">

        <form onSubmit={handleChangePassword}>

        <div className="flex flex-col mb-4">
            <div className="flex relative ">
              <input
                onChange={handleChange}
                name="password"
                type="password"
                value={input.password}
                className=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                placeholder="Current Password"
              />
            </div>
          </div>

          <div className="flex flex-col mb-4">
            <div className="flex relative ">
              <input
                onChange={handleChange}
                name="passwordNew"
                type="password"
                value={input.passwordNew}
                className=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                placeholder="New Password"
              />
            </div>
          </div>

          <div className="flex flex-col mb-6">
            <div className="flex relative ">
              <input
                onChange={handleChange}
                name="confrimPasswordNew"
                type="password"
                value={input.confrimPasswordNew}
                className=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                placeholder="Confrim New Password"
              />
            </div>
          </div>


          <div className="flex w-full">
            <button
              type="submit"
              className="py-2 px-4  bg-purple-600 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
            >
             Change Password
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default DashboardChangePassword