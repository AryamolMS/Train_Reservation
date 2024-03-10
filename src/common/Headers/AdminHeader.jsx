import React from 'react'
import { Link } from 'react-router-dom'
import './Adminheadr.css'
function AdminHeader() {
  return (
    <>
      <>
       <div className='adminheader ms-3 mt-3 Card shadow mb-3 d-flex align-items-center  flex-column'>
         <div className='mt-5 text-light'>
            <Link className='link' to={'/addtrain'}><h5 className='mb-3'><i class="fa-solid fa-train-subway me-2"></i> Add Train</h5></Link>
            <Link className='link' to={'/station'}><h5 className='mb-3'><i class="fa-solid fa-train-subway me-2"></i>Station</h5></Link>
            <Link className='link' to={'/scheduletrain'}><h5 className='mb-3'><i class="fa-solid fa-arrow-right-from-bracket me-2"></i> Schedule Train</h5></Link>
            <Link className='link' to={'/bookings'}><h5 className='mb-3'><i class="fa-solid fa-address-book me-2"></i> User Bookings</h5></Link>
            <Link className='link' to={'/userlist'}><h5 className='mb-3'><i class="fa-solid fa-user me-2"></i> Users</h5></Link>
            <Link className='link' to={'/'}><h5 className='mb-3'><i class="fa-solid fa-right-from-bracket me-2"></i> LogOut</h5></Link>

         </div>
      </div> 
      </>
    </>
  )
}

export default AdminHeader
