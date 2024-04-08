import React from 'react'
import { useState } from 'react';
import Collapse from 'react-bootstrap/Collapse';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import { submitFeedbackApi } from '../../services/allAPI';
import Swal from 'sweetalert2';


function Feedback({ id }) {
  const [open, setOpen] = useState(false);
  const [feedback, setFeedback] = useState({ rating: 5, comments: "" });
  const [hover, setHover] = useState(-1);
  const labels = {
    1: 'Useless',
    2: 'Poor',
    3: 'Ok',
    4: 'Good',
    5: 'Excellent',
  };
  console.log(feedback);
  const handleSubmit = async () => {

    if (!feedback.comments) {
      Swal.fire({
        title: "Please fill the form completely!",
        icon: "warning"
      });
    }
    else {
      let token = sessionStorage.getItem('token')
      if (!token) {
        Swal.fire({
          title: "Please login!",
          icon: "warning"
        });
      }
      else {
        const reqHeader = {
          "Content-Type": "application/json",
          "Authorization": `Token ${token}`,
        };
        try {
          const result = await submitFeedbackApi(id, feedback, reqHeader)
          console.log(result);
          if (result.status >= 200 && result.status < 300) {
            Swal.fire({
              title: "Feedback added successfully!",
              icon: "success"
            });
            setOpen(false)
          }
          else {
            console.log(result);
            Swal.fire({
              title: (result.response.data.message),
            });
            setOpen(false)
          }
        }
        catch (err) {
          console.log(err);
        }
      }
    }

  }
  function getLabelText(value) {
    return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
  }

  return (
    <>
      <div className='mt-5'>
        <button
          onClick={() => setOpen(!open)}
          aria-controls="example-collapse-text"
          aria-expanded={open}
          className='btn btn-primary'
        >
          Add your Feedback
        </button>
        <div>
          <Collapse in={open} dimension="width" className='mt-3 mb-5'>
            <div id="example-collapse-text">
              <div className='mb-2 fs-5'>
                <Box
                  sx={{
                    width: 200,
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <Rating
                    name="hover-feedback"
                    value={feedback.rating}
                    precision={1}
                    getLabelText={getLabelText}
                    onChange={(event, newValue) => {
                      setFeedback({ ...feedback, rating: newValue });
                    }}
                    onChangeActive={(event, newHover) => {
                      setHover(newHover);
                    }}
                    size="large"
                  />
                  {feedback.rating !== null && (
                    <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : feedback.rating]}</Box>
                  )}
                </Box>
                {/* <StarOutlined /> */}
              </div>
              <textarea name="" id="" cols="30" rows="5" value={feedback.comments} onChange={e => setFeedback({ ...feedback, comments: e.target.value })} placeholder='Your comments..'></textarea>
              <button className='btn btn-success ms-4 mt-2' onClick={handleSubmit}>Submit</button>
            </div>
          </Collapse>
        </div>
      </div>
    </>
  )
}

export default Feedback
