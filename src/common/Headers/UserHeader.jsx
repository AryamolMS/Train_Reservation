import React, { useContext, useEffect } from 'react'
import './UserHeader.css'
import { Link, useNavigate } from 'react-router-dom'
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import { isAuthtokenContext } from '../../context/ContextShare';
import { getuserApi } from '../../services/allAPI';


function UserHeader({login}) {

  const {isAuthtken,setIsAuthtoken} = useContext(isAuthtokenContext)
  const navigate =useNavigate()

  const logeout = ()=>{
    sessionStorage.removeItem("token")
    sessionStorage.removeItem("userDetails")
    setIsAuthtoken(false)
    navigate('/')
   
  }

  const [show, setShow] = useState(false);
  const handleClose = () => {setShow(false)};
  const handleShow = () => setShow(true);

  const [useredit,setUseredit] = useState([])

  /* const [userProfile, setUserprofile] = useState({
    name: "",
    age: "",
    email_address: "",
    biodata: "",
    username: "",
    password: "",
  });

  const [existingUser,setExistinguser] = useState("")
  const [preview,setPreview] = useState("") */

  /* const getuserdetails = async()=>{
    if(sessionStorage.getItem("token")){
      const token = sessionStorage.getItem("token")
      const reqHeader = {
        'Content-Type':'application/json',
        'Authorization':`Token ${token}`
      }
   
    const result = await getuserApi(reqHeader)
    console.log(result);
    sessionStorage.setItem("userDetails", JSON.stringify(result.data));    
    setUseredit(result.data)
  }
} */

  
  const loginForm = login?true:false

 /*  useEffect(()=>{
    getuserdetails()
  },[])
 */
  /* useEffect(() => {
    const user = JSON.parse(sessionStorage.getItem("userDetails"))
    setUserprofile({
      ...userProfile,
      name: user.name,
      age: user.age,
      email_address: user.email_address,
      username: user.username,
      password: user.password,
      biodata: ""
    });
    setExistinguser(user.biodata);
  }, []); 
 */
  return (
    <>
     <div className='userheader d-flex  text-light'>
       <div className='ms-auto me-3 p-2 d-flex m-2'>
       <Link to={'/feedback'} style={{textDecoration:'none',color:'white'}}><p className='me-4'>Feedback</p></Link>
        <p className='me-4' onClick={handleShow}>Profile</p>
        <Link to={'/userbookings'} style={{textDecoration:'none',color:'white'}}><p className='me-4'>My Bookings</p></Link>        
        <p onClick={logeout}>LogOut</p>
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
              <input style={{borderRadius:'10px',border:'1px solid black'}} type="text" placeholder='Enter name' className='form-control mt-4 w-75 ms-5' /> <br />
              <input style={{borderRadius:'10px',border:'1px solid black'}} type="age" placeholder='Enter age' className='form-control mt-4 w-75 ms-5'/> <br />
              <input style={{borderRadius:'10px',border:'1px solid black'}} type="file" placeholder='choose file' className='form-control mt-4 w-75 ms-5'/> <br />
              <input style={{borderRadius:'10px',border:'1px solid black'}} type="email" placeholder='Enter username' className='form-control w-75 ms-5'/> <br />
              <input style={{borderRadius:'10px',border:'1px solid black'}} type="password" placeholder='Enter password' className='form-control w-75 ms-5' /> <br />
              <button className='btn btn-primary w-50' style={{marginLeft:'100px'}} >Update</button>
              
        </Modal.Body>
       
      </Modal>
    </>
  )
  }

export default UserHeader