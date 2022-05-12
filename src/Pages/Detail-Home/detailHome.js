import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./DataHome.css";

function DetailHome() {
  const [users, setUsers] = useState([]);
  let { slug } = useParams();

  useEffect(() => {
    const dataID = async () => {
      if (slug !== undefined) {
       await axios
          .get(`https://dev-example.sanbercloud.com/api/job-vacancy/${slug}`)
          .then((res) => {
            let result = res.data;
            // console.log(result)
            setUsers([...result]);
          });
      }
    }
    dataID()
  }, []);

  return (
    <div className="detail-home">
      <h1>{users.title}</h1>
      <p>user</p>
    </div>
  );
}

export default DetailHome;
