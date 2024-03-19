import React, { useState } from 'react';
import { getlivestatusApi } from '../../services/allAPI';

function Status() {
  const [status, setStatus] = useState("");
  const [trainDetails, setTrainDetails] = useState([]);
  console.log(status);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!status){
        alert('please fill this form')
    }
    else{
      const result = await getlivestatusApi(trainDetails)
      console.log(result);
    }
  };

  return (
    <div className="container">
      <h1>Train Status Checker</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="train name" className="form-label">Enter Train Name:</label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => setStatus(e.target.value)}
            placeholder="Enter train name"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Check Status</button>
      </form>

      {trainDetails.length > 0 ? (
        trainDetails.map((item, index) => (
          <div className="card" key={index}>
            <div className="card-body">
              <h5 className="card-title">{item.name}</h5>
              <h6 className="card-subtitle mb-2 text-muted">Train Number: {item.train_num}</h6>
              <p className="card-text">From: {item.train_from}</p>
              <p className="card-text">To: {item.train_to}</p>
              <p className="card-text">Arrival Time: {item.data.arriveTime}</p>
              <p className="card-text">Departure Time: {item.data.departTime}</p>
              <p className="card-text">Running Days: {Object.keys(item.data.days).join(', ')}</p>
              <p className="card-text">Classes Available: {item.data.classes.join(', ')}</p>
            </div>
          </div>
        ))
      ) : (
        <p>No train available with this name</p>
      )}
    </div>
  );
}

export default Status;
