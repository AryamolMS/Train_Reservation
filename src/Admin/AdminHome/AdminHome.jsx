import React from 'react'
import AdminHeader from '../../common/Headers/AdminHeader'
import './adminhome.css'
import { PieChart } from '@mui/x-charts/PieChart';
import { BarChart } from '@mui/x-charts/BarChart';

function AdminHome() {
  return (
    <>
      <div className='d-flex'>
       <div className='adminhead'>
          <AdminHeader/>
       </div>
       <div className='dashboard'>
          <div className='head mt-5 ms-5 p-2 text-light'>
            <h1 className='ms-3'>WELCOME ADMIN</h1>
          </div>
          <div className='mt-5 d-flex'>
            <div className='piechart mt-5'>
              <PieChart
                series={[
                  {
                    data: [
                      { id: 0, value: 10, label: 'Cancelled' },
                      { id: 1, value: 15, label: 'Available' },
                      { id: 2, value: 20, label: 'Booked' },
                    ],
                  },
                ]}
                width={400}
                height={200}
              />
            </div>
            <div className='card2 Card shadow me-5 ms-4'>
                  <h2 className='mt-5 text-center'>Scheduled Trains</h2>
              <BarChart
                series={[
                  { data: [35, 44, 24, 34] },
                  { data: [51, 6, 49, 30] },
                  { data: [15, 25, 30, 50] },
                  { data: [60, 50, 15, 25] },
                ]}
                height={290}
                xAxis={[{ data: ['17/03/2024', '18/03/2024', '19/03/2024', '20/03/2024'], scaleType: 'band' }]}
                margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
              />
            </div>
          </div>
       </div>
    </div>
    </>
  )
}

export default AdminHome
