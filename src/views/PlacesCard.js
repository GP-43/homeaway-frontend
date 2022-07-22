import React from 'react';
import {Container, Row} from "react-bootstrap";
import PlaceCard from "../components/PlaceCard";

function PlacesCard() {
    return (
        <Container>
            <Row className='mx-0 mt-2'>
                <PlaceCard/>
            </Row>
        </Container>
    );
}

export default PlacesCard;
