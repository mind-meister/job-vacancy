import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Hero from "../../Component/HeroHome";
import "../Home/Home.css";

function Home() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let fecthData = async () => {
      try{
        setLoading(true)
        let { data } = await axios.get(
          "https://dev-example.sanbercloud.com/api/job-vacancy"
        );
        setLoading(false)
        let result = data.data;
        setUsers([...result]);
      }catch{
        setTimeout(() => {
          alert("404")
        }, 5000)
      }
      
    };

    fecthData();
  }, []);

  console.log(users);

  return (
    <div className="container">
      <Hero />

      <div className="container-content">
        <h1>Lowongan Yang Tersedia: </h1>

        {loading && <>
          <div class="w-60 h-24 border-2">
          <div class="flex animate-pulse flex-row items-center h-full justify-center space-x-5">
            <div class="w-12 bg-gray-300 h-12 rounded-full "></div>
            <div class="flex flex-col space-y-3">
              <div class="w-36 bg-gray-300 h-6 rounded-md "></div>
              <div class="w-24 bg-gray-300 h-6 rounded-md "></div>
            </div>
          </div>
        </div>

        <div class="w-60 h-24 border-2">
          <div class="flex animate-pulse flex-row items-center h-full justify-center space-x-5">
            <div class="w-12 bg-gray-300 h-12 rounded-full "></div>
            <div class="flex flex-col space-y-3">
              <div class="w-36 bg-gray-300 h-6 rounded-md "></div>
              <div class="w-24 bg-gray-300 h-6 rounded-md "></div>
            </div>
          </div>
        </div>
        </> }

        <div className="content-text">
          {users !== null && (
            <>
              {users
              .filter((res, index) => {
                return index < 4
              })
              .map((res) => {
                return (
                  <>
                    <Link to={`/job-vacancy/${res.id}`}>
                      <div className="mb-5 p-4 bg-white shadow-xl max-w-xl rounded-xl flex justify-start dark:bg-gray-800 md:flex-row flex-col gap-4">
                        <div className="relative">
                          <img
                            src={res.company_image_url}
                            className="w-full md:w-auto md:max-h-40"
                          />
                        </div>

                        <div className="flex flex-col justify-between">
                          <div className="flex items-start justify-between text-gray-700 dark:text-white my-2 md:m-0">
                            <p className="text-xl leading-5">{res.title}</p>
                          </div>

                          <div className="flex items-start justify-between text-gray-700 dark:text-white my-2 md:m-0">
                            <p className="text-l leading-5">
                              {res.company_name}
                            </p>
                          </div>

                          <div className="flex items-start justify-between text-gray-700 dark:text-white my-2 md:m-0">
                            <p className="text-l ">{res.company_city}</p>
                          </div>

                          <div className="flex items-start my-2 md:m-0">
                            <h1>
                              Minimal Gaji: {res.salary_min} - {res.salary_max}
                            </h1>
                          </div>

                          <div className="flex items-start my-2 md:m-0">
                            {res.job_status === 1
                              ? "Lowongan Di Buka"
                              : "Lowongan Di Tutup"}
                          </div>
                        </div>
                      </div>
                    </Link>
                  </>
                );
              })}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
