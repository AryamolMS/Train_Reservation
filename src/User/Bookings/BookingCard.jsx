import React from 'react'
import './bookingcard.css'

function BookingCard() {
  return (
    <>
     <div className='bookingcard rounded'>
        <table className='table1 table-bordered text-center rounded'>
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
                <tr>
                    <td>2</td>
                    <td>555</td>
                    <td>Mumbai Express</td>
                    <td>Banglore</td>
                    <td>Mumbai</td>
                    <td>2/04/2024</td>
                    <td>2AC</td>
                    <td>Cancelled</td>
                </tr>
            </tbody>
        </table>
    </div> 
    </>
  )
}

export default BookingCard
