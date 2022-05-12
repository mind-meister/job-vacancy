import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function JobVacancy() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    let fecthData = async () => {
        let { data } = await axios.get(
          "https://dev-example.sanbercloud.com/api/job-vacancy"
        );
        let result = data.data;
        setUsers([...result]);
      }
      

    fecthData();
  }, []);


  return (
    <div>
          <div className="content-text">
          {users !== null && (
            <>
              {users.map((res) => {
                return (
                  <>
                    <Link to={`/job-vacancy/${res.id}`}>
                      <div className="mb-5 p-4 mt-10 bg-white shadow-xl max-w-xl rounded-xl flex justify-start dark:bg-gray-800 md:flex-row flex-col gap-4">
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
  )
}

export default JobVacancy