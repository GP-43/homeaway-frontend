import React from "react";
import { useState } from 'react';
import { Container } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import ProgressBar from "../../../components/user/add_new_place/ProgressBar";

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
    return(
        <Container>
            
        <ProgressBar First = {addNewPlaceFormFirst} Second = {addNewPlaceFormSecond} Third = {addNewPlaceFormThird} />
        
            <Button variant="warning" onClick={firstClick}>submit</Button> 
            <Button variant="warning" onClick={secondClick}>submit</Button> 
            <Button variant="warning" onClick={thirdClick}>submit</Button> 
        </Container>
    )
}

export default AddNewPlace