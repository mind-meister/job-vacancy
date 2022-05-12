import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

function DashboardLayout(props) {
  return (
    <>
      <main className="bg-gray-100 dark:bg-gray-800 h-screen overflow-hidden relative">
        <div className="flex items-start justify-between">

            <Sidebar />
         
          <div className="flex flex-col w-full pl-0 md:p-4 md:space-y-4">
            <Header />
            

            <div className="overflow-auto h-screen pb-24 pt-2 pr-2 pl-2 md:pt-0 md:pr-0 md:pl-0">
              <div className="flex flex-col flex-wrap sm:flex-row ">
                {props.children}

              </div>
            </div>

          </div>
        </div>
      </main>
    </>
  );
}

export default DashboardLayout;
