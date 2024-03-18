import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Adminheadr.css'
import { isAuthtokenContext } from '../../context/ContextShare'


function AdminHeader() {

  const {isAuthtken,setIsAuthtoken} = useContext(isAuthtokenContext)
  const navigate = useNavigate()

  const logeout = ()=>{
    sessionStorage.removeItem("token")
    setIsAuthtoken(false)
    navigate('/')
   
  }
  return (
    
      <>
       <div className='adminheader ms-3 mt-3 Card shadow mb-3 d-flex align-items-center  flex-column'>
         <div className='mt-5 text-light'>
            <Link className='link' to={'/addtrain'}><h5 className='mb-3'><i class="fa-solid fa-train-subway me-2"></i> Add Train</h5></Link>
            <Link className='link' to={'/displaytrain'}><h5 className='mb-3'><i class="fa-solid fa-arrow-right-from-bracket me-2"></i> Scheduled Train</h5></Link>
            <h5 className='mb-3'><i class="fa-solid fa-right-from-bracket me-2" onClick={logeout}></i> LogOut</h5>

         </div>
      </div> 
      </>
   
  )
}

export default AdminHeader
