import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'

function SingleSmallCard(props) {
    return (
        <Container className='detail-card'>
            <Row className='card-top'>
                <Col className='card-left'>
                </Col>
                <Col xs={3} className='card-right'>
                    <Row className='card-name'>
                        {props.Name}
                    </Row>
                    <Row className='card-total'>
                        {props.Total}
                    </Row>
                </Col>

            </Row>
            <Row className='card-bottom'>
                <Col xs={4} className='card-bottom-left pe-1 '>
                    {props.Percentage}
                </Col>
                <Col className='card-bottom-right ps-0'>
                    {props.Content}
                </Col>

            </Row>
        </Container>
    )
}

export default SingleSmallCard