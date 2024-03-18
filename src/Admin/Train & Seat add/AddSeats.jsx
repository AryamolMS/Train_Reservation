/* import React, { useState } from "react";
import { Button } from "@mui/material";
import Modal from 'react-bootstrap/Modal';
import { seatlimitApi } from "../../services/allAPI";


function AddSeats({trainid}) {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    const [seat,setSeat] = useState({
        type:"",
        available_seats:""
    })
    console.log(seat);

    const handleSubmit = async () => {
        const { type, available_seats } = seat;
        if (!type || !available_seats) {
            alert("Fill the details completely");
        } else {
           const formData = new FormData();
           formData.append("train_id", trainid); // Use trainid prop
           formData.append("type", type);
           formData.append("available_seats", available_seats);
          
            const token = sessionStorage.getItem("token");
            const reqHeader = {
                "Authorization": `Token ${token}`
            };
            
            try {
                const result = await seatlimitApi(trainid, formData, reqHeader); // Use trainid prop
                console.log(result);
                if (result.status === 200) {
                    alert("Seat added successfully");
                } else {
                    alert(result.response.data);
                }
            } catch (error) {
                console.error("Error adding seat:", error);
            }
        }
    };
    
    

  return (
    <>
      <div>
        <Button variant="outlined" className="mt-4" onClick={handleShow}>
          Add Seats
        </Button>

        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Seat Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="mb-3 ">
              <select
                name=""
                id=""
                className="w-100 form-control"
                onChange={(e) => setSeat({ ...seat, type: e.target.value })}
              >
                <option value="">Select</option>
                <option value="AC">AC</option>
                <option value="Non ac">Non ac</option>
                <option value="Sleeper">Sleeper</option>
              </select>
            </div>
            <div className="mb-3 ">
              <input
                type="number"
                placeholder="seat limit"
                className="form-control"
                value={seat.available_seats}
                onChange={(e) =>
                  setSeat({ ...seat, available_seats: e.target.value })
                }
              />
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="primary"
              className="bg-success text-white"
              onClick={handleSubmit}
            >
              Add
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );

  }
export default AddSeats;
 */

import React, { useState } from "react";
import { Button } from "@mui/material";
import Modal from "react-bootstrap/Modal";
import { seatlimitApi } from "../../services/allAPI";
import axios from "axios";

function AddSeats({ train }) {
  console.log(train);
  const token = sessionStorage.getItem("token");
  // console.log(token);
  const reqHeader = {
    Authorization: `Token ${token}`,
  };

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [seat, setSeat] = useState({
    type: "",
    available_seats: "",
  });
  console.log(seat);
  

  const handleSubmit = async () => {
    const { type, available_seats } = seat;
    if (!type || !available_seats) {
      alert("Fill the details completely");
    } else {
      const reqBody = new FormData();
      reqBody.append("train", train); // Use trainid prop
      reqBody.append("type", type);
      reqBody.append("available_seats", available_seats);

      try {
        const result = await axios.post(`http://127.0.0.1:8000/station/train/${train }/add_capacity/`,reqBody,{
          headers:{
            Authorization:`Token ${token}`
          }
        }) // Remove trainid param here
        console.log(result);
        if (result.status === 200) {
          alert("Seat added successfully");
          console.log(result);
          setSeat({type: "",
          available_seats: "",})
          handleClose()
        } 
      } catch (error) {
        console.error( error);
      }
    }
  };

  return (
    <>
      <div>
        <Button variant="outlined" className="mt-4" onClick={handleShow}>
          Add Seats
        </Button>

        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Seat Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="mb-3 ">
              <select
                name=""
                id=""
                className="w-100 form-control"
                onChange={(e) => setSeat({ ...seat, type: e.target.value })}
              >
                <option value="">Select</option>
                <option value="AC">AC</option>
                <option value="Non AC">Non ac</option>
                <option value="Sleeper">Sleeper</option>
              </select>
            </div>
            <div className="mb-3 ">
              <input
                type="number"
                placeholder="seat limit"
                className="form-control"
                value={seat.available_seats}
                onChange={(e) =>
                  setSeat({ ...seat, available_seats: e.target.value })
                }
              />
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="primary"
              className="bg-success text-white"
              onClick={handleSubmit}
            >
              Add
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
}
export default AddSeats;
