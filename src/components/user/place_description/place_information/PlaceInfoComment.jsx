import React from 'react';
import {Row, Col} from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import PlaceInfoRating from './PlaceInfoRating';
import PlaceInfoReviews from './PlaceInfoReviews';

function PlaceInfoComment(props) {
    return (
        <Row>
            <Col xs={12} className='px-0'>
                <h3>Ratings & Comments</h3>

                <Card className='place-information-description'>
                    <Card.Body>
                        <PlaceInfoRating rating={props.rating}
                                         placeId={props.placeId}
                        />
                        <PlaceInfoReviews
                            placeId = {props.placeId}
                        />
                    </Card.Body>
                </Card>
            </Col>

        </Row>
    );
}

export default PlaceInfoComment;
