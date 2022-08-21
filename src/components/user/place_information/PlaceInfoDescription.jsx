import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

function PlaceInfoDescription() {
    return (
        <Row>
            <Col xs={12} className='px-0'>
                <h3>Description</h3>

                <Card className='place-information-description'>
                    <Card.Body>
                        <Card.Text>
                            Silent Area that covered by a wall. Can buy foods infront of the shop. Two vehicles can
                            park at same time. Safety is 100% sure. Don't make much noise. Book and enjoy the place.
                        </Card.Text>
                    </Card.Body>
                </Card>

            </Col>

        </Row>

    );
}

export default PlaceInfoDescription;
