
import React, { useContext, useState } from "react";
import { Button } from "@mui/material";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import { addseatContext } from "../../context/ContextShare";
import Swal from "sweetalert2";

function AddSeats({ train }) {
  const {addseat,setSeatadd} = useContext(addseatContext)
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
      Swal.fire({
        title: "Fill the details completely!",
        icon: "warning"
      });
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
          Swal.fire({
            title: "Seat added successfully!",
            icon: "success"
          });
          console.log(result);
          setSeat({type: "",
          available_seats: "",})
          handleClose()
          setSeatadd(result.data)

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
