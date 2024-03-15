import React from 'react'
import './UserHeader.css'
import { Link } from 'react-router-dom'
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';


function UserHeader({login}) {

  const [show, setShow] = useState(false);
  const handleClose = () => {setShow(false)};
  const handleShow = () => setShow(true);

  

  const loginForm = login?true:false

  return (
    <>
     <div className='userheader d-flex  text-light'>
       <div className='ms-auto me-3 p-2 d-flex m-2'>
        <p className='me-4' onClick={handleShow}>Profile</p>
        <Link to={'/userbookings'} style={{textDecoration:'none',color:'white'}}><p className='me-4'>My Bookings</p></Link>        
        <p>LogOut</p>
        </div>
    </div> 

    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Update Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        {/* <label htmlFor='profile'>
                  <input className='mt-3 mb-4' id='profile' type="file" style={{ marginLeft: '100px', display: 'none' }} />
                 <img  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D" alt="no image" style={{height:'200px',width:'200px',marginLeft: '130px',borderRadius:'50%'}} />
                </label> */}
                <input style={{borderRadius:'10px',border:'1px solid black'}} type="text" placeholder='Enter name' className='form-control mt-4 w-75 ms-5'/> <br />
                  <input style={{borderRadius:'10px',border:'1px solid black'}} type="age" placeholder='Enter age' className='form-control mt-4 w-75 ms-5'/> <br />
                  <input style={{borderRadius:'10px',border:'1px solid black'}} type="file" placeholder='choose file' className='form-control mt-4 w-75 ms-5'/> <br />
              <input style={{borderRadius:'10px',border:'1px solid black'}} type="email" placeholder='Enter username' className='form-control w-75 ms-5'/> <br />
              <input style={{borderRadius:'10px',border:'1px solid black'}} type="password" placeholder='Enter password' className='form-control w-75 ms-5' /> <br />

              <button className='btn btn-primary w-50' style={{marginLeft:'100px'}}>Update</button>
              
        </Modal.Body>
       
      </Modal>
    </>
  )
}

export default UserHeader
