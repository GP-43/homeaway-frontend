import React, {useState} from "react";
import {Row, Col, Container, Form, Button} from "react-bootstrap";

function TimePickers() {
    
    return (
            <Form className="bg-white time-picker">
                <Row className="bg-white time-base m-2 d-flex">
                    <div className="time-box-1 mt-1 p-0">
                        <input type="text" id="hours" className="time-input" placeholder="00"></input>
                    </div>
                    <span className="time-input-span bg-white px-0"><p className="time-input-span-text bg-white">Hours</p></span>
                        
                    <div className="time-dots px-3 mx-3"><h4 className="time-dots-h4 bg-white py-2 px-0">:</h4></div> 

                    <div className="time-box-1 mt-1 px-0">
                        <input type="text" id="minutes" className="time-input" placeholder="00"></input>
                    </div>
                    <span className="time-input-span bg-white p-0"><p className="time-input-span-text bg-white">Minutes</p></span>
                       
                    <div className="time-button-div px-3 mx-3 mt-1">
                        <Button className="time-button am" id="am"><p className="button-name">AM</p></Button>
                        <Button className="time-button pm" id="pm"><p className="button-name">PM</p></Button>
                    </div>                 
                </Row>
            </Form>         
    );
}

export default TimePickers;