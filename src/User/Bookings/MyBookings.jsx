import React from 'react'
import BookingCard from './BookingCard'
import UserHeader from '../../common/Headers/UserHeader'

function MyBookings() {
  return (
    <>
    <UserHeader/>
    <div className='maindiv'> <br /><br /><br />
    <h1 className='text-center mb-3 text-primary'>BOOKING DETAILS</h1>
       <div className='d-flex align-items-center justify-content-center'>
        
          
          <BookingCard/>
    
        
      </div> 
    </div>
    </>
  )
}

export default MyBookings