import React from 'react'
import UserHeader from '../../common/Headers/UserHeader'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';

function Feedback() {
    const [open, setOpen] = useState(false);
  return (
    <>
     <UserHeader/>
     <div className='mt-5 ms-5'>
     <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        Feedback
      </Button>
      <div style={{ minHeight: '150px' }}>
        <Collapse in={open} dimension="width" className='mt-3'>
          <div id="example-collapse-text">
            <textarea name="" id="" cols="30" rows="5"></textarea>
            <button className='btn btn-success mb-5 ms-4'>Submit</button>
          </div>
        </Collapse>
      </div>
    </div> 
    </>
  )
}

export default Feedback
