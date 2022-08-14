import React from 'react';
import { Col, Row } from 'react-bootstrap';
import ClientCard from './ClientCard';
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
          <ClientCard/>
      </Row>
    </Col>
  )
}

export default Content