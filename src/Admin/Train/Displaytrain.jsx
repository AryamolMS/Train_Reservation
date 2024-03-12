import React, { useEffect, useState } from 'react'
import AdminHeader from '../../common/Headers/AdminHeader'
import './displaytrain.css'
import { displaytrainsApi } from '../../services/allAPI'
import { EditFilled } from '@ant-design/icons'
import Modal from 'react-bootstrap/Modal';


function Displaytrain() {
    const [userbooking,setuserbooking] = useState([])

    const [show, setShow] = useState(false);
    const handleClose = () => {setShow(false)};
    const handleShow = () => setShow(true);
  

    const gettrains = async()=>{
    
        if(sessionStorage.getItem("token")){
          const token = sessionStorage.getItem("token")
          const reqHeader = {
            'Content-Type':'application/json',
            'Authorization':`Token ${token}`
          }
       
        const result = await displaytrainsApi(reqHeader)
        console.log(result);
        setuserbooking(result.data)
      }
    }
      useEffect(()=>{
        gettrains()
      },[])
  return (
    <>
      <div className='d-flex'>
        <AdminHeader/>
        <div className='p-2'>
            <h1 className='text-center text-warning'>Train Details</h1>
        <div className='rounded'>
        <table className='table2 table-bordered text-center rounded'>
          <thead>
            <tr>
              <th>Train no</th>
              <th>Name</th>
              <th>Source</th>
              <th>Destination</th>
              <th>Departure time</th>
              <th>Arrival time</th>
              <th>Amount Ac</th>
              <th>Amount nonac</th>
              <th>Amount sleeper</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {userbooking?.length>0?
            userbooking.map((item)=>(<tr>
                <td>{item.train_name}</td>
                <td>{item.train_number}</td>
                <td>{item.source}</td>
                <td>{item.destination}</td>
                <td>{item.departure_time}</td>
                <td>{item.arrival_time}</td>
                <td>{item.amount_nonac}</td>
                <td>{item.amount_ac}</td>
                <td>{item.amount_sleeper}</td>
                <td><EditFilled className='text-success' onClick={handleShow}/></td>
              </tr>))
            
            :<p>nothing to display</p>}
          </tbody>
        </table>
      </div>
        </div>
      </div>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Update Train Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className='mb-3 '>
            <input type="text"  placeholder='train_name' className='form-control' />
        </div>
        <div className='mb-3 '>
            <input type="number"  placeholder='train_number' className='form-control' />
        </div>
        <div className='mb-3 '>
            <input type="text"  placeholder='source' className='form-control' />
        </div>
        <div className='mb-3 '>
            <input type="text"  placeholder='destination' className='form-control' />
        </div>
        <div className='mb-3 '>
            <input type="date"  placeholder='departure_time' className='form-control' />
        </div>
        <div className='mb-3 '>
            <input type="date"  placeholder='arrival_time' className='form-control' />
        </div>
        <div className='mb-3 '>
            <input type="number"  placeholder='amount_ac' className='form-control' />
        </div><div className='mb-3 '>
            <input type="number"  placeholder='amount_nonac' className='form-control' />
        </div><div className='mb-3 '>
            <input type="number"  placeholder='amount_sleeper' className='form-control' />
        </div>
        </Modal.Body>
       
      </Modal>
    </>
  )
}

export default Displaytrain
