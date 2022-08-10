import React from 'react';
import { Row, Col } from 'react-bootstrap';


function RowTopProducts(props) {

    return (
        <Row className='row-top-products mx-0 px-0 mb-2 mt-3'>
            <Col className='px-0 ps-3' xs = {1}>
                <img src={props.Src} className = "row-top-products-img" />
            </Col>

           <Col className='px-0 name' xs = {2}>
                <Row>
                    {props.firstName} {props.lastName}
                </Row>
                <Row className='rate'>
                    {props.rate}
                </Row>                
            </Col>

            <Col className='px-0' xs = {3}>
                {props.email}
            </Col>

            <Col className='px-0' xs = {4}>
                {props.joinedDate}
            </Col>

            <Col className='px-0 ' xs = {2}>
                <button className='delete-btn px-3 pb-0'><p>DELETE</p></button>
            </Col>
        </Row>




    )
}

export default RowTopProducts