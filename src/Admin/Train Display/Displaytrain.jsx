import React, { useContext, useEffect, useState } from "react";
import AdminHeader from "../../common/Headers/AdminHeader";
import "./displaytrain.css";
import { displayseatsApi, displaytrainsApi } from "../../services/allAPI";
import EdittrainDetails from "./EdittrainDetails";
import { addseatContext, edittrainContext } from "../../context/ContextShare";
import AddSeats from "../Train & Seat add/AddSeats";

function Displaytrain() {
const [seatUpdate,setSeatUpdate]=useState("")
  const token = sessionStorage.getItem("token");
  const reqHeader = {
    "Content-Type": "application/json",
    Authorization: `Token ${token}`,
  };

  const {addseat,setSeatadd} = useContext(addseatContext)

  const { edittrain, setedittrain } = useContext(edittrainContext);

  const [trainlist, settrainlist] = useState([]);

  const [seatlist,setseatlist] = useState([])

  const [search, setSearch] = useState("");
  console.log(search);

  const gettrains = async () => {
    try {
      const result = await displaytrainsApi(reqHeader);
      console.log(result);
      settrainlist(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  const formatDate = (datetimeString) => {
    const dateObj = new Date(datetimeString);
    const options = { weekday: "short", day: "2-digit", month: "short" };
    return dateObj.toLocaleDateString("en-US", options);
  };

  const getseats = async()=>{
    try {
      const result = await displayseatsApi(reqHeader);
      console.log(result);
      setseatlist(result.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    gettrains();
    getseats()
  }, [edittrain, seatUpdate]);

  useEffect(()=>{

  },[addseat])

  return (
    <>
      <div className="d-flex">
        <AdminHeader />
        <div className="p-2">
          <h1 className="text-center text-warning">Train Details</h1>

          <div className="d-flex">
            <input
              type="text"
              placeholder="Train name"
              className="form-control mb-3 w-75 ms-5"
              onChange={(e) => setSearch(e.target.value)}
            />
            <i class="fa-solid fa-magnifying-glass fa-2x ms-3"></i>
          </div>
          <div className="rounded">
            <table className="table2 table-bordered text-center rounded">
              <thead>
                <tr>
                  <th>Train no</th>
                  <th>Name</th>
                  <th>Source</th>
                  <th>Destination</th>
                  <th>Departure time</th>
                  <th>Arrival time</th>
                  <th>Amount Ac</th>
                  <th>Amount nonac</th>
                  <th>Amount sleeper</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {trainlist?.length > 0 ? (
                  trainlist
                    .filter((item) => {
                      return search.toLowerCase() === ""
                        ? item
                        : item.train_name.toLowerCase().includes(search);
                    })
                    .map((item) => (
                      <tr key={item.id} className="p-5">
                        <td>{item.train_number}</td>
                        <td>{item.train_name}</td>
                        <td>{item.source}</td>
                        <td>{item.destination}</td>
                        <td>
                          {item.departure_time.split("T")[1].slice(0, -1)} |{" "}
                          {formatDate(item.departure_time)}
                        </td>
                        <td>
                          {item.arrival_time.split("T")[1].slice(0, -1)} |{" "}
                          {formatDate(item.arrival_time)}{" "}
                        </td>
                        <td>{item.amount_nonac}</td>
                        <td>{item.amount_ac}</td>
                        <td>{item.amount_sleeper}</td>
                        <td>
                          <EdittrainDetails train={item} setSeatUpdate={setSeatUpdate} />{" "}
                          <AddSeats train = {item.id}/>
                        </td>
                      </tr>
                    ))
                ) : (
                  <p>nothing to display</p>
                )}
              </tbody>
            </table>

            <div className="mt-5">
              <table className="table-bordered text-center rounded">
                <thead>
                  <tr>
                    <th>Train number</th>
                    <th>Seat type</th>
                    <th>Seat limit</th>
                  </tr>
                </thead>
                <tbody>
                 { seatlist?.length>0 ?
                  seatlist.map((item)=>(<tr>
                    <td>{item.train}</td>
                    <td>{item.type}</td>
                    <td>{item.available_seats}</td>
                  </tr>))
                  : <p>No Seats</p>}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Displaytrain;
