import React from "react";
import { Row, Col } from "react-bootstrap";
import { useState } from 'react';


function AddNewRentDateComponent(props) {

    return (
            <Col className="add-new-rent-date-component-div mx-4 py-3" xs={1} >
                
                    <h4>{props.date}</h4>
                
            </Col>



    )
}

export default AddNewRentDateComponent