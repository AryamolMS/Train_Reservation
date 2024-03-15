import React from 'react'
import AdminHeader from '../common/Headers/AdminHeader'
import { Button } from '@mui/material'
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import { stationregistrationApi } from '../services/allAPI';
import Swal from 'sweetalert2';

function Station() {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [details,setDetails] = useState({
    name:"",
    station_code:"",
    Location:"",
    phone_number:"",
    username:"",
    password:""
  })

  const handleAdd = async()=>{

    const {name,station_code,Location,phone_number,username,password} = details    

    if(!name || !station_code || !Location || !phone_number || !username || !password){
       Swal.fire({
        position: "top-center",
        icon: "warning",
        title: "Please fill the form",
        showConfirmButton: false,
        timer: 1700
      }); 
    }
    else{
       const result = await stationregistrationApi(details)
       console.log(result);
       if(result.status === 200){
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Station added Successfully",
          showConfirmButton: false,
          timer: 1700
        }); 
        setDetails({
            name: "",
            station_code: "",
            Location: "",
            phone_number: "",
            username: "",
            password: ""
        })
       }
       else{
        alert("Something went wrong")
       }
    }
  }

  const handleClose1 =()=>{
   setDetails({
       name: "",
       station_code: "",
       Location: "",
       phone_number: "",
       username: "",
       password: ""
   })
  }

  console.log(details);

  return (
    <>
     <div className='d-flex'>
        <div>
            <AdminHeader/>
        </div>
        <div className='ms-5 mt-5'>
            <h1>Add Station Details Here</h1>
            <Button variant="outlined" className='mt-4' onClick={handleShow}>Add Station</Button>
        </div>
        <div className='mt-5'>

        </div>
        

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Station Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='mb-3 '>
            <input type="text"  placeholder='name' className='form-control' value={details.name} onChange={(e)=>setDetails({...details,name:e.target.value})}/>
        </div>
        <div className='mb-3 '>
            <input type="text"  placeholder='station_code' className='form-control' value={details.station_code} onChange={(e)=>setDetails({...details,station_code:e.target.value})}/>
        </div>
        <div className='mb-3 '>
            <input type="text"  placeholder='Location' className='form-control' value={details.Location} onChange={(e)=>setDetails({...details,Location:e.target.value})}/>
        </div>
        <div className='mb-3 '>
            <input type="number"  placeholder='phone_number' className='form-control' value={details.phone_number} onChange={(e)=>setDetails({...details,phone_number:e.target.value})}/>
        </div>
        <div className='mb-3 '>
            <input type="text"  placeholder='username' className='form-control' value={details.username} onChange={(e)=>setDetails({...details,username:e.target.value})}/>
        </div>
        <div className='mb-3 '>
            <input type="password"  placeholder='password' className='form-control' value={details.password}  onChange={(e)=>setDetails({...details,password:e.target.value})}/>
        </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" className='bg-danger text-white me-3' onClick={handleClose1}>
            Cancel
          </Button>
          <Button variant="primary" className='bg-success text-white' onClick={handleAdd}>Add</Button>
        </Modal.Footer>
      </Modal>
    </div>
   
    </>
  )
}

export default Station
