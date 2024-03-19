import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { getSingleTrainApi } from '../../services/allAPI';

function BookNow({ train_id, type }) {
  const [show, setShow] = useState(false);
  const [trainData, setTrainData] = useState({})
  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
    getTrainData()
  }
  console.log(train_id, type);
  const getTrainData = async () => {
    let token = sessionStorage.getItem('token')
    if (!token) {
      alert('Please login')
    }
    else {
      const reqHeader = {
        "Content-Type": "application/json",
        "Authorization": `Token ${token}`,
      };
      try {
        let result = await getSingleTrainApi(train_id, reqHeader)
        if (result.status >= 200 && result.status < 300) {
          console.log(result);
          setTrainData(result.data)
        }
        else {
          console.log(result?.response);
        }
      }
      catch (err) {
        console.log(err);
      }
    }
  }
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Check
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='Card shadow' style={{ width: '500px', height: '350px' }}>
            <h1 className='text-center text-secondary pt-4'>Book Your Tickets</h1>
            <div className='mt-3'>
              <input type="number" placeholder='Seat Number' className='form-control w-75 mx-auto' />
            </div>
            <div className='mt-5 ms-3'>
              <input type="text" value="Your Amount" className="ms-5 w-75 form-control" readOnly />          </div>
            <div className='mt-5'>
              <button className='btn btn-success w-75 mx-auto ms-5' style={{ fontSize: '20px', fontWeight: 'bold' }}>Pay Now</button>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>

  );
}

export default BookNow;