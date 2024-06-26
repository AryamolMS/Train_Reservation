import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { addPaymentAPI } from "../../services/allAPI";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Paynow from './Paynow';

function Payment({ id, amount, closeBookNow }) {
    const navigate = useNavigate();
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handlePayNow = async () => {
        let token = sessionStorage.getItem('token');
        if (!token) {
            Swal.fire({
                title: "Please Login!",
                icon: "warning"
            });
        } else {
            const reqHeader = {
                "Content-Type": "application/json",
                "Authorization": `Token ${token}`,
            };
            try {
                const result = await addPaymentAPI(id, reqHeader);
                console.log(result);
                if (result.status >= 200 && result.status < 300) {
                    Swal.fire({
                        title: "Payment Successful!",
                        icon: "success"
                    });
                    handleClose();
                    closeBookNow();
                    navigate('/userbookings')
                } else {
                    Swal.fire({
                        title: "Payment Failed!",
                        icon: "error"
                    });
                    handleClose();
                }
            } catch (err) {
                console.log(err);
            }
        }
    };

    return (
        <>
            <Button variant="primary" onClick={handleShow} className='btn btn-success w-75 mx-auto d-block my-1' style={{ fontSize: '20px', fontWeight: 'bold' }}>
                Complete payment
            </Button>

            <Modal show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Complete the payment</Modal.Title>
                </Modal.Header>
                <Modal.Body className="py-5">
                    <Paynow/>
                    <h3 className='d-flex justify-content-center align-items-center mt-5'>
                        Total amount: <i className="fa-solid fa-indian-rupee-sign" />{amount}
                    </h3>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="warning" onClick={handleClose} className='btn btn-success w-25 mx-auto' style={{ fontSize: '20px', fontWeight: 'bold' }}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={handlePayNow} className='btn btn-success w-25 mx-auto' style={{ fontSize: '20px', fontWeight: 'bold' }}>
                        Pay now!
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Payment;
