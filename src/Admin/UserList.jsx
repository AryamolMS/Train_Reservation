import React from 'react'
import AdminHeader from '../common/Headers/AdminHeader'

function UserList() {
  return (
    <>
      <div className='d-flex'>
        <div>
            <AdminHeader/>
        </div>
        <div className='userlist mt-5'>
        <table className='table table-bordered text-center rounded'>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Train no</th>
                    <th>Name</th>
                    <th>From</th>
                    <th>To</th>
                    <th>Date</th>
                    <th>Class</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>323</td>
                    <td>Kerala Express</td>
                    <td>Kochi</td>
                    <td>Kasargode</td>
                    <td>23/04/2024</td>
                    <td>3Ac</td>
                    <td><button>Booked</button></td>
                </tr>
                
            </tbody>
        </table>
        </div>
      </div>
    </>
  )
}

export default UserList
