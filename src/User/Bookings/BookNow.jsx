import React, { useEffect } from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { bookTicketAPI, getSingleTrainApi } from "../../services/allAPI";
import Payment from "./Payment";
import Swal from "sweetalert2";

function BookNow({ train_id, type, totalSeats }) {
  const [show, setShow] = useState(false);
  const [trainData, setTrainData] = useState({});
  const [ticketPrice, setTicketPrice] = useState(null);
  const [ticketCount, setTicketCount] = useState(1);
  const [totalAmount, setTotalAmount] = useState(0);
  const [payment, setPayment] = useState(false);
  const [bookingId, setBookingId] = useState(null);
  const handleClose = () => setShow(false);
  const handleShow = async () => {
    setShow(true);
    await getTrainData();
    setPayment(false);
    setTicketCount(1);
  };
  useEffect(() => {
    checkTicketPrice();
  }, [trainData, type]);
  useEffect(() => {
    setTotalAmount(ticketCount * ticketPrice);
  }, [ticketCount, ticketPrice, type]);

  console.log(ticketCount);
  console.log(ticketPrice);
  console.log(trainData);
  console.log(train_id, type);

  const checkTicketPrice = () => {
    if (trainData) {
      if (type === "AC") {
        setTicketPrice(trainData.amount_ac);
      } else if (type === "Non AC") {
        setTicketPrice(trainData.amount_nonac);
      } else {
        setTicketPrice(trainData.amount_sleeper);
      }
    }
  };
  const handleBookNow = async () => {
    let token = sessionStorage.getItem("token");
    if (!token) {
      Swal.fire({
        title: "Please Login!",
        icon: "warning",
      });
    } else {
      const reqHeader = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      };
      try {
        const result = await bookTicketAPI(
          train_id,
          { reserved_seats: ticketCount, seat_type: type },
          reqHeader
        );
        if (result.status >= 200 && result.status < 300) {
          setPayment(true);
          console.log(result);
          setBookingId(result.data.id);
        } else {
          Swal.fire({
            title: "Booking Failed!",
            icon: "error",
          });
          handleClose();
        }
      } catch (err) {
        console.log(err);
      }
    }
  };
  const getTrainData = async () => {
    let token = sessionStorage.getItem("token");
    if (!token) {
      Swal.fire({
        title: "Please Login!",
        icon: "warning",
      });
    } else {
      const reqHeader = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      };
      try {
        let result = await getSingleTrainApi(train_id, reqHeader);
        if (result.status >= 200 && result.status < 300) {
          console.log(result);
          setTrainData(result.data);
        } else {
          console.log(result?.response);
        }
      } catch (err) {
        console.log(err);
      }
    }
  };
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Book now
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            <h1 className="text-center text-secondary pt-4">
              Book Your Tickets
            </h1>
            <h3>
              <span className={payment ? "text-secondary" : "text-dark"}>
                Step 1
              </span>
              <span className={payment ? "text-dark" : "text-secondary"}>
                <i class="fa-solid fa-arrow-right" /> Step 2
              </span>{" "}
            </h3>
          </Modal.Title>
        </Modal.Header>

        <Modal.Body
          className="Card shadow p-4"
          style={{ width: "500px", height: "350px" }}
        >
          {payment ? (
            <>
              <div className="mt-3 text-center">
                <h3>Number of tickets :{ticketCount}</h3>
                <h3>Total amount: ₹{totalAmount}</h3>
              </div>
            </>
          ) : (
            <>
              <div className="mt-3 text-center">
                <label htmlFor="ticketcount" className="fs-4">
                  Number of tickets:&nbsp;
                </label>
                <input
                  id="ticketcount"
                  type="number"
                  placeholder="Number of tickets"
                  value={ticketCount}
                  onChange={(e) => setTicketCount(e.target.value)}
                  className="form-control w-25 mx-auto d-inline"
                  min={1}
                  max={totalSeats}
                />
              </div>
              <div className="mt-4 ms-3 text-center">
                <label htmlFor="ticketamount" className="fs-4">
                  Total amount:&nbsp;
                </label>
                <i className="fa-solid fa-indian-rupee-sign" /> &nbsp;
                <input
                  type="text"
                  id="ticketamount"
                  className="mx-auto w-25 mx-auto form-control d-inline"
                  value={totalAmount}
                  readOnly
                />
              </div>
            </>
          )}

          <div className="mt-5">
            {payment ? (
              <Payment
                id={bookingId}
                amount={totalAmount}
                closeBookNow={handleClose}
              />
            ) : (
              <button
                className="btn btn-success w-75 mx-auto ms-5"
                style={{ fontSize: "20px", fontWeight: "bold" }}
                onClick={handleBookNow}
              >
                Book Now
              </button>
            )}
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default BookNow;
