import React, { useEffect, useState } from "react";
import UserHeader from "../../common/Headers/UserHeader";
import { Link } from "react-router-dom";
import { listtrainApi } from "../../services/allAPI";

function Search({ login }) {
  const loginForm = login ? true : false;

  const [trainlist, setTrainlist] = useState([]);
  const [selectedSource, setSelectedSource] = useState("");
  const [selectedDestination, setSelectedDestination] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [searchedTrainList, setSearchedTrainList] = useState([]);
  const [error, setError] = useState("");

  const getTrainlist = async () => {
    try {
      let result;
      if (sessionStorage.getItem("token")) {
        const token = sessionStorage.getItem("token");
        const reqHeader = {
          Authorization: `Token ${token}`,
        };
        result = await listtrainApi(reqHeader);
        setTrainlist(result.data);
      }
    } catch (error) {
      console.error("Error fetching train list:", error);
    }
  };

  const handleSourceChange = (event) => {
    setSelectedSource(event.target.value);
  };

  const handleDestinationChange = (event) => {
    setSelectedDestination(event.target.value);
  };

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const searchTrain = () => {
    if (!selectedSource || !selectedDestination || !selectedDate) {
      alert("Please select source, destination, and date.");
      return;
    }
    setError("");
    const filteredTrains = trainlist.filter(
      (item) =>
        item.source === selectedSource &&
        item.destination === selectedDestination &&
        formatDate(item.departure_time) === selectedDate
    );
    setSearchedTrainList(filteredTrains);
  };

  const formatDate = (datetimeString) => {
    const dateObj = new Date(datetimeString);
    const formattedDate = dateObj.toISOString().split("T")[0]; // Format to YYYY-MM-DD
    return formattedDate;
  };

  useEffect(() => {
    getTrainlist();
  }, []);

  // Get current date in YYYY-MM-DD format
  const getCurrentDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    let month = today.getMonth() + 1;
    let day = today.getDate();

    // Add leading zero if month/day is single digit
    if (month < 10) {
      month = `0${month}`;
    }
    if (day < 10) {
      day = `0${day}`;
    }

    return `${year}-${month}-${day}`;
  };

  return (
    <>
      <UserHeader />
      {loginForm && <UserHeader />}
      <div
        className="d-flex align-items-center justify-content-center mb-3 mt-3"
        style={{ height: "50px" }}
      >
        {trainlist.length > 0 ? (
          <select
            name="source"
            id="source"
            className="w-25 me-2"
            onChange={handleSourceChange}
          >
            <option value="">Select Source</option>
            {trainlist.map((item, index) => (
              <option key={index} value={item.source}>
                {item.source}
              </option>
            ))}
          </select>
        ) : (
          <p>No places available</p>
        )}

        {trainlist.length > 0 ? (
          <select
            name="destination"
            id="destination"
            className="w-25 me-2"
            onChange={handleDestinationChange}
          >
            <option value="">Select Destination</option>
            {trainlist.map((item, index) => (
              <option key={index} value={item.destination}>
                {item.destination}
              </option>
            ))}
          </select>
        ) : (
          <p>No places available</p>
        )}

        <input
          type="date"
          name="date"
          id="date"
          className="me-4"
          onChange={handleDateChange}
          min={getCurrentDate()} // Set minimum date to current date
        />
        <button className="btn btn-danger" onClick={searchTrain}>
          Search
        </button>
      </div>

      {error && <p className="text-danger">{error}</p>}

      {searchedTrainList.length > 0 ? (
        searchedTrainList.map((item, index) => (
          <div className="container-fluid pt-2" key={index}>
            <div className="row ms-5">
              <div className="col-6 mt-2">
                <div className="card m">
                  <div className="card-header bg-secondary text-white">
                    {item.train_name}
                  </div>
                  <div className="card-body">
                    <div className="row pb-2">
                      <div className="col-5">
                        {item.departure_time.split("T")[1].slice(0, -1)} |{" "}
                        {item.source} | {formatDate(item.departure_time)}
                      </div>

                      <div className="col-5 text-end">
                        {item.arrival_time.split("T")[1].slice(0, -1)} |{" "}
                        {item.destination} | {formatDate(item.arrival_time)}
                      </div>
                    </div>

                    <Link
                      style={{ textDecoration: "none", color: "white" }}
                      to={`/check/${item.id}`}
                    >
                      <button className="btn btn-secondary btn-sm">
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
        <div>
          {trainlist.map((item, index) => (
            <div className="container-fluid pt-2" key={index}>
              <div className="row ms-5">
                <div className="col-6 mt-2">
                  <div className="card m">
                    <div className="card-header bg-secondary text-white">
                      {item.train_name}
                    </div>
                    <div className="card-body">
                      <div className="row pb-2">
                        <div className="col-5">
                          {item.departure_time.split("T")[1].slice(0, -1)} |{" "}
                          {item.source} | {formatDate(item.departure_time)}
                        </div>

                        <div className="col-5 text-end">
                          {item.arrival_time.split("T")[1].slice(0, -1)} |{" "}
                          {item.destination} | {formatDate(item.arrival_time)}
                        </div>
                      </div>
                      <Link
                        style={{ textDecoration: "none", color: "white" }}
                        to={`/check/${item.id}`}
                      >
                        <button className="btn btn-secondary btn-sm">
                          Check Availability
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default Search;
