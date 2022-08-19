import React, {useState} from "react";
import {Card, Col, Row} from "react-bootstrap";

function FilterSection() {
    
    return (
        <Row className='mx-0 filter-section bg-transparent'>
            <Col className='bg-white filter-section-ac pb-1 pt-3 w-100' lg={4} md={6}>
                <Card className="bg-white filter-card mb-1">
                    <Card.Body className='filter-card-body py-0'>
                        {/*<Card.Title>Card Title</Card.Title>*/}
                        {/*<Card.Subtitle className="mb-0 text-filter">Features</Card.Subtitle>*/}
                        <Card.Text className='radio-button-section w-70'>
                            <Row className='filter-check-box px-3'>
                                <Col className='checkbox-col py-md-1 py-2' md={4} xs={6} >
                                    <input
                                        type="checkbox"
                                        //className="filter-radio-button"
                                        id="internet" name="internet"
                                        value="internet"
                                    />
                                    <label className="radio-label">Internet</label>
                                </Col>
                                <Col className='checkbox-col py-md-1 py-2' md={4} xs={6}>
                                    <input
                                        type="checkbox"
                                        className="filter-radio-button"
                                        id="parking" name="parking"
                                        value="parking"
                                    />
                                    <label className="radio-label">Parking</label>
                                </Col>
                                <Col className='checkbox-col py-md-1 py-2' md={4} xs={6}>
                                    <input
                                        type="checkbox"
                                        className="filter-radio-button"
                                        id="silent_area" name="silent_area"
                                        value="silent_area"
                                    />
                                    <label className="radio-label">Silent Area</label>
                                </Col>
                            {/*</Row>*/}

                            {/*<Row className='filter-check-box'>*/}
                                <Col className='checkbox-col py-md-1 py-2' md={4} xs={6}>
                                    <input
                                    type="checkbox"
                                    //className="filter-radio-button"
                                    id="acNoNeed"
                                    name="acType"
                                    value="acNoNeed"
                                    />
                                    <label className="radio-label">AC</label>
                                </Col>
                                <Col className='checkbox-col py-md-1 py-2' md={4} xs={6}>
                                    <input
                                    type="checkbox"
                                    className="filter-radio-button"
                                    id="foodNeed"
                                    name="foodNeed"
                                    value="foodNeed"
                                    />
                                    <label className="radio-label">Can buy food</label>
                                </Col>
                                <Col className='checkbox-col py-md-1 py-2' md={4} xs={6}>
                                    <input
                                    type="checkbox"
                                    className="filter-radio-button"
                                    id="washrooms" name="washrooms"
                                    value="washrooms"
                                    />
                                    <label className="radio-label">Washroom</label>
                                </Col>
                            </Row>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    );
}

export default FilterSection;