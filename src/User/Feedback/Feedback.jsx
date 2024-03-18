import React from 'react'
import { useState } from 'react';
import Collapse from 'react-bootstrap/Collapse';
import { StarOutlined } from '@ant-design/icons';

function Feedback() {
    const [open, setOpen] = useState(false);
    
  return (
    <>
     <div className='mt-5'>
     <h4
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        Add your Feedback
      </h4>
      <div>
        <Collapse in={open} dimension="width" className='mt-3 mb-5'>
          <div id="example-collapse-text">
          <div className='mb-2 fs-5'>
            <StarOutlined />
          </div>
            <textarea name="" id="" cols="30" rows="5"></textarea>
            <button className='btn btn-success ms-4 mt-2'>Submit</button>
          </div>
        </Collapse>
      </div>
    </div> 
    </>
  )
}

export default Feedback
