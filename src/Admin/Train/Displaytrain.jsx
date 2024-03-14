import React, { useContext, useEffect, useState } from 'react'
import AdminHeader from '../../common/Headers/AdminHeader'
import './displaytrain.css'
import { displaytrainsApi} from '../../services/allAPI'
import EdittrainDetails from './EdittrainDetails'
import { edittrainContext } from '../../context/ContextShare'


function Displaytrain() {
  const {edittrain,setedittrain} = useContext(edittrainContext)


    const [trainlist,settrainlist] = useState([])

  

    const gettrains = async()=>{
    
        if(sessionStorage.getItem("token")){
          const token = sessionStorage.getItem("token")
          const reqHeader = {
            'Content-Type':'application/json',
            'Authorization':`Token ${token}`
          }
       
        const result = await displaytrainsApi(reqHeader)
        console.log(result);
        settrainlist(result.data)
      }
    }

    const handleSearch = ()=>{
      
    }

      useEffect(()=>{
        gettrains()
      },[edittrain])
      
     
  return (
    <>
      <div className='d-flex'>
        <AdminHeader/>
        <div className='p-2'>
            <h1 className='text-center text-warning'>Train Details</h1>

            <div className='d-flex'>
              <input type="text" placeholder='Train name' className='form-control mb-3 w-75 ms-5'/>
              <i class="fa-solid fa-magnifying-glass fa-2x ms-3" onClick={handleSearch}></i>
            </div>
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
            {trainlist?.length>0?
            trainlist.map((item)=>(<tr>
                <td>{item.train_name}</td>
                <td>{item.train_number}</td>
                <td>{item.source}</td>
                <td>{item.destination}</td>
                <td>{item.departure_time}</td>
                <td>{item.arrival_time}</td>
                <td>{item.amount_nonac}</td>
                <td>{item.amount_ac}</td>
                <td>{item.amount_sleeper}</td>
                <td><EdittrainDetails train={item}/></td>
              </tr>))
            
            :<p>nothing to display</p>}
          </tbody>
        </table>
      </div>
        </div>
      </div>

     
    </>
  )
}

export default Displaytrain
