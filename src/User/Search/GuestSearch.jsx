import React, { useEffect, useState } from "react";
import { guesttrainApi } from "../../services/allAPI";
import { Link } from "react-router-dom";

function GuestSearch() {
  const [trainlist, setTrainlist] = useState([]);
  const [selectedSource, setSelectedSource] = useState("");
  const [selectedDestination, setSelectedDestination] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [searchedTrainList, setSearchedTrainList] = useState([]);


  const getTrainlist = async () => {
    try {
      const result = await guesttrainApi();
      setTrainlist(result.data);
    } catch (error) {
      console.error("Error fetching train list:", error);
    }
  };

  console.log(trainlist);
  const handleSourceChange = (event) => {
    setSelectedSource(event.target.value);
  };

  const handleDestinationChange = (event) => {
    setSelectedDestination(event.target.value);
  };

  const handleDateChange = (event) => {
    const selectedDate = new Date(event.target.value);
    const currentDate = new Date();
    
    // Check if the selected date is a previous date
    if (selectedDate < currentDate) {
      // Display an error message or handle the validation as needed
      alert("Date cannot be a previous date.");
      // Reset the selected date to an empty string or handle it as needed
      setSelectedDate("");
    } else {
      // Update the selected date state if it's a valid date
      setSelectedDate(event.target.value);
    }
  };
  
    
    const searchTrain = () => {
        const filteredTrains = trainlist.filter((item) =>
          item.source === selectedSource &&
          item.destination === selectedDestination 
          && formatDate(item.departure_time) === selectedDate
        );
        setSearchedTrainList(filteredTrains);
      };
      console.log("searched train",searchedTrainList);
      const formatDate = (datetimeString) => {
        const dateObj = new Date(datetimeString);
        const formattedDate = dateObj.toISOString().split('T')[0]; // Format to YYYY-MM-DD
        return formattedDate;
    };
    
  useEffect(() => {
    getTrainlist();
  }, []);

  return (
    <>
      <div className="d-flex align-items-center justify-content-center mt-5 mb-5">
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
          <select name="destination" id="destination" className="w-25 me-2" onChange={handleDestinationChange}>
            <option value="">Select Destination</option>
            {trainlist.map((item, index) => (
              <option key={index} value={item.destination}>{item.destination}</option>
            ))}
          </select>
        ) : (
          <p>No places available</p>
        )}

        <input type="date" name="date" id="date" className="me-4" onChange={handleDateChange} />
        <button className="btn btn-danger" onClick={searchTrain}>Search</button>
      </div>

      
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
                        {item.departure_time.split('T')[1].slice(0, -1)} | {item.source} | {formatDate(item.departure_time)}
                      </div>

                      <div className="col-5 text-end">
                        {item.arrival_time.split('T')[1].slice(0, -1)} | {item.destination} | {formatDate(item.arrival_time)}
                      </div>
                    </div>
                   
                    <Link style={{ textDecoration: "none", color: "white" }} to={`/check/${item.id}`}>
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
                          {item.departure_time.split('T')[1].slice(0, -1)} | {item.source} | {formatDate(item.departure_time)}
                        </div>

                        <div className="col-5 text-end">
                          {item.arrival_time.split('T')[1].slice(0, -1)} | {item.destination} | {formatDate(item.arrival_time)}
                        </div>
                      </div>
                      <Link style={{ textDecoration: "none", color: "white" }} to={`/check/${item.id}`} >
                        <button className="btn btn-secondary btn-sm" >
                          Check Availaby
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

export default GuestSearch;
