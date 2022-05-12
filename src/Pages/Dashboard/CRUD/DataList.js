import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { DataLowonganContext } from "./DataContext";

function LowonganList() {
  const { dataLowongan, setDataLowongan, functions } = useContext(DataLowonganContext);
  const { fetchData, functionDelete, functionEdit } = functions;
  
  
  const [fetchStatus, setFetchStatus] = useState(true)
  

  useEffect(() => {
    if (fetchStatus) {
      fetchData();
      setFetchStatus(false)
    }
  }, [fetchStatus, setFetchStatus]);

  const handleDelete = (event) => {
    let idLowonganList = parseInt(event.target.value);
    functionDelete(idLowonganList);
  };

  const handleEdit = (event) => {
    let idLowonganList = event.target.value;
    functionEdit(idLowonganList);
  };

  
  const handleText = (text) => {
    if (text === undefined) {
      return "";
    } else {
      return text.slice(0, 10) + "...";
    }
  };

  
  const [search, setSearch] = useState("")
  const [filter, setFilter] = useState({
    company_name: "",
    company_city: "",
    job_type: ""
  })

  const handleChangeSearch = (e) => {
    setSearch(e.target.value)
  }

  const handleFilterSearch = (e) => {
    let {name, value} = e.target
    setFilter({...filter, [name] : value})
  }

  const handleSearch = (e) => {
    e.preventDefault();
  
    axios.get(`https://dev-example.sanbercloud.com/api/job-vacancy`)
    .then(({data})=> {
      let fetchResult = data.data
      
      let result = fetchResult.filter((res) => {
        return Object.values(res).join(' ').toLowerCase().includes(search.toLowerCase())
      })
      // console.log(result)

      setDataLowongan([...result])
      setSearch("")
    })
  };

  const handleFilter = (e) => {
    e.preventDefault();
    axios.get(`https://dev-example.sanbercloud.com/api/job-vacancy`)
    .then(({data})=> {
      let fetchResult = data.data
      
      let result = fetchResult.filter((res) => {
        // console.log(res)
        return res.company_city.toLowerCase() === filter.company_city.toLowerCase() || res.company_name.toLowerCase() === filter.company_name.toLowerCase() || res.job_type.toLowerCase() === filter.job_type.toLowerCase() 
      })

      setDataLowongan([...result])
      setSearch("")
    })
  };

  

  return (
    <div>
      <div className="container">
        
        <form
          onSubmit={handleFilter}
          className="flex flex-col md:flex-row w-3/4 md:w-full md:space-x-4 space-y-3 md:space-y-0 pt-10 pl-1 pb-5"
        >
            <input
              onChange={handleFilterSearch}
              name="company_name"
              value={filter.company_name}
              type="text"
              className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              placeholder="Search By Company Name..."
            />
          

         
            <input
              onChange={handleFilterSearch}
              name="job_type"
              value={filter.job_type}
              type="text"
              className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              placeholder="Search By Job Type..."
            />
         

            <input
              onChange={handleFilterSearch}
              name="company_city"
              value={filter.company_city}
              type="text"
              className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              placeholder="Search By City Name..."
            />
       

          <input
            name="search"
            className="flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-purple-600 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200"
            type="submit"
            value={"Filter"}
          />
        </form>

        <form
          onSubmit={handleSearch}
          className="flex flex-col md:flex-row w-3/4 md:w-full max-w-sm md:space-x-4 space-y-3 md:space-y-0 pb-5 pl-1"
        >
          <div className="relative">
            <input
              onChange={handleChangeSearch}
              name="search"
              type="text"
              className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              placeholder="Search..."
            />
          </div>
          <input
            name="search"
            className="flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-purple-600 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200"
            type="submit"
            value={"Search"}
          />
        </form>

          <button
          onClick={() => {
            setFetchStatus(true)
          }}
            name="search"
            className="flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-blue-600 rounded-lg shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200 ml-1 mb-3"
            type="submit"
            value={"Search"} >
            Reset Filter
          </button>



        <table className="table p-4 bg-white shadow rounded-lg">
          <thead>
            <tr>
              <th className="border-b-2 p-4 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900">
                Title
              </th>
              <th className="border-b-2 p-4 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900">
                Company
              </th>
              <th className="border-b-2 p-4 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900">
                City
              </th>
              <th className="border-b-2 p-4 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900">
                Description
              </th>
              <th className="border-b-2 p-4 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900">
                Qualification
              </th>
              <th className="border-b-2 p-4 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900">
                Tenure
              </th>
              <th className="border-b-2 p-4 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900 ">
                Type
              </th>
              <th className="border-b-2 p-4 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900">
                Status
              </th>
              <th className="border-b-2 p-4 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900">
                Salary
              </th>
              <th className="border-b-2 p-4 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {dataLowongan.map((e, index) => {
              return (
                <tr key={e.id}>
                  <td className="border-b-2 p-4 dark:border-dark-5">
                    {e.title}
                  </td>
                  <td className="border-b-2 p-4 dark:border-dark-5">
                    {e.company_name}
                  </td>
                  <td className="border-b-2 p-4 dark:border-dark-5">
                    {e.company_city}
                  </td>
                  <td className="border-b-2 p-4 dark:border-dark-5">
                    {handleText(e.job_description)}
                  </td>
                  <td className="border-b-2 p-4 dark:border-dark-5">
                    {handleText(e.job_qualification)}
                  </td>
                  <td className="border-b-2 p-4 dark:border-dark-5">
                    {e.job_tenure}
                  </td>
                  <td className="border-b-2 p-4 dark:border-dark-5">
                    {e.job_type}
                  </td>
                  <td className="border-b-2 p-4 dark:border-dark-5">
                    {e.job_status}
                  </td>
                  <td className="border-b-2 p-4 dark:border-dark-5">
                    Rp. {e.salary_min} - Rp. {e.salary_max}
                  </td>
                  <td className="border-b-2 p-4 dark:border-dark-5 flex">
                    <button
                      className="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg"
                      onClick={handleEdit}
                      value={e.id}
                    >
                      Edit
                    </button>
                    &nbsp;
                    <button
                      onClick={handleDelete}
                      className="py-2 px-4  bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
                      value={e.id}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default LowonganList;
