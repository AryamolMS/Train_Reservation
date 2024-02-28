import React from 'react'
import './home.css'
import Header from '../Headers/Header'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
     <div className='home'>
     <div className='header p-2'>
        <Link to={'/login'} style={{textDecoration:'none',fontWeight:'600',fontSize:'20px'}}><button className='btn text-danger'>Login</button></Link>
     </div>
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      <div className='homecard Card shadow d-flex align-items-center justify-content-center'>
        <div className='search Card shadow d-flex align-items-center justify-content-center'>
            <input type="text" placeholder='From' className='input rounded me-5'/>
            <input type="text" placeholder='To' className='input rounded me-5'/>
            <input type="date" className='input' />
            <button className='btn btn-light ms-5 w-25'>Search</button>
        </div>
      </div>
    </div> 
    </>
  )
}

export default Home
