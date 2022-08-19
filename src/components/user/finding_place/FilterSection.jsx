import React, {useState} from "react";
import {Card, Col, Row} from "react-bootstrap";

function FilterSection() {
    
    return (
        <Row className='mx-0 filter-section bg-transparent'>
            <Col className='bg-white filter-section-ac pb-1 pt-3 w-100' lg={4} md={6}>
                <Card className="bg-white filter-card mb-1">
                    <Card.Body className='py-1 filter-card-body'>
                        {/*<Card.Title>Card Title</Card.Title>*/}
                        {/*<Card.Subtitle className="mb-0 text-filter">Features</Card.Subtitle>*/}
                        <Card.Text className='radio-button-section w-70'>
                            <Row className='filter-check-box'>
                                <Col className='chechbox-col'>
                                    <input
                                        type="checkbox"
                                        //className="filter-radio-button"
                                        id="internet" name="internet"
                                        value="internet"
                                    />
                                    <lable className="radio-lable">Internet</lable>
                                </Col>
                                <Col className='chechbox-col'>
                                    <input
                                        type="checkbox"
                                        className="filter-radio-button"
                                        id="parking" name="parking"
                                        value="parking"
                                    />
                                    <lable className="radio-lable">Parking</lable>
                                </Col>
                                <Col>
                                    <input
                                        type="checkbox"
                                        className="filter-radio-button"
                                        id="silent_area" name="silent_area"
                                        value="silent_area"
                                    />
                                    <lable className="radio-lable">Silent Area</lable>
                                </Col>
                            </Row>
                            <br/>
                            <Row className='filter-check-box'>
                                <Col className='chechbox-col'>
                                    <input
                                    type="checkbox"
                                    //className="filter-radio-button"
                                    id="acNoNeed"
                                    name="acType"
                                    value="acNoNeed"
                                    />
                                    <lable className="radio-lable">AC</lable>
                                </Col>
                                <Col className='chechbox-col'>
                                    <input
                                    type="checkbox"
                                    className="filter-radio-button"
                                    id="foodNeed"
                                    name="foodNeed"
                                    value="foodNeed"
                                    />
                                    <lable className="radio-lable">Can buy food</lable>
                                </Col>
                                <Col className='chechbox-col'>
                                    <input
                                    type="checkbox"
                                    className="filter-radio-button"
                                    id="washrooms" name="washrooms"
                                    value="washrooms"
                                    />
                                    <lable className="radio-lable">Washroom</lable>
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