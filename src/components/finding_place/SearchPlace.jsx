import React from "react";
import {Col, Row} from "react-bootstrap";
import ChooseSection from "./ChooseSection";

function SearchPlace() {
    return (
        <Row>
            <Col className='px-0'>
                <ChooseSection/>
            </Col>
        </Row>
    );
}

export default SearchPlace;