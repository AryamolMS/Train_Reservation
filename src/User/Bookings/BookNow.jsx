import React from 'react'

function BookNow() {

    
  return (
    <>
     <div className="d-flex">
        <div>
           
        </div>
        <div className='mt-5 ms-6'>
            <form className='Card shadow ' style={{width:'500px',height:'500px',marginLeft:'200px'}}>
                <h1 className='text-center text-secondary mt-3'>Book Your Tickets</h1>
                <div className='mt-3'>
                    <input type="number" placeholder='seat number' className='form-control w-75 ms-5' />
                </div>
                <div className='mt-5 ms-5' >
                    <select name="" id="" className='w-75'>
                        <option value="ac">AC</option>
                        <option value="nonac">NON AC</option>
                        <option value="sleeper">SLEEPER</option>



                    </select>
                </div>
                <div className='mt-5 ms-5'>
                    <button className='btn btn-success ms-3 w-75' style={{fontSize:'20px',fontWeight:'bold'}} >BookNow</button>
                </div>
            </form>
        </div>
    </div> 
    </>
  )
}

export default BookNow
