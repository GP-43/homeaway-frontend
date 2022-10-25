import React from 'react';
import { Row, Col } from 'react-bootstrap';

function PlaceInfoReviewsItem(props) {
    return (
        <Col xs={12} className = "place-info-review-item">
            <Row className='mt-3'>
                {/*<Col className='' xs={2}>*/}
                {/*    <img src={props.Image} className="place-info-review-item-img" />*/}
                {/*</Col>*/}
                <Col className='m-auto'>
                    <h6>{props.name} </h6>
                </Col>
            </Row>
            <Row className='mt-2'>
                <p> {props.comment} </p>
            </Row>
        </Col>
    );
}

export default PlaceInfoReviewsItem;
