import React from 'react';
import {Container, Row} from "react-bootstrap";
import FindingPlace from '../../components/finding_place/FindingPlace.jsx';
import NavBar from '../../components/navbar/NavBar.jsx'

function UserHome() {
    return (
        <Container>
            <Row className='mx-0 mt-2'>
                <NavBar/>
            </Row>
            <Row className='mx-0 mt-2'>
                <FindingPlace/>
            </Row>
        </Container>
    );
}

export default UserHome;
