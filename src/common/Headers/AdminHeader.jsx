import React from 'react'
import { Link } from 'react-router-dom'
import './Adminheadr.css'


function AdminHeader() {
  const [isAuthtken,setIsAuthtoken] = use(true)

  const logeout = ()=>{
    sessionStorage.removeItem("token")
    sessionStorage.removeItem("existinguser")
    setIsAuthtoken(false)
    navigate('/')
   
  }
  return (
    
      <>
       <div className='adminheader ms-3 mt-3 Card shadow mb-3 d-flex align-items-center  flex-column'>
         <div className='mt-5 text-light'>
            <Link className='link' to={'/addtrain'}><h5 className='mb-3'><i class="fa-solid fa-train-subway me-2"></i> Add Train</h5></Link>
            <Link className='link' to={'/stationlogin'}><h5 className='mb-3'><i class="fa-solid fa-right-from-bracket me-2"></i> Login</h5></Link>
            <Link className='link' to={'/station'}><h5 className='mb-3'><i class="fa-solid fa-train-subway me-2"></i>Station</h5></Link>
            <Link className='link' to={'/displaytrain'}><h5 className='mb-3'><i class="fa-solid fa-arrow-right-from-bracket me-2"></i> Scheduled Train</h5></Link>
            <Link className='link' to={'/'}><h5 className='mb-3'><i class="fa-solid fa-right-from-bracket me-2" onClick={logeout}></i> LogOut</h5></Link>

         </div>
      </div> 
      </>
   
  )
}

export default AdminHeader
