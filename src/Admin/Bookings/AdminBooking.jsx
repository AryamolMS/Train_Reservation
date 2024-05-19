import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import { getUserbookings } from '../../services/allAPI'

function AdminBooking() {
  const [data, setData] = useState([])

  const bookings = async () => {
    if (sessionStorage.getItem("token")) {
      const token = sessionStorage.getItem("token");
      const reqHeader = {
        "Content-Type": "application/json",
        "Authorization": `Token ${token}`,
      };
      try {
        const result = await getUserbookings(reqHeader)
        console.log(result.data);
        setData(result.data)
      } catch (error) {
        console.error('Error fetching bookings:', error)
      }
    }
  }

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    return new Date(dateString).toLocaleDateString('en-GB', options);
  }

  useEffect(() => {
    bookings()
  }, [])

  return (
    <Container>
      <h1 className='text-center p-3'>User Bookings</h1>
      <Row>
        {data.length > 0 ? data.map((item, index) => (
          <Col md={3} key={index} className='p-3'>
            <Card style={{ width: '300px', marginLeft: '0px' }} className='align-items-center'>
              <Card.Body>
                <Card.Title>Username : {item.customer.name}</Card.Title>
                <Card.Text>Seat Type: {item.seat_type}</Card.Text>
                <Card.Text>Reserved Seats: {item.reserved_seats}</Card.Text>
                <Card.Text>Booking Amount: {item.booking_amount}</Card.Text>
                <Card.Text>Reservation Date: {formatDate(item.reservation_date)}</Card.Text>
                <Card.Text>Booking Status: {item.booking_status}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        )) : <h1>No bookings available</h1>}
      </Row>
    </Container>
  )
}

export default AdminBooking
