import React, { useContext, useEffect, useState } from 'react';
import { EditFilled } from '@ant-design/icons';
import Modal from 'react-bootstrap/Modal';
import { edittrainApi } from '../../services/allAPI';
import { edittrainContext } from '../../context/ContextShare';
import Swal from 'sweetalert2';

function EdittrainDetails({ train,setSeatUpdate }) {
  const { edittrain, setedittrain } = useContext(edittrainContext);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const formatDate = (datetimeString) => {
    const date = new Date(datetimeString);
    const formattedDate = date.toISOString().slice(0, 16);
    return formattedDate;
  };

  const [updatedetails, setUpdatedetails] = useState({
    id: train._id,
    train_name: train.train_name,
    train_number: train.train_number,
    source: train.source,
    destination: train.destination,
    departure_time: formatDate(train.departure_time),
    arrival_time: formatDate(train.arrival_time),
    amount_ac: train.amount_ac,
    amount_nonac: train.amount_nonac,
    amount_sleeper: train.amount_sleeper
  });

  

  const handleSubmit = async () => {
    const { id, train_name, train_number, source, destination, departure_time, arrival_time, amount_ac, amount_nonac, amount_sleeper } = updatedetails;

    if ( !train_number || !source || !destination || !departure_time || !arrival_time || !amount_ac || !amount_nonac || !amount_sleeper) {
      Swal.fire({
        title: "Please fill this form!",
        icon: "warning"
      });
    } else {
      const reqBody = new FormData();

      reqBody.append("train_name", train_name);
      reqBody.append("train_number", train_number);
      reqBody.append("source", source);
      reqBody.append("destination", destination);
      reqBody.append("departure_time", departure_time);
      reqBody.append("arrival_time", arrival_time);
      reqBody.append("amount_ac", amount_ac);
      reqBody.append("amount_nonac", amount_nonac);
      reqBody.append("amount_sleeper", amount_sleeper);

      const token = sessionStorage.getItem("token");

      const reqHeader = {
        'Content-Type': 'application/json',
        'Authorization': `Token ${token}`
      };

      try {
        const result = await edittrainApi(id, reqBody, reqHeader);
        console.log(result);
        if (result.status === 200) {
          Swal.fire({
            title: "Successfully Updated!",
            icon: "success"
          });
          setedittrain(result.data);
          setSeatUpdate(result.data.id)
          handleClose();
        } else {
          console.log(result.response.data);
        }
      } catch (error) {
        console.error(error);
        Swal.fire({
          title: "An error occurred. Please try again later!",
          icon: "warning"
        });
      }
    }
  };

  useEffect(() => {
    // You can add any necessary effects here
  }, []);

  return (
    <>
     <EditFilled className='text-success' onClick={handleShow} />
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Update Train Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='mb-3 '>
            <input type="text" placeholder='train_name' className='form-control' value={updatedetails.train_name} onChange={(e) => setUpdatedetails({ ...updatedetails, train_name: e.target.value })} />
          </div>
          <div className='mb-3 '>
            <input type="number" placeholder='train_number' className='form-control' value={updatedetails.train_number} onChange={(e) => setUpdatedetails({ ...updatedetails, train_number: e.target.value })} />
          </div>
          <div className='mb-3 '>
            <input type="text" placeholder='source' className='form-control' value={updatedetails.source} onChange={(e) => setUpdatedetails({ ...updatedetails, source: e.target.value })} />
          </div>
          <div className='mb-3 '>
            <input type="text" placeholder='destination' className='form-control' value={updatedetails.destination} onChange={(e) => setUpdatedetails({ ...updatedetails, destination: e.target.value })} />
          </div>
          <div className='mb-3 '>
            <input type="datetime-local" placeholder='departure_time' className='form-control' value={updatedetails.departure_time} onChange={(e) => setUpdatedetails({ ...updatedetails, departure_time: e.target.value })} />
          </div>
          <div className='mb-3 '>
            <input type="datetime-local" placeholder='arrival_time' className='form-control' value={updatedetails.arrival_time} onChange={(e) => setUpdatedetails({ ...updatedetails, arrival_time: e.target.value })} />
          </div>
          <div className='mb-3 '>
            <input type="number" placeholder='amount_ac' className='form-control' value={updatedetails.amount_ac} onChange={(e) => setUpdatedetails({ ...updatedetails, amount_ac: e.target.value })} />
          </div>
          <div className='mb-3 '>
            <input type="number" placeholder='amount_nonac' className='form-control' value={updatedetails.amount_nonac} onChange={(e) => setUpdatedetails({ ...updatedetails, amount_nonac: e.target.value })} />
          </div>
          <div className='mb-3 '>
            <input type="number" placeholder='amount_sleeper' className='form-control' value={updatedetails.amount_sleeper} onChange={(e) => setUpdatedetails({ ...updatedetails, amount_sleeper: e.target.value })} />
          </div>
          <div className='d-flex justify-content-center'>
            <input type="submit" value="Update" className='bg-success text-light rounded w-50 p-2' style={{border:'none'}} onClick={handleSubmit} />
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default EdittrainDetails;
