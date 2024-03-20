import React, { useEffect, useState } from 'react';
import { getRefundsAPI } from '../../services/allAPI';
import UserHeader from '../../common/Headers/UserHeader';
import { Card, Col, Row } from 'react-bootstrap';

function Refunds() {
  const [refunds, setRefunds] = useState([]);
  console.log(refunds);
  const getRefunds = async () => {
    if (sessionStorage.getItem("token")) {
      const token = sessionStorage.getItem("token");
      const reqHeader = {
        "Content-Type": "application/json",
        "Authorization": `Token ${token}`,
      };
      const result = await getRefundsAPI(reqHeader);
      console.log(result.data);
      setRefunds(result.data);
    }
  };

  useEffect(() => {
    getRefunds()
  }, []);
  return (
    <>
      <UserHeader></UserHeader>
      <div className='maindiv'>
        <h1 className='text-center mt-4 text-warning'>Refund history</h1>
        <Row>
          {refunds?.length > 0 ?
            refunds.map((item, index) => (
              <Col key={index} sm={12} md={6} lg={4} xl={4}> 
              <Card className="shadow p-3 w-100">
              <h2>Booking ID: {item?.booking}</h2>
              <h2>Refund amount: {item?.amount}</h2>
              <h2>Refund status: {item?.status}</h2>
              </Card>
              </Col>
            )) :
            <p>No Refund history</p>
          }
        </Row>
      </div>
    </>
  )
}

export default Refunds