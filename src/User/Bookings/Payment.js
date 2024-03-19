import React from "react"
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { addPaymentAPI } from "../../services/allAPI";

function Payment({ id, amount }) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handlePayNow = async () => {
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
                const result = await addPaymentAPI(id, reqHeader)
                console.log(result);
                if (result.status >= 200 && result.status < 300) {
                    alert("Payment successfull!")
                    handleClose()
                }
                else {
                    alert("Payment failed!")
                    handleClose()
                }
            } catch (err) { console.log(err); }
        }
    }
    return (
        <>
            <Button variant="primary" onClick={handleShow} className='btn btn-success w-75 mx-auto ms-5' style={{ fontSize: '20px', fontWeight: 'bold' }}>
                Pay now!
            </Button>

            <Modal show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Complete the payment</Modal.Title>
                </Modal.Header>
                <Modal.Body className="py-5">
                    <h1>
                        Total amount : <i className="fa-solid fa-indian-rupee-sign" />{amount}

                    </h1>                </Modal.Body>
                <Modal.Footer>
                    <Button variant="warning" onClick={handleClose} className='btn btn-success w-25 mx-auto ' style={{ fontSize: '20px', fontWeight: 'bold' }}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={handlePayNow} className='btn btn-success w-25 mx-auto' style={{ fontSize: '20px', fontWeight: 'bold' }}>
                        Pay now!
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Payment