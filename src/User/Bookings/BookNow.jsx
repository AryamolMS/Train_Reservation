import React from 'react';

function BookNow() {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 ">
     
        <form className='Card shadow' style={{width:'500px', height:'350px'}}>
          <h1 className='text-center text-secondary pt-4'>Book Your Tickets</h1>
          <div className='mt-3'>
            <input type="number" placeholder='Seat Number' className='form-control w-75 mx-auto' />
          </div>
          <div className='mt-5 ms-3'>
          <input type="text" value="Your Amount" className="ms-5 w-75 form-control" readOnly />          </div>
          <div className='mt-5'>
            <button className='btn btn-success w-75 mx-auto ms-5' style={{fontSize:'20px',fontWeight:'bold'}}>Pay Now</button>
          </div>
        </form>
    
    </div> 
  );
}

export default BookNow;