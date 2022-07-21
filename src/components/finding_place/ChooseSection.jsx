import React, {useState} from "react";
import {Card, Col, Form, Row, Tab, Tabs} from "react-bootstrap";
import GuestsPopup from "./GuestsPopup";
import Button from "react-bootstrap/Button";
import CitySelecting from "./CitySelecting";

function ChooseSection() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <Row className='mx-0 '>
            <Col lg={4} className='bg-white py-2 choose-section-city'>
                <Card className='city-selecting-card mb-2'>
                    <Card.Body className='py-2'>
                        {/*<Card.Title>Card Title</Card.Title>*/}
                        <Card.Subtitle className="mb-0 text-muted">CITY</Card.Subtitle>
                        <CitySelecting/>
                        <Card.Text className='province '>Western Province</Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col lg={4} className='bg-white py-2 choose-section-guests'>
                <Card className='guests-selecting-card mb-2'>
                    <Card.Body className='py-2'>
                        <Card.Subtitle className="mb-0 text-muted">GUESTS</Card.Subtitle>
                        <Form.Control
                            type="number"
                            id="guestsCount"
                            className='guests-count'
                            placeholder='Only me'
                        />
                        <button className='add-guests m-0 p-0' onClick={handleShow} disabled={false}>
                           + Add guests
                        </button>
                        <GuestsPopup
                            show={show}
                            handleClose={handleClose}
                        />

                    </Card.Body>
                </Card>

            </Col>
            <Col lg={4} className='bg-white py-2 choose-section-date'>
                <Card className='date-selecting-card mb-2'>
                    <Card.Body className='py-2'>
                        <Card.Subtitle className="mb-0 text-muted">DATE</Card.Subtitle>
                        <Row>
                            <Col xs={6}>
                                <Card.Text className='check'>Check in</Card.Text>
                            </Col>
                            <Col xs={6}>
                                <Card.Text className='check'>Check out</Card.Text>
                            </Col>
                        </Row>
                        {/*<Card.Title>Card Title</Card.Title>*/}
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    );
}

export default ChooseSection;