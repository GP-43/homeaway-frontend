import React, {useState} from "react";
import {Card, Col, Row} from "react-bootstrap";

function FilterSection() {
    
    return (
        <Row className='mx-0 filter-section bg-transparent'>
            <Col className='bg-white filter-section-ac pb-2 pt-3 w-100' lg={4} md={6}>
                <Card className="bg-white filter-card mb-2">
                    <Card.Body className='py-2 filter-card-body'>
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
            {/*<Col className='bg-white filter-section-food pb-2 pt-3' lg={4} md={6}>*/}
            {/*    <Card className="bg-white filter-card mb-2">*/}
            {/*        <Card.Body className='py-2 filter-card-body'>*/}
            {/*            /!*<Card.Title>Card Title</Card.Title>*!/*/}
            {/*            <Card.Subtitle className="mb-0 text-filter">Food and Bevarage</Card.Subtitle>*/}
            {/*            <Card.Text className='radio-button-section '>*/}
            {/*                <input */}
            {/*                    type="radio" */}
            {/*                    className="filter-radio-button" */}
            {/*                    id="fdNeed" */}
            {/*                    name="foodType" */}
            {/*                    value="fdNeed"*/}
            {/*                />*/}
            {/*                <lable className="radio-lable">Need</lable>*/}
            {/*                <input */}
            {/*                    type="radio" */}
            {/*                    className="filter-radio-button" */}
            {/*                    id="fdNoNeed" */}
            {/*                    name="foodType" */}
            {/*                    value="fdNoNeed"*/}
            {/*                />*/}
            {/*                <lable className="radio-lable">No Need</lable>*/}
            {/*            </Card.Text>*/}
            {/*        </Card.Body>*/}
            {/*    </Card>*/}
            {/*</Col>*/}
            {/*<Col className='bg-white filter-section-internet pb-2 pt-3' lg={4}>*/}
            {/*    <Card className="bg-white filter-card mb-2">*/}
            {/*        <Card.Body className='py-2 filter-card-body'>*/}
            {/*            /!*<Card.Title>Card Title</Card.Title>*!/*/}
            {/*            <Card.Subtitle className="mb-0 text-filter">Internet Access</Card.Subtitle>*/}
            {/*            <Card.Text className='radio-button-section'>*/}
            {/*                <input */}
            {/*                    type="radio" */}
            {/*                    className="filter-radio-button" */}
            {/*                    id="iNeed" name="internetType" */}
            {/*                    value="iNeed"*/}
            {/*                />*/}
            {/*                <lable className="radio-lable">Need</lable>*/}
            {/*                <input */}
            {/*                    type="radio" */}
            {/*                    className="filter-radio-button" */}
            {/*                    id="iNoNeed" */}
            {/*                    name="internetType" */}
            {/*                    value="iNoNeed"*/}
            {/*                />*/}
            {/*                <lable className="radio-lable">No Need</lable>*/}
            {/*            </Card.Text>*/}
            {/*        </Card.Body>*/}
            {/*    </Card>*/}
            {/*</Col>*/}
        </Row>
    );
}

export default FilterSection;