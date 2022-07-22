import React from "react";
import {Col, Row} from "react-bootstrap";
import HomeGallery from "./HomeGallery";
import SearchPlace from "./SearchPlace";
import searchPlace from "./SearchPlace";

function FindingPlace() {
    return (
        <Row>
            <Col className='px-0' xs={12}>
                <HomeGallery/>
            </Col>
            <Col xs={11} className='search-place'>
                <SearchPlace/>
            </Col>
        </Row>
    );
}

export default FindingPlace;