import React from "react";
import { useState } from 'react';
import { Col, Container, Row, Form } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import AddNewRentFeatureSelection from "../../../components/user/add_new_place/AddNewRentFeatureSelection";
import ProgressBar from "../../../components/user/add_new_place/ProgressBar";
import AddNewRent from "../../../components/user/add_new_rening/AddNewRent";
import AddNewRentSheduleSelection from "../../../components/user/add_new_place/AddNewRentSheduleSelection";

function AddNewPlace() {
    
    const [addNewPlaceFormFirstNext, setaddNewPlaceFormFirstNext] = useState(false);
    const firstNextClick = () => {
        setaddNewPlaceFormFirstNext(!addNewPlaceFormFirstNext);
    }

    const [addNewPlaceFormSecondNext, setaddNewPlaceFormSecondNext] = useState(false);
    const secondNextClick = () => {
        setaddNewPlaceFormSecondNext(!addNewPlaceFormSecondNext);
    }

    const [addNewPlaceFormThirdNext, setaddNewPlaceFormThirdNext] = useState(false);
    const thirdNextClick = () => {
        setaddNewPlaceFormThirdNext(!addNewPlaceFormThirdNext);
    }


    const [addNewPlaceFormFirstBack, setaddNewPlaceFormFirstBack] = useState(false);
    const firstBackClick = () => {
        setaddNewPlaceFormFirstBack(!addNewPlaceFormFirstBack);
        setaddNewPlaceFormFirstNext(!addNewPlaceFormFirstNext);

    }


    const [addNewPlaceFormSecondBack, setaddNewPlaceFormSecondBack] = useState(false);
    const secondBackClick = () => {
        setaddNewPlaceFormSecondBack(!addNewPlaceFormSecondBack);
        setaddNewPlaceFormSecondNext(!addNewPlaceFormSecondNext);
    }

    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        setValidated(true);
      };
    

    return (
        <Container className="add-new-rent-container bg-white">

            <ProgressBar FirstNext={addNewPlaceFormFirstNext}
                SecondNext={addNewPlaceFormSecondNext}
                ThirdNext={addNewPlaceFormThirdNext}
                FirstBack={addNewPlaceFormFirstBack}
                SecondBack={addNewPlaceFormSecondBack}
            />
            <Form noValidate validated={validated} onSubmit={handleSubmit}>

            <Row className= {addNewPlaceFormFirstNext && "d-none"} >
                <AddNewRent />
            </Row>
            <Row className={(addNewPlaceFormSecondNext || !addNewPlaceFormFirstNext) && "d-none"}>
                <AddNewRentFeatureSelection />
            </Row>
            {/* <Row>
                <AddNewRentSheduleSelection/>
            </Row> */}
            <Row className={ addNewPlaceFormFirstNext ? "d-none" : "mb-2 add-new-rent-cancel-btn-box"}>
                <Col >
                    <button className="pt-2 pb-2 add-new-rent-next-btn" onClick={firstNextClick} >NEXT</button>
                </Col>
            </Row>
            <Row className={ (addNewPlaceFormFirstNext && !addNewPlaceFormThirdNext && !addNewPlaceFormSecondNext) ? "mb-2 add-new-rent-cancel-btn-box" : "d-none"}>
                <Col >
                    <button className="pt-2 pb-2 add-new-rent-cancel-btn" onClick={firstBackClick} >BACK</button>
                </Col>
                <Col >
                    <button className="pt-2 pb-2 add-new-rent-next-btn" onClick={secondNextClick}>NEXT</button>
                </Col>
            </Row>
            <Row className={ (addNewPlaceFormFirstNext && addNewPlaceFormSecondNext) ? "mb-2 add-new-rent-cancel-btn-box" : "d-none" }>
                <Col >
                    <button className="pt-2 pb-2 add-new-rent-cancel-btn" onClick={secondBackClick} >BACK</button>
                </Col>
                <Col >
                    <button type="submit" className="pt-2 pb-2 add-new-rent-next-btn" onClick={thirdNextClick}>SUBMIT</button>
                </Col>
            </Row>
            </Form>
        </Container>
    )
}

export default AddNewPlace