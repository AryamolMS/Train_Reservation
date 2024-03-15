import React from 'react'; // Import React
import './bookingcard.css'; // Import CSS file
import { Col, Container, Row } from 'react-bootstrap'; // Import Col, Container, and Row from react-bootstrap
import { Button } from '@mui/material'; // Import Button from Material-UI

function BookingCard({ bookings }) {
  const formatDate = (datetimeString) => {
    const dateObj = new Date(datetimeString);
    const options = { weekday: 'short', day: '2-digit', month: 'short' };
    return dateObj.toLocaleDateString('en-US', options);
  };
  
  return (
    <>
      <Container>
        <Row>
          <Col lg={4} className="mt-4 p-4">
            <div className="Card shadowcp-3" style={{ width: "300px" }}>
              <h6>Username : {bookings.user}</h6>
              <h6>Train number : {bookings.train_number}</h6>
              <h6>Booking Amount : {bookings.booking_amount}</h6>
              <h6>Booking Time : {bookings.booking_time.split('T')[1].slice(0, -11)} {formatDate(bookings.booking_time)}</h6>
              <h6>Seat type : {bookings.seat_type}</h6>
              <h6>Reserved seat : {bookings.reserved_seats}</h6>
              <h6>Reservation date : {formatDate(bookings.reservation_date)}</h6>
              <h6>Booking status : {bookings.booking_status}</h6>
              <Button className="mt-3 ms-5" variant="contained">
                Cancel
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default BookingCard;
