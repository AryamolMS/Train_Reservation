import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <>
      <div className='header p-2 d-flex'>
       <Link to={'/stationlogin'} className='ms-auto me-4' style={{textDecoration:'none',color:'black'}}><h5>Admin Login</h5></Link>
       <Link to={'/login'} style={{textDecoration:'none',color:'black'}}><h5>Login</h5></Link>

     </div>
    </>
  )
}

export default Header
