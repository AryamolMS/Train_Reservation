import React, { useEffect, useState } from "react";
import UserHeader from "../../common/Headers/UserHeader";
import { Link } from "react-router-dom";
import { listtrainApi } from "../../services/allAPI";

function Search({login}) {
  const loginForm = login?true:false

  const [trainlist,settrainlist] = useState([])

  const gettrainlist = async () => {
    try {
      let result;
      if (sessionStorage.getItem("token")) {
        const token = sessionStorage.getItem("token");
        const reqHeader = {
          Authorization: `Token ${token}`,
        };
        result = await listtrainApi(reqHeader);
      } else {
        // If the user is not logged in, fetch train list without authorization
        result = await listtrainApi();
      }
      console.log(result);
      settrainlist(result.data);
    } catch (error) {
      console.error("Error fetching train list:", error);
      // Handle error here
    }
  };
  
useEffect(()=>{
  gettrainlist()
},[])

const formatDate = (datetimeString) => {
  const dateObj = new Date(datetimeString);
  const options = { weekday: 'short', day: '2-digit', month: 'short' };
  return dateObj.toLocaleDateString('en-US', options);
};

  return (
    <>
     {loginForm? <UserHeader /> :null}
      <div
        className="d-flex align-items-center justify-content-center mb-3 mt-3"
        style={{ height: "50px" }}
      >
        {trainlist?.length > 0 ? (
  <select name="" id="" className="w-25 me-2">
    <option value="">select</option>
    {trainlist.map((item, index) => (
      <option key={index} value={item.source}>
        {item.source}
      </option>
    ))}
  </select>
) : (
  <p>No place</p>
)}

{trainlist?.length > 0 ? (
  <select name="" id="" className="w-25 me-2">
    <option value="">select</option>
    {trainlist.map((item, index) => (
      <option key={index} value={item.destination}>
        {item.destination}
      </option>
    ))}
  </select>
) : (
  <p>No place</p>
)}

        <input type="date" name="" id="" className="me-4" />
        <Link to={"/search"}>
          <button className="btn btn-danger w-100">Search</button>
        </Link>
      </div>

      {trainlist?.length > 0 ? (
  trainlist.map((item) => (
    <div className="container-fluid pt-2" key={item.train_id}>
      <div className="row ms-5">
        <div className="col-6 mt-2">
          <div className="card m">
            <div className="card-header bg-secondary text-white">
              {item.train_name}
            </div>
            <div className="card-body">
              <div className="row pb-2">
                <div className="col-5">
                  {item.departure_time.split('T')[1].slice(0, -1)} | {item.source} | {formatDate(item.departure_time)}
                </div>

                <div className="col-5 text-end">
                  {item.arrival_time.split('T')[1].slice(0, -1)} | {item.destination} | {formatDate(item.arrival_time)}
                </div>
              </div>
              <Link
                style={{ textDecoration: "none", color: "white" }}
                to={"/check"}
              >
                <button
                  className="btn btn-secondary btn-sm"
                  data-bs-toggle="modal"
                  data-bs-target="#myModal"
                >
                  Check Availability
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  ))
) : (
  <h1>No Trains Available Now</h1>
)}

    </>
  );
}

export default Search;
