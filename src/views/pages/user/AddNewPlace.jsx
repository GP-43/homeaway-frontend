import React from "react";
import { useState } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import AddNewRentFeatureSelection from "../../../components/user/add_new_place/AddNewRentFeatureSelection";
import ProgressBar from "../../../components/user/add_new_place/ProgressBar";
import AddNewRent from "../../../components/user/add_new_rening/AddNewRent";

function AddNewPlace() {
    const [addNewPlaceFormFirst, setaddNewPlaceFormFirst] = useState(false);
    const firstClick = () => {
        setaddNewPlaceFormFirst(true);
    }

    const [addNewPlaceFormSecond, setaddNewPlaceFormSecond] = useState(false);
    const secondClick = () => {
        setaddNewPlaceFormSecond(true);
    }

    const [addNewPlaceFormThird, setaddNewPlaceFormThird] = useState(false);
    const thirdClick = () => {
        setaddNewPlaceFormThird(true);
    }

    const [isNextClicked, setIsNextClicked] = useState(false);

    return (
        <Container className="add-new-rent-container bg-white">

            <ProgressBar First={addNewPlaceFormFirst} Second={addNewPlaceFormSecond} Third={addNewPlaceFormThird} />

            <AddNewRent />

            <Row className="d-block">
                <AddNewRentFeatureSelection />
            </Row>
            <Row className="mb-2 add-new-rent-cancel-btn-box">
                <Col >
                    <button className="pt-2 pb-2 add-new-rent-next-btn" onClick={firstClick} >NEXT</button>
                </Col>
            </Row>
            <Row className="mb-2 add-new-rent-cancel-btn-box">
                <Col >
                    <button className="pt-2 pb-2 add-new-rent-cancel-btn">BACK</button>
                </Col>
                <Col >
                    <button className="pt-2 pb-2 add-new-rent-next-btn" onClick={secondClick}>NEXT</button>
                </Col>
            </Row>
            <Row className="mb-2 add-new-rent-cancel-btn-box">
                <Col >
                    <button className="pt-2 pb-2 add-new-rent-cancel-btn">BACK</button>
                </Col>
                <Col >
                    <button type="submit" className="pt-2 pb-2 add-new-rent-next-btn" onClick={thirdClick}>SUBMIT</button>
                </Col>
            </Row>
        </Container>
    )
}

export default AddNewPlace