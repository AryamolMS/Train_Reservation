import React from 'react'

function Check() {

    
  return (
    <>
     <div className="d-flex">
        <div>
           
        </div>
        <div className='mt-5 ms-6'>
            <form className='Card shadow ' style={{width:'500px',height:'300px',marginLeft:'200px'}}>
            <h1 className='text-center text-secondary mt-3'>Check Availability</h1>

                <div className='mt-4'>
                </div>
                <div className='mt-5 ms-5' >
                    <select name="" id="" className='w-75'>
                        <option value="ac">AC</option>
                        <option value="ac">NON AC</option>
                        <option value="ac">SLEEPER</option>


                    </select>
                </div>
                <div className='mt-5 ms-5'>
                    <button className='btn btn-danger ms-3 w-60' style={{fontSize:'20px',fontWeight:'lighter'}} >Check</button>
                </div>
            </form>
        </div>
    </div> 
    </>
  )
}

export default Check
