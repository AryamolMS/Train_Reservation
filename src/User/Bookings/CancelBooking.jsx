import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { cancelTicketAPI } from '../../services/allAPI';
import Swal from 'sweetalert2';

function CancelBooking({id, getbookings}) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handelCancel=async()=>{
    let token = sessionStorage.getItem('token')
    if (!token) {
      Swal.fire({
        title: "Please Login!",
        icon: "warning"
      });
    }
    else {
      const reqHeader = {
        "Content-Type": "application/json",
        "Authorization": `Token ${token}`,
      };
      try {
        const result = await cancelTicketAPI(id, reqHeader)
        console.log(result);
        if (result.status >= 200 && result.status < 300) {
          Swal.fire({
            title: "Cancellation Successfull!",
            icon: "success"
          });
          handleClose()
          getbookings()
        }
        else {
          console.log(result);
          Swal.fire({
            title: "Cancellation Failed!",
            icon: "error"
          });
          handleClose()
        }
      }
      catch (err) {
        console.log(err);
      }
    }
  }
  return (
    <>
    <>
      <Button variant="danger" onClick={handleShow}>
        Cancel
      </Button>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Are you sure that you want to cancel this booking?
          </Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="danger" onClick={handelCancel}>
            Cancel booking
          </Button>
        </Modal.Footer>
      </Modal>
    </> 
    </>
  )
}

export default CancelBooking
