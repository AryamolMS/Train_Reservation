import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row, Button } from 'react-bootstrap';
import { getrefundlist, approveRefund } from '../../services/allAPI';


function RefundList() {

    const [data, setData] = useState([]);

    const refund = async () => {
        if (sessionStorage.getItem("token")) {
            const token = sessionStorage.getItem("token");
            const reqHeader = {
                "Content-Type": "application/json",
                "Authorization": `Token ${token}`,
            };
            try {
                const result = await getrefundlist(reqHeader);
                console.log(result.data);
                setData(result.data);
            } catch (error) {
                console.error('Error fetching bookings:', error);
            }
        }
    };

    const handleApprove = async (id) => {
        if (sessionStorage.getItem("token")) {
            const token = sessionStorage.getItem("token");
            const reqHeader = {
                "Content-Type": "application/json",
                "Authorization": `Token ${token}`,
            };
            try {
                await approveRefund(id, reqHeader);
                // Update the status of the approved refund in the state
                setData(prevData => prevData.map(item => item.id === id ? { ...item, status: 'approved' } : item));
            } catch (error) {
                console.error('Error approving refund:', error);
            }
        }
    };

    useEffect(() => {
        refund();
    }, []);

    return (
        <div>
            <Container>
                <h1 className='text-center p-3'>Refund Lists</h1>
                <Row>
                    {data.length > 0 ? data.map((item, index) => (
                        <Col md={2} key={index} className='p-3'>
                            <Card style={{ width: '200px', marginLeft: '0px' }} className='align-items-center'>
                                <Card.Body>
                                    <Card.Text>customer: {item.customer}</Card.Text>
                                    <Card.Text>amount: {item.amount}</Card.Text>
                                    <Card.Text>booking: {item.booking}</Card.Text>
                                    <Card.Text>status: 
                                        <Button 
                                            className='btn btn-light' 
                                            onClick={() => handleApprove(item.id)}
                                            disabled={item.status === 'approved'}
                                        >
                                            {item.status}
                                        </Button>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    )) : <h1>No bookings available</h1>}
                </Row>
            </Container>
        </div>
    );
}

export default RefundList;
