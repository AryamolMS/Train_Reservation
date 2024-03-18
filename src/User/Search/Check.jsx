import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Check() {
  const [selectedClass, setSelectedClass] = useState('');
  const [seatsAvailable, setSeatsAvailable] = useState(null);

  const handleCheckAvailability = async () => {
    try {
      // Perform API call to check seat availability based on selectedClass and train number
      const response = await fetch(`YOUR_API_ENDPOINT?trainNumber=YOUR_TRAIN_NUMBER&class=${selectedClass}`);
      const data = await response.json();

      // Update seatsAvailable state with the received data
      setSeatsAvailable(data.seatsAvailable);
    } catch (error) {
      console.error('Error checking seat availability:', error);
    }
  };

  return (
    <>
      <div className="d-flex justify-content-center align-items-center">
        <form className='Card shadow mt-5' style={{ width: '500px', height: '300px' }}>
          <h1 className='text-center text-secondary'>Check Availability</h1>
          <div className='mt-4'></div>
          <div className='mt-5 ms-5'>
            <select name="class" id="class" className='w-75' onChange={(e) => setSelectedClass(e.target.value)}>
              <option value="">Select Class</option>
              <option value="ac">AC</option>
              <option value="nonac">NON AC</option>
              <option value="sleeper">SLEEPER</option>
            </select>
          </div>
          <div className='mt-5 ms-5'>
            <button className='btn btn-danger w-50' style={{ fontSize: '20px', fontWeight: 'lighter', marginLeft: '70px' }} onClick={handleCheckAvailability}>Check</button>
          </div>
        </form>
      </div>

      {seatsAvailable !== null && (
        <div className='d-flex justify-content-center align-items-center mt-5'>
          <div className='Card shadow' style={{ width: '400px', height: '150px' }}>
            <div className='mb-3 d-flex justify-content-center align-items-center flex-column h-100'>
              <h4 className='mb-4'>{seatsAvailable} Seats Available</h4>
              <Link to={'/booknow'}><button className='btn btn-success'>Book</button></Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Check;
