import React from 'react'
import './Authentication.css'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Authentication({login}) {
  const loginForm = login?true:false
  return (
    <>
     <Container>
      <Row>
      </Row>  
      <Col md={2}>
      </Col>
      <Col md={8}>
        <div className='Card shadow card mt-5 text-center'>
          <Row>
            <Col md={6}>
              <img src="https://activetuitions.com/images/bg/login.png" alt="no image" className='loginimg' />
            </Col>
            <Col md={6}>
           { loginForm? <h1 className='mt-3 mb-5' style={{color:'royalblue'}}>Login</h1>
              :
              <h1 className='mt-3' style={{color:'royalblue'}}>Register</h1>}
              {loginForm?
              null
                :
                <div className='mb-5 mt-5 me-4'>
                <input type="text" placeholder='Enter Username' className='form-control'/>
              </div>}
              <div className='mb-5 me-4'>
                <input type="email" placeholder='Enter email' className='form-control'/>
              </div>
              <div className='mb-3 me-4'>
                <input type="password" placeholder='Enter password' className='form-control'/>
              </div>
             { loginForm?
              <div className='mt-5 fw-5'>
              <button className='btn btn-success form-control w-75 mb-2'>Login</button>
            </div>:
              <div className='mt-5 fw-5'>
                <button className='btn btn-success form-control w-75 mb-2'>Register</button>
              </div>}
              { loginForm?
                <div>
              <p>Don't have an account? <Link to={'/register'} style={{textDecoration:'none',color:'royalblue',fontSize:'20px'}}>Sign Up</Link></p>
              </div>:
              <div>
              <p>Already have an account? <Link to={'/login'} style={{textDecoration:'none',color:'royalblue',fontSize:'20px'}}>Sign In</Link></p>
              </div>}
            </Col>
          </Row>
        </div>
      </Col>
      <Col md={2}>
      </Col>
    </Container> 
    </>
  )
}

export default Authentication
