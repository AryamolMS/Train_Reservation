import React from 'react'
import AdminHeader from '../common/Headers/AdminHeader'
import { Button } from '@mui/material'
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import { trainregistrationApi } from '../services/allAPI';

function AddTrain() {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [traindetails,setTraindetails] = useState({
    train_name:"",
    train_number:"",
    source:"",
    destination:"",
    departure_time:"",
    arrival_time:"",
    amount_ac:"",
    amount_nonac:"",
    amount_sleeper:""
  })

  console.log(traindetails);

  const handleClose1 = ()=>{
    setTraindetails({
      train_name:"",
      train_number:"",
      source:"",
      destination:"",
      departure_time:"",
      arrival_time:"",
      amount_ac:"",
      amount_nonac:"",
      amount_sleeper:""
    })
  }

  const handleSubmit = async()=>{

    const {train_name,train_number,source,destination,departure_time,arrival_time,amount_ac,amount_nonac,amount_sleeper} = traindetails

    if(!train_name || !train_number || !source || !destination || !departure_time || !arrival_time || !amount_ac || !amount_nonac || !amount_sleeper){
      alert("Fill the details completely")
    }
    else{
      
      const reqBody = new FormData()

      reqBody.append("train_name",train_name)
      reqBody.append("train_number",train_number)
      reqBody.append("source",source)
      reqBody.append("destination",destination)
      reqBody.append("departure_time",departure_time)
      reqBody.append("arrival_time",arrival_time)
      reqBody.append("amount_ac",amount_ac)
      reqBody.append("amount_nonac",amount_nonac)
      reqBody.append("amount_sleeper",amount_sleeper)

      const token = sessionStorage.getItem("token")

      //reqHeader
      const reqHeader = {
        "Content-Type":"application/json",
        'Authorization':`Token ${token}`
      }
      const result =  await trainregistrationApi(reqBody,reqHeader)
      console.log(result);
      if(result.status === 200){
        alert("Registration successfull")
        
      }
      else{
        alert(result.response.data)
      }
    }
  }

  return (
    <>
    <div className='d-flex'>
        <div>
            <AdminHeader/>
        </div>
        <div className='ms-5 mt-5'>
            <h1>Add Train Details Here</h1>
            <Button variant="outlined" className='mt-4' onClick={handleShow}>Add Train</Button>
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
          <Modal.Title>Train Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='mb-3 '>
            <input type="text"  placeholder='train_name' className='form-control' value={traindetails.train_name} onChange={(e)=>setTraindetails({...traindetails,train_name:e.target.value})}/>
        </div>
        <div className='mb-3 '>
            <input type="number"  placeholder='train_number' className='form-control' value={traindetails.train_number} onChange={(e)=>setTraindetails({...traindetails,train_number:e.target.value})}/>
        </div>
        <div className='mb-3 '>
            <input type="text"  placeholder='source' className='form-control' value={traindetails.source} onChange={(e)=>setTraindetails({...traindetails,source:e.target.value})}/>
        </div>
        <div className='mb-3 '>
            <input type="text"  placeholder='destination' className='form-control' value={traindetails.destination} onChange={(e)=>setTraindetails({...traindetails,destination:e.target.value})}/>
        </div>
        <div className='mb-3 '>
            <input type="date"  placeholder='departure_time' className='form-control' value={traindetails.departure_time} onChange={(e)=>setTraindetails({...traindetails,departure_time:e.target.value})}/>
        </div>
        <div className='mb-3 '>
            <input type="date"  placeholder='arrival_time' className='form-control' value={traindetails.arrival_time} onChange={(e)=>setTraindetails({...traindetails,arrival_time:e.target.value})}/>
        </div>
        <div className='mb-3 '>
            <input type="number"  placeholder='amount_ac' className='form-control' value={traindetails.amount_ac} onChange={(e)=>setTraindetails({...traindetails,amount_ac:e.target.value})}/>
        </div><div className='mb-3 '>
            <input type="number"  placeholder='amount_nonac' className='form-control' value={traindetails.amount_nonac} onChange={(e)=>setTraindetails({...traindetails,amount_nonac:e.target.value})}/>
        </div><div className='mb-3 '>
            <input type="number"  placeholder='amount_sleeper' className='form-control' value={traindetails.amount_sleeper} onChange={(e)=>setTraindetails({...traindetails,amount_sleeper:e.target.value})}/>
        </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" className='bg-danger text-white me-3' onClick={handleClose1}>
            Cancel
          </Button>
          <Button variant="primary" className='bg-success text-white' onClick={handleSubmit}>Add</Button>
        </Modal.Footer>
      </Modal>
    </div>
    </>
  )
}

export default AddTrain
