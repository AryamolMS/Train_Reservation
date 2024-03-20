import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Check() {

   
  return (
    <>
     <div className="d-flex justify-content-center align-items-center">
       
            <form className='Card shadow mt-5' style={{width:'500px',height:'300px'}}>
            <h1 className='text-center text-secondary'>Check Availability</h1>
                <div className='mt-4'>
                </div>
                <div className='mt-5 ms-5' >
                    <select name="" id="" className='w-75' >
                        <option value="">Select</option>
                        <option value="ac">AC</option>
                        
                        <option value="nonac">NON AC</option>
                        <option value="sleeper">SLEEPER</option>
                    </select>
                </div>
                <div className='mt-5 ms-5'>
                    <button className='btn btn-danger w-50' style={{fontSize:'20px',fontWeight:'lighter',marginLeft:'70px'}} >check</button>
                </div>
            </form>
    </div> 
    <div className='d-flex justify-content-center align-items-center mt-5'>
  <div className='Card shadow' style={{width:'400px',height:'150px'}}>
    <div className='mb-3 d-flex justify-content-center align-items-center flex-column h-100'>
      <h4 className='mb-4'>10 Seats Available</h4>
        <Link to={'/booknow'}><button className='btn btn-success'>Book</button></Link>    
    </div>
  </div>
</div>

    </>
  )
}

export default Check
