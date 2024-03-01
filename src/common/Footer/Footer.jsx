import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Button } from '@mui/material';


function Footer() {
  return (
    <>
     <div className='mt-5' style={{backgroundColor:'brown'}}> 
        <Container>
            <Row className='mt-5 text-light'>
                <Col md={2}>
                    <h4 className='mt-4'>Company Info</h4>
                    <p>About Us</p>
                    <p>Carrier</p>
                    <p>We are hiring</p>
                    <p>Blog</p>
                </Col>
                <Col md={2}>
                <h4 className='mt-4'>Legal</h4>
                <p>About Us</p>
                <p>Carrier</p>
                <p>We are hiring</p>
                <p>Blog</p>
                </Col>
                <Col md={2}>
                <h4 className='mt-4'>Features</h4>
                <p>Business Marketing</p>
                <p>User Analytic</p>
                <p>Live Chat</p>
                <p>Unlimited Support</p>
                </Col>
                <Col md={2}>
                <h4 className='mt-4'>Resources</h4>
                <p>IOPS & Android</p>
                <p>Watch a Demo</p>
                <p>Customers</p>
                <p>API</p>
                </Col>
                <Col md={4}>
                    <h4 className='mb-5 mt-4'>Get In Touch</h4>
                  <div className='d-flex'>  <input type="email" name="" id="" placeholder='Enter email' style={{height:'50px'}} className='me-1'/><Button variant="contained">Contained</Button></div>
                  <p>We are the best</p>
                </Col>
                <p className='mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum expedita provident exercitationem! Dolores magni, </p>
            </Row>
        </Container>
    </div> 
    </>
  )
}

export default Footer
