import React from 'react'
import UserHeader from '../../common/Headers/UserHeader'
import { Link } from 'react-router-dom'

function Search() {
  return (
    <>
    <UserHeader/>
    <div className='d-flex align-items-center justify-content-center mb-3 mt-3' style={{height:'50px'}}>
            
            <select name="" id="" className='w-25 me-2'>
            <option value="">From</option>
              <option value="">New Delhi</option>
              <option value="">Kolkatha</option>
              <option value="">Banglore</option>
              <option value="">Ernakulam</option>

            </select>
             
            <select name="" id="" className='w-25  me-2'>
            <option value="">To</option>
              <option value="">Ernakulam</option>
              <option value="">Banglore</option>
              <option value="">Kolkatha</option>
              <option value="">New Delhi</option>

            </select>
            <input type="date" name="" id=""  className='me-4'/>
            <Link to={'/search'}><button className='btn btn-danger w-100'>Search</button></Link>

        </div>
    <div className="container-fluid pt-2">
      <p style={{ border: '1px solid', padding: '5px', marginTop: '5px' }}>
        <strong>4</strong> Result Found For <strong>Pune</strong> to <strong>Nagpur</strong> on 12-12-2023
      </p>
      <div className="row">
        <div className="col-6 mt-2">
          <div className="card m">
            <div className="card-header bg-secondary text-white">
              NGP HUMSAFAR EX (22141)
            </div>
            <div className="card-body">
              <div className="row pb-2">
                <div className="col-5">
                  22:00 | PUNE JN | Thu, 30 Nov
                </div>
                <div className="col-2">
                  15:05 hrs
                </div>
                <div className="col-5 text-end">
                  13:05 | NAGPUR | Fri, 01 Dec
                </div>


                
              </div>
              <button className="btn btn-secondary btn-sm" data-bs-toggle="modal" data-bs-target="#myModal">Check Availability</button>
            </div>
          </div>
        </div>
      </div>
    </div>


    
   
   
    </>
  )
}

export default Search
