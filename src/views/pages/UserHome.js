import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import FindingPlace from '../../components/finding_place/FindingPlace.jsx';
import NavBar from '../../components/navbar/NavBar.jsx'

function UserHome() {
    return (
        <Container>
            <Row className='mx-0 px-0'>
                <NavBar/>
            </Row>
            <Row className='mx-0 mt-2'>
                <Col>
                    <FindingPlace/>
                </Col>
            </Row>
        </Container>
    );
}

export default UserHome;
