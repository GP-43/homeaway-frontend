import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'

function SingleSmallCard(props) {
    return (
        <Container className='small-cards '>              
            <Row className='card-name'>
                {props.Name}
            </Row>   
            <Row className='card-top'>
                {props.Name2}
            </Row>       

            <Row className='card-bottom'>
                {props.Total}
            </Row>
        </Container>
    )
}

export default SingleSmallCard