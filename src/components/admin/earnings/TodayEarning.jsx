import React from 'react';
import { Row, Col } from 'react-bootstrap';

function TodayEarning() {

    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;

    return (
        <Col className='earnings mt-4'>
            <Row className='mx-0 my-4 py-4'>
                <Row className='earning-heading'>
                    Today
                </Row>
                <Row className='pb-3 date'>
                    {date}
                </Row>
                <Row className='pt-3 amount'>
                    Rs.15,000
                </Row>
            </Row>


        </Col>
    )
}

export default TodayEarning