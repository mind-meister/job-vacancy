import axios from "axios";
import Cookies from "js-cookie";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { DataLowonganContext } from "./DataContext";


function LowonganForm() {
  let { slug } = useParams();
  const { input, setInput, currentId, setCurrentId, functions } =
    useContext(DataLowonganContext);
  const { functionSubmit, functionUpdate } = functions;
  const baseURL = "https://dev-example.sanbercloud.com/api/job-vacancy";

  const handleChange = (event) => {
    let { name, value } = event.target;
    setInput({ ...input, [name]: value });
  };

  useEffect(() => {
    if (slug !== undefined) {
      axios
        .get(`${baseURL}/${slug}`, {
          headers: {
            Authorization: "Bearer " + Cookies.get("token"),
          },
        })
        .then((res) => {
          let data = res.data;
          setInput({
            ...input,
            id: data.id,
            title: data.title,
            job_description: data.job_description,
            job_qualification: data.job_qualification,
            release_year: data.release_year,
            job_type: data.job_type,
            job_tenure: data.job_tenure,
            job_status: data.job_status,
            company_name: data.company_name,
            company_image_url: data.company_image_url,
            company_city: data.company_city,
            salary_min: data.salary_min,
            salary_max: data.salary_max,
          });
          setCurrentId(data.id);
        });
    }
    return () => {
      setInput({
        title: "",
        job_description: "",
        job_qualification: "",
        job_type: "",
        job_tenure: "",
        job_status: 0,
        company_name: "",
        company_image_url: "",
        company_city: "",
        salary_min: 0,
        salary_max: 0,
      });
      setCurrentId(-1);
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (currentId === -1) {
      functionSubmit();
    } else {
      functionUpdate();
    }
    setInput({
      title: "",
      job_description: "",
      job_qualification: "",
      job_type: "",
      job_tenure: "",
      job_status: 0,
      company_name: "",
      company_image_url: "",
      company_city: "",
      salary_min: 0,
      salary_max: 0,
    });
    setCurrentId(-1);
  };

  return (
    <div className="container">
      <h1 className="text-center pb-10 text-lg">Form Create Data Lowongan</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-1 text-l font-medium text-gray-900 dark:text-gray-300">
            Title :
          </label>

          <input
            name="title"
            value={input.title}
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Title"
            onChange={handleChange}
            required
          />

          <label className="block mb-1 mt-3 text-l font-medium text-gray-900 dark:text-gray-300">
            Job Description :
          </label>

          <textarea
            name="job_description"
            value={input.job_description}
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Description"
            rows="5"
            cols="40"
            onChange={handleChange}
            required
          ></textarea>

          <label className="block mt-3 mb-1 text-l font-medium text-gray-900 dark:text-gray-300">
            Job Qualification :
          </label>

          <input
            name="job_qualification"
            value={input.job_qualification}
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Job Qualification"
            onChange={handleChange}
            required
          />

          <label className="block mt-3 mb-1 text-l font-medium text-gray-900 dark:text-gray-300">
            Job Type :
          </label>
          <input
            name="job_type"
            value={input.job_type}
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Job Type"
            onChange={handleChange}
            required
          />

          <label className="block mt-3 mb-1 text-l font-medium text-gray-900 dark:text-gray-300">
            Job Tenure:
          </label>
          <input
            name="job_tenure"
            value={input.job_tenure}
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Job Tenure"
            onChange={handleChange}
            required
          />

          <label className="block mt-3 mb-1 text-l font-medium text-gray-900 dark:text-gray-300">
            Job Status:
          </label>
          <input
            name="job_status"
            value={input.job_status}
            type="number"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Job Status"
            onChange={handleChange}
            required
          />

          <label className="block mt-3 mb-1 text-l font-medium text-gray-900 dark:text-gray-300">
            Company Name:
          </label>
          <input
            name="company_name"
            value={input.company_name}
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Company Name"
            onChange={handleChange}
            required
          />

          <label className="block mt-3 mb-1 text-l font-medium text-gray-900 dark:text-gray-300">
            Company Image:
          </label>
          <input
            name="company_image_url"
            value={input.company_image_url}
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Company Image"
            onChange={handleChange}
            required
          />

          <label className="block mt-3 mb-1 text-l font-medium text-gray-900 dark:text-gray-300">
            Company City:
          </label>
          <input
            name="company_city"
            value={input.company_city}
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Company City"
            onChange={handleChange}
            required
          />

          <label className="block mt-3 mb-1 text-l font-medium text-gray-900 dark:text-gray-300">
            Salary Min:
          </label>
          <input
            name="salary_min"
            value={input.salary_min}
            type="number"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Salary Min"
            onChange={handleChange}
            required
          />

          <label className="block mt-3 mb-1 text-l font-medium text-gray-900 dark:text-gray-300">
            Salary Max:
          </label>
          <input
            name="salary_max"
            value={input.salary_max}
            type="number"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Salary Max"
            onChange={handleChange}
            required
          />

          <input
            className="create py-4 px-6  bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-full mt-10"
            type="submit"
            value="Submit"
          /> 
        </div>
      </form>
    </div>
  );
}

export default LowonganForm;
