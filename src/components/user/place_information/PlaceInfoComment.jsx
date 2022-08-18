import React from 'react';
import {Row, Col} from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

function PlaceInfoComment() {
    return (
        <Row>
            <Col xs={12} className='px-0'>
                <h3>Ratings & Comments</h3>

                <Card className='place-description-details'>
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of the card's content.
                        </Card.Text>
                        <Card.Link href="#">Card Link</Card.Link>
                        <Card.Link href="#">Another Link</Card.Link>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of the card's content.
                        </Card.Text>
                        <Card.Link href="#">Card Link</Card.Link>
                        <Card.Link href="#">Another Link</Card.Link>
                    </Card.Body>
                </Card>
            </Col>

        </Row>
    );
}

export default PlaceInfoComment;
