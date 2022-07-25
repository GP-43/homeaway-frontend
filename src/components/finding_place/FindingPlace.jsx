import React from "react";
import {Col, Row} from "react-bootstrap";
import HomeGallery from "./HomeGallery";
import SearchPlace from "./SearchPlace";
import SearchButton from "./SearchButton";

function FindingPlace() {
    return (
        <Row>
            <Col className='px-0' xs={12}>
                <HomeGallery/>
            </Col>
            <Col xs={11} className="search-place">
                <SearchPlace />
                <SearchButton/>
            </Col>
        </Row>
    );
}

export default FindingPlace;