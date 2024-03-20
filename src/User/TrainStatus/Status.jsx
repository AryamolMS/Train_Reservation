import React, { useState } from 'react';
import { getTrainStatusAPI, getlivestatusApi } from '../../services/allAPI';
import Accordion from 'react-bootstrap/Accordion';
import UserHeader from '../../common/Headers/UserHeader';


function Status() {
  const [searchTerm, setSearchTerm] = useState("");
  const [trainDetails, setTrainDetails] = useState([]);
  console.log(searchTerm);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!searchTerm) {
      alert('please give a search term')
    }
    else {
      try {
        const reqHeader={
          'Content-Type': 'multipart/form-data'
        }
        
        let reqBody = { search: searchTerm }
        const result = await getTrainStatusAPI(reqBody)
        console.log(result);
        console.log(reqBody);
        if (result.status >= 200 && result.status < 300) {
          setTrainDetails(result.data)
        }
        else {
          console.log(result);
          alert(result.response.data.error)
        }
      }
      catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <>
      <UserHeader/>
      <div className="container text-center py-3">
        <h1>Train Status Checker</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            {/* <label htmlFor="train name" className="form-label">Enter Train Name:</label> */}
            <input
              type="text"
              className="form-control w-75 mx-auto"
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Enter train name"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">Check Status</button>
        </form>
        <br />
        <Accordion defaultActiveKey="0" flush>
          {trainDetails.length > 0 ? (
            trainDetails.map((item, index) => (
              <Accordion.Item eventKey={index}>
                <Accordion.Header>{item.name}</Accordion.Header>
                <Accordion.Body>
                  <h6 className="card-subtitle mb-2 text-muted">Train Number: {item.train_num}</h6>
                  <p className="card-text">From: {item.train_from}</p>
                  <p className="card-text">To: {item.train_to}</p>
                  <p className="card-text">Arrival Time: {item.data.arriveTime}</p>
                  <p className="card-text">Departure Time: {item.data.departTime}</p>
                  <p className="card-text">Running Days: {Object.keys(item.data.days).join(', ')}</p>
                  <p className="card-text">Classes Available: {item.data.classes.join(', ')}</p>
                </Accordion.Body>
              </Accordion.Item>
            ))
          ) : (
            <p className='p-5'>No train available with this name</p>
          )}
        </Accordion>
  
      </div>
    </>
  );
}

export default Status;
