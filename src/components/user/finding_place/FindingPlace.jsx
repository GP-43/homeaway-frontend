import React from "react";
import {Col, Row} from "react-bootstrap";
import HomeGallery from "./HomeGallery";
import SearchPlace from "./SearchPlace";
import SearchButton from "./SearchButton";

function FindingPlace() {
    const handleonFilterOptions = (receivedFilterOption) =>{
        console.log(receivedFilterOption)
    }
    return (
        <Row className='mb-lg-0 mb-md-5'>
            <Col className='px-0 mb-lg-0 mb-md-5' xs={12}>
                <HomeGallery/>
            </Col>
            <Col xs={11} className="search-place">
                <SearchPlace filterOptions = {handleonFilterOptions}/>
                <SearchButton />
            </Col>
        </Row>
    );
}

export default FindingPlace;