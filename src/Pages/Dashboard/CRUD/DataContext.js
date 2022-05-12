import React, { createContext, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";

export const DataLowonganContext = createContext();
export const DataLowonganProvider = (props) => {
  let history = useHistory();
  const [dataLowongan, setDataLowongan] = useState([]);
  const [currentId, setCurrentId] = useState(-1);
  const [input, setInput] = useState({
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

  const baseURL = "https://dev-example.sanbercloud.com/api/job-vacancy";

  const fetchData = async () => {
    const { data } = await axios.get(baseURL);
    let result = data.data;
    setDataLowongan(
      result.map((data) => {
        return {
          id: data.id,
          title: data.title,
          job_description: data.job_description,
          job_qualification: data.job_qualification,
          job_type: data.job_type,
          job_tenure: data.job_tenure,
          job_status: data.job_status,
          company_name: data.company_name,
          company_image_url: data.company_image_url,
          company_city: data.company_city,
          salary_min: data.salary_min,
          salary_max: data.salary_max,
        };
      })
    );
  };

  const functionDelete = async (idLowonganList) => {
    await axios
      .delete(`${baseURL}/${idLowonganList}`, {
        headers: {
          Authorization: "Bearer " + Cookies.get("token"),
        },
      })
      .then(() => {
        let newDataLowongan = dataLowongan.filter((e) => {
          return e.id !== idLowonganList;
        });
        setDataLowongan(newDataLowongan);
      });
  };

  const functionEdit = (idLowonganList) => {
    history.push(`/dashboard/list-job-vacancy/form/${idLowonganList}`);
  };

  const functionSubmit = () => {
    axios
      .post(
        baseURL,
        {
          title: input.title,
          job_description: input.job_description,
          job_qualification: input.job_qualification,
          job_type: input.job_type,
          job_tenure: input.job_tenure,
          job_status: input.job_status,
          company_name: input.company_name,
          company_image_url: input.company_image_url,
          company_city: input.company_city,
          salary_min: input.salary_min,
          salary_max: input.salary_max,
        },
        {
          headers: {
            Authorization: "Bearer " + Cookies.get("token"),
          },
        }
      )
      .then((res) => {
        console.log(res)
        history.push("/dashboard/list-job-vacancy");
        setDataLowongan([
          ...dataLowongan,
          {
            title: res.data.title,
            job_description: res.data.job_description,
            job_qualification: res.data.job_qualification,
            job_type: res.data.job_type,
            job_tenure: res.data.job_tenure,
            job_status: res.data.job_status,
            company_name: res.data.company_name,
            company_image_url: res.data.company_image_url,
            company_city: res.data.company_city,
            salary_min: res.data.salary_min,
            salary_max: res.data.salary_max,
          },
        ]);
      });
  };

  const functionUpdate = () => {
    axios
      .put(
        `${baseURL}/${currentId}`,
        {
          title: input.title,
          job_description: input.job_description,
          job_qualification: input.job_qualification,
          job_type: input.job_type,
          job_tenure: input.job_tenure,
          job_status: input.job_status,
          company_name: input.company_name,
          company_image_url: input.company_image_url,
          company_city: input.company_city,
          salary_min: input.salary_min,
          salary_max: input.salary_max,
        },
        {
          headers: {
            Authorization: "Bearer " + Cookies.get("token"),
          },
        }
      )
      .then((res) => {
          console.log(res)
        history.push("/dashboard/list-job-vacancy/");
        let updateDataLowonganList = dataLowongan.find(
          (e) => e.id === currentId
        );
        updateDataLowonganList.title = input.title;
        updateDataLowonganList.job_description = input.job_description;
        updateDataLowonganList.job_qualification = input.job_qualification;
        updateDataLowonganList.job_type = input.job_type;
        updateDataLowonganList.job_tenure = input.job_tenure;
        updateDataLowonganList.job_status = input.job_status;
        updateDataLowonganList.company_name = input.company_name;
        updateDataLowonganList.company_image_url = input.company_image_url;
        updateDataLowonganList.company_city = input.company_city;
        updateDataLowonganList.salary_min = input.salary_min;
        updateDataLowonganList.salary_max = input.salary_max;
        setDataLowongan([...dataLowongan]);
      });
  };

  const functions = {
    fetchData,
    functionDelete,
    functionSubmit,
    functionUpdate,
    functionEdit,
  };

  return (
    <DataLowonganContext.Provider
      value={{
        dataLowongan,
        setDataLowongan,
        input,
        setInput,
        currentId,
        setCurrentId,
        functions,
      }}
    >
      {props.children}
    </DataLowonganContext.Provider>
  );
};
