import React from 'react'; 
import './bookingcard.css'; 
import { Col, Container, Row } from 'react-bootstrap';
import Feedback from '../Feedback/Feedback';

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
            <div className="Card shadow p-5 text-center rounded" style={{ width: "400px" }}>
              <h6>Username : {bookings.user}</h6>
              <h6>Train number : {bookings.train_number}</h6>
              <h6>Booking Amount : {bookings.booking_amount}</h6>
              <h6>Booking Time : {bookings.booking_time.split('T')[1].slice(0, -11)} {formatDate(bookings.booking_time)}</h6>
              <h6>Seat type : {bookings.seat_type}</h6>
              <h6>Reserved seat : {bookings.reserved_seats}</h6>
              <h6>Reservation date : {formatDate(bookings.reservation_date)}</h6>
              <h6>Booking status : {bookings.booking_status}</h6>
              <Feedback/>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default BookingCard;
