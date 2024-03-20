import React, { useState } from "react";
import "./Station.css";
import Swal from "sweetalert2";
import { stationregistrationApi } from "../../services/allAPI";
import { Link } from "react-router-dom";

function Station() {
  const [station, setStation] = useState({
    name: "",
    station_code: "",
    Location: "",
    phone_number: "",
    username: "",
    password: "",
  });

  const handleClose1 = () => {
    setStation({
      name: "",
      station_code: "",
      Location: "",
      phone_number: "",
      username: "",
      password: "",
    });
  };

  const handleAdd = async (e) => {
    e.preventDefault();

    const { name, station_code, Location, phone_number, username, password } =
      station;

    if (!name || !station_code || !Location || !phone_number || !username || !password) {
      Swal.fire({
        title: "Please fill the form!",
        icon: "warning"
      });
    } else {
      const result = await stationregistrationApi();
      console.log(result);
      if(result.status === 200){
        Swal.fire({
          title: "Registration Successfull!",
          icon: "success"
        });
        setStation({
          name: "",
          station_code: "",
          Location: "",
          phone_number: "",
          username: "",
          password: "",
        });
      }
    }
  };
  console.log(station);
  return (
    <>
      <div
        className="Card shadow center-container"
        style={{ width: "500px", height: "500px" }}
      >
        <form className="mt-5 w-75 justify-content-center align-items-center d-flex flex-column">
          <div className="mb-3 pt-5">
            <input
              type="text"
              placeholder="name"
              className="form-control ms-5"
              value={station.name}
              onChange={(e) => setStation({ ...station, name: e.target.value })}
            />
          </div>
          <div className="mb-3">
            <input
              type="number"
              placeholder="station_code"
              className="form-control ms-5"
              value={station.station_code}
              onChange={(e) =>
                setStation({ ...station, station_code: e.target.value })
              }
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              placeholder="Location"
              className="form-control ms-5"
              value={station.Location}
              onChange={(e) =>
                setStation({ ...station, Location: e.target.value })
              }
            />
          </div>
          <div className="mb-3">
            <input
              type="number"
              placeholder="phone_number"
              className="form-control ms-5"
              value={station.phone_number}
              onChange={(e) =>
                setStation({ ...station, phone_number: e.target.value })
              }
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              placeholder="username"
              className="form-control ms-5"
              value={station.username}
              onChange={(e) =>
                setStation({ ...station, username: e.target.value })
              }
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              placeholder="password"
              className="form-control ms-5"
              value={station.password}
              onChange={(e) =>
                setStation({ ...station, password: e.target.value })
              }
            />
          </div>
          <div className="ms-5 mt-5 d-flex">
            <button className="btn btn-danger ms-5" onClick={handleClose1}>
              Cancel
            </button>
            <button className="btn btn-success w-100 ms-5" onClick={handleAdd}>
              Register
            </button>
          </div>
          <div className="mb-5">
            <p className="ms-5 mt-4">Already a user ? Login here <Link to={'/stationlogin'} style={{textDecoration:'none'}}>Login</Link></p>
          </div>
        </form>
      </div>
    </>
  );
}

export default Station;
