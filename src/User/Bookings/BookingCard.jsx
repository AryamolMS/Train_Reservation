import React, { useEffect, useState } from "react";
import "./bookingcard.css";
import { bookingsApi } from "../../services/allAPI";
import { Col, Container, Row } from "react-bootstrap";
import { Button } from "@mui/material";

function BookingCard() {
  const [bookings, setuserbooking] = useState([]);

  const getbookings = async () => {
    if (sessionStorage.getItem("token")) {
      const token = sessionStorage.getItem("token");
      const reqHeader = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      };

      const result = await bookingsApi(reqHeader);
      console.log(result);
      setuserbooking(result.data);
    }
  };
  useEffect(() => {
    getbookings();
  }, []);

  return (
    <>
      <Container>
        <Row>
          {bookings?.length > 0 ? (
            bookings.map((item) => (
              <Col lg={4} className="mt-4 p-4">
                <div className="Card shadowcp-3" style={{width:"300px"}}>
                  <h6>Username : {item.user}</h6>
                  <h6>Train number : {item.train_number}</h6>
                  <h6>Booking Amount : {item.booking_amount}</h6>
                  <h6>Booking Time : {item.booking_time}</h6>
                  <h6>Seat type : {item.seat_type}</h6>
                  <h6>Reserved seat : {item.reserved_seats}</h6>
                  <h6>Reservation date : {item.reservation_date}</h6>
                  <h6>Booking status : {item.booking_status}</h6>
                  <Button className="mt-3 ms-5" variant="contained">
                    Cancel
                  </Button>
                </div>
              </Col>
            ))
          ) : (
            <h1>No Bookings</h1>
          )}
        </Row>
      </Container>
    </>
  );
}

export default BookingCard;
