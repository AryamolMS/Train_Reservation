import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { checkavailabilityApi } from '../../services/allAPI';
import BookNow from '../Bookings/BookNow';
import Swal from 'sweetalert2';

function Check() {
  const [selectedClass, setSelectedClass] = useState('');
  const [seatsAvailable, setSeatsAvailable] = useState(null);
  const { id } = useParams();

  const handleCheckAvailability = async () => {
    const reqHeader = {
      "Content-Type": "application/json",
    };
    try {
      const result = await checkavailabilityApi(id, { "type": selectedClass }, reqHeader);
      if (result.status >= 200 && result.status < 300) {
        setSeatsAvailable(result.data.available_seats);
      } else {
        Swal.fire({
          title: "No seats available",
          icon: "warning"
        });
      }
    } catch (error) {
      console.error('Error checking seat availability:', error);
    }
  };

  return (
    <>
      <div className="d-flex justify-content-center align-items-center">
        <div className='Card shadow mt-5' style={{ width: '500px', height: '300px' }}>
          <h1 className='text-center text-secondary'>Check Availability</h1>
          <div className='mt-4'></div>
          <div className='mt-5 ms-5'>
            <select name="class" id="class" className='w-75' onChange={(e) => setSelectedClass(e.target.value)}>
              <option value="">Select Class</option>
              <option value="AC">AC</option>
              <option value="Non AC">NON AC</option>
              <option value="Sleeper">SLEEPER</option>
            </select>
          </div>
          <div className='mt-5 ms-5'>
            <button className='btn btn-danger w-50' style={{ fontSize: '20px', fontWeight: 'lighter', marginLeft: '70px' }} onClick={handleCheckAvailability}>Check</button>
          </div>
        </div>
      </div>

      {seatsAvailable !== null && (
        <div className='d-flex justify-content-center align-items-center mt-5'>
          <div className='Card shadow' style={{ width: '400px', height: '150px' }}>
            <div className='mb-3 d-flex justify-content-center align-items-center flex-column h-100'>
              <h4 className='mb-4'>{seatsAvailable} Seats Available</h4>
              <BookNow train_id={id} type={selectedClass} totalSeats={seatsAvailable} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Check;
