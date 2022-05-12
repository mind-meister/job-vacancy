import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { DataLowonganContext } from './CRUD/DataContext';

function FormData() {
  const { dataLowongan, setDataLowongan, functions } = useContext(DataLowonganContext);
  const { fetchData, functionDelete, functionEdit } = functions;

  useEffect(() => {
      fetchData();
  }, []);

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

  return (
    <div>
        <div className="container">

        <Link to="/dashboard/list-job-vacancy/form/create">
        <button className="create py-4 px-6  bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-full mt-5 mb-5">Create Data</button>
      </Link>
        

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
  )
}

export default FormData