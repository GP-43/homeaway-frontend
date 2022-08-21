import React from 'react';
import {Row, Col} from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

function PlaceInfoTime() {
    return (
        <Row>
            <Col xs={12} className='px-0'>
                <h3>Available times</h3>

                <Card className='place-information-description'>
                    <Card.Body>
                        <Card.Text>

                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>

        </Row>
    );
}

export default PlaceInfoTime;
