import React from "react";
import {Row, Col, Container, Form, Button} from "react-bootstrap";

function TimePicker() {
    return (
        <Container className="bg-white">
            <Col className="mx-0 bg-white">
                <Form>
                <Row className="time-grid-container bg-white">
                    <div className="time-grid-item">
                        <input type="text" id="hours" className="time-selection"></input> : 
                    </div>
                    
                    <div className="time-grid-item">
                        <input type="text" id="minutes" className="time-selection"></input>
                    </div>
                    <div className="time-grid-item">
                        <Button className="time-button">AM</Button>
                        <Button className="time-button">PM</Button>
                    </div>    
                </Row>
                <h6>Minutes</h6>
                    <h6>Hours</h6>
                </Form>
            </Col>
        </Container>
    );
}

export default TimePicker;