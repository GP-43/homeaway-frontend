import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs";

function Content() {
  return (
    <Col className='about-section-content' >
      <Row className='line-one '>
        What people say
      </Row >
      <Row className='line-two pb-1'>
        about us.
      </Row>
      <Row className='line-three py-2'>
        Our Clients send bunch of smiles with our services and we love them.
      </Row>
      <Row className='line-four py-2'>
        <Col xs={1} className="">
            {<BsFillArrowLeftCircleFill className="ms-0 ps-0 icon back-icon"  />}
        </Col>
        <Col xs={1}>
            {<BsFillArrowRightCircleFill className="ms-5 icon next-icon"/>}
        </Col>
      </Row>
    </Col>
  )
}

export default Content