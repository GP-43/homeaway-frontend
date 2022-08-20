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
                            Some quick example text to build on the card title and make up the bulk of the card's content. 
                            Its purpose is to describe and reveal a particular person, place, or thing.” So,
                             it can be said that this descriptive text is a text that explains
                              about whether a person or an object is like, whether its form, its properties, its amount and others.
                        </Card.Text>
                    </Card.Body>
                </Card>

            </Col>

        </Row>

    );
}

export default PlaceInfoDescription;
