import React from "react";
import {Row, Col, Container, Form, Button} from "react-bootstrap";

function TimePicker() {
    return (
        <Container className="bg-white time-picker-container">
            
            <Form className="">
                <Row className="bg-white time-grid-container">
                    <div className="bg-white time-grid-item item1">
                        <input type="text" id="hours" className="time-selection"></input>
                    </div>
                    
                    <div className="bg-white time-grid-item item1">
                        <input type="text" id="minutes" className="time-selection"></input>
                    </div>
                    <div className="bg-white time-grid-item item2 pe-0">
                        <Button className="time-button button-am me-1">AM</Button>
                        <Button className="time-button button-pm me-1">PM</Button>
                    </div>    
                
                    <div className="bg-white time-grid-item item3 item3-h6">
                        Hours 
                    </div>
                    <div className="bg-white time-grid-item item3 item3-h6">
                        Minutes
                    </div>
                </Row>
            </Form>
            
        </Container>
    );
}

export default TimePicker;