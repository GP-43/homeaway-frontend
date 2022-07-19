import React from 'react';
import {Container, Row} from "react-bootstrap";
import FindingPlace from '../../components/finding_place/FindingPlace.jsx';

function UserHome() {
    return (
        <Container>
            <Row className='mx-0 mt-2'>
                <FindingPlace/>
            </Row>
        </Container>
    );
}

export default UserHome;
