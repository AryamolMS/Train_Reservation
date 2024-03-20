import React, { useEffect, useState } from 'react';
import BookingCard from './BookingCard';
import UserHeader from '../../common/Headers/UserHeader';
import { bookingsApi } from '../../services/allAPI';
import { Col, Row } from 'react-bootstrap'; // Import Col from react-bootstrap

function MyBookings() {
  const [bookings, setuserbooking] = useState([]);
  const getbookings = async () => {
    if (sessionStorage.getItem("token")) {
      const token = sessionStorage.getItem("token");
      const reqHeader = {
        "Content-Type": "application/json",
        "Authorization": `Token ${token}`,
      };
      const result = await bookingsApi(reqHeader);
      console.log(result.data);
      setuserbooking(result.data);
    }
  };

  useEffect(() => {
    getbookings();
  }, []);

  return (
    <>
      <UserHeader />
      <div className='maindiv'>
        <h1 className='text-center mt-4 text-warning'>BOOKING DETAILS</h1>
        <Row>
          {bookings?.length > 0 ?
            bookings.map((item, index) => (
              <Col key={index} sm={12} md={6} lg={4} xl={4}> 
                <BookingCard bookings={item} getbookings={getbookings} />
              </Col>
            )) :
            <p>No bookings</p>
          }
        </Row>
      </div>
    </>
  );
}

export default MyBookings;
