import React, { useState } from 'react';
import AdminHeader from '../../common/Headers/AdminHeader';
import { Button } from '@mui/material';
import Modal from 'react-bootstrap/Modal';
import { trainregistrationApi } from '../../services/allAPI';
import Swal from 'sweetalert2';

function AddTrain() {
  const [show, setShow] = useState(false);
  const [traindetails, setTraindetails] = useState({
    train_name: "",
    train_number: "",
    source: "",
    destination: "",
    departure_date: "",
    departure_time: "",
    arrival_date: "",
    arrival_time: "",
    amount_ac: "",
    amount_nonac: "",
    amount_sleeper: ""
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleClose1 = () => {
    setTraindetails({
      train_name: "",
      train_number: "",
      source: "",
      destination: "",
      departure_date: "",
      departure_time: "",
      arrival_date: "",
      arrival_time: "",
      amount_ac: "",
      amount_nonac: "",
      amount_sleeper: ""
    });
  };

  const handleSubmit = async () => {
    const { train_name, train_number, source, destination, departure_date, departure_time, arrival_date, arrival_time, amount_ac, amount_nonac, amount_sleeper } = traindetails;

    if (!train_name || !train_number || !source || !destination || !departure_date || !departure_time || !arrival_date || !arrival_time || !amount_ac || !amount_nonac || !amount_sleeper) {
      Swal.fire({
        title: "Fill the details completely!",
        icon: "warning"
      });
    } else {
      const departureDateTime = `${departure_date} ${departure_time}`;
      const arrivalDateTime = `${arrival_date} ${arrival_time}`;

      const reqBody = new FormData();
      reqBody.append("train_name", train_name);
      reqBody.append("train_number", train_number);
      reqBody.append("source", source);
      reqBody.append("destination", destination);
      reqBody.append("departure_time", departureDateTime);
      reqBody.append("arrival_time", arrivalDateTime);
      reqBody.append("amount_ac", amount_ac);
      reqBody.append("amount_nonac", amount_nonac);
      reqBody.append("amount_sleeper", amount_sleeper);

      const token = sessionStorage.getItem("token");
      const reqHeader = {
        "Content-Type": "application/json",
        'Authorization': `Token ${token}`
      };

      try {
        const result = await trainregistrationApi(reqBody, reqHeader);
        console.log(result);
        if (result.status === 200) {
          Swal.fire({
            title: "Registration successful!",
            icon: "success"
          });
          handleClose()
          handleClose1()
        } else {
          Swal.fire({
            title: (result.response.data),
            icon: "error"
          });
        }
      } catch (error) {
        console.error("Error:", error);
        Swal.fire({
          title: "An error occurred. Please try again later!",
          icon: "warning"
        });
      }
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTraindetails({ ...traindetails, [name]: value });
  };

  return (
    <>
      <div className='d-flex'>
        <AdminHeader />
        <div className='ms-5 mt-5'>
          <h1>Add Train Details Here</h1>
          <Button variant="outlined" className='mt-4' onClick={handleShow}>Add Train</Button>
        </div>

        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Train Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className='mb-3'>
              <input type="text" name="train_name" placeholder='train_name' className='form-control' value={traindetails.train_name} onChange={handleInputChange} />
            </div>
            <div className='mb-3'>
              <input type="number" name="train_number" placeholder='train_number' className='form-control' value={traindetails.train_number} onChange={handleInputChange} />
            </div>
            <div className='mb-3'>
              <input type="text" name="source" placeholder='source' className='form-control' value={traindetails.source} onChange={handleInputChange} />
            </div>
            <div className='mb-3'>
              <input type="text" name="destination" placeholder='destination' className='form-control' value={traindetails.destination} onChange={handleInputChange} />
            </div>
            <div className='mb-3'>
              <input type="date" name="departure_date" placeholder='departure_date' className='form-control' value={traindetails.departure_date} onChange={handleInputChange} />
              <input type="time" name="departure_time" placeholder='departure_time' className='form-control' value={traindetails.departure_time} onChange={handleInputChange} />
            </div>
            <div className='mb-3'>
              <input type="date" name="arrival_date" placeholder='arrival_date' className='form-control' value={traindetails.arrival_date} onChange={handleInputChange} />
              <input type="time" name="arrival_time" placeholder='arrival_time' className='form-control' value={traindetails.arrival_time} onChange={handleInputChange} />
            </div>
            <div className='mb-3'>
              <input type="number" name="amount_ac" placeholder='amount_ac' className='form-control' value={traindetails.amount_ac} onChange={handleInputChange} />
            </div>
            <div className='mb-3'>
              <input type="number" name="amount_nonac" placeholder='amount_nonac' className='form-control' value={traindetails.amount_nonac} onChange={handleInputChange} />
            </div>
            <div className='mb-3'>
              <input type="number" name="amount_sleeper" placeholder='amount_sleeper' className='form-control' value={traindetails.amount_sleeper} onChange={handleInputChange} />
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" className='bg-danger text-white me-3' onClick={handleClose1}>Cancel</Button>
            <Button variant="primary" className='bg-success text-white' onClick={handleSubmit}>Add</Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
}

export default AddTrain;
