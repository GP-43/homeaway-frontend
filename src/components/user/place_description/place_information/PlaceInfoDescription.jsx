import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
const base_url = process.env.REACT_APP_BASE_URL;

function PlaceInfoDescription(placeDetailsObj) {
    return (
        <Row>
            <Col xs={12} className='px-0'>
                <h3>Description</h3>

                <Card className='place-information-description'>
                    <Card.Body>
                        <Card.Text>
                            {placeDetailsObj.description}
                        </Card.Text>
                    </Card.Body>
                </Card>

            </Col>

        </Row>

    );
}

export default PlaceInfoDescription;
