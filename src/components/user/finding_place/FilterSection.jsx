import React, {useState} from "react";
import {Card, Col, Row} from "react-bootstrap";

function FilterSection() {
    
    return (
        <Row className='mx-0 filter-section bg-transparent'>
            <Col className='bg-white filter-section-ac pb-2 pt-3' lg={4} md={6}>
                <Card className="bg-white filter-card mb-2">
                    <Card.Body className='py-2 filter-card-body'>
                        {/*<Card.Title>Card Title</Card.Title>*/}
                        <Card.Subtitle className="mb-0 text-filter">AC</Card.Subtitle>                           
                        <Card.Text className='radio-button-section'>
                                <input 
                                    type="radio" 
                                    className="filter-radio-button" 
                                    id="acNeed" name="acType" 
                                    value="acNeed"
                                />
                                <lable className="radio-lable">Need</lable> 
                                <input 
                                    type="radio" 
                                    className="filter-radio-button" 
                                    id="acNoNeed" 
                                    name="acType" 
                                    value="acNoNeed"
                                />
                                <lable className="radio-lable">No Need</lable>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col className='bg-white filter-section-food pb-2 pt-3' lg={4} md={6}>
                <Card className="bg-white filter-card mb-2">
                    <Card.Body className='py-2 filter-card-body'>
                        {/*<Card.Title>Card Title</Card.Title>*/}
                        <Card.Subtitle className="mb-0 text-filter">Food and Bevarage</Card.Subtitle>
                        <Card.Text className='radio-button-section '>
                            <input 
                                type="radio" 
                                className="filter-radio-button" 
                                id="fdNeed" 
                                name="foodType" 
                                value="fdNeed"
                            />
                            <lable className="radio-lable">Need</lable>
                            <input 
                                type="radio" 
                                className="filter-radio-button" 
                                id="fdNoNeed" 
                                name="foodType" 
                                value="fdNoNeed"
                            />
                            <lable className="radio-lable">No Need</lable>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col className='bg-white filter-section-internet pb-2 pt-3' lg={4}>
                <Card className="bg-white filter-card mb-2">
                    <Card.Body className='py-2 filter-card-body'>
                        {/*<Card.Title>Card Title</Card.Title>*/}
                        <Card.Subtitle className="mb-0 text-filter">Internet Access</Card.Subtitle>
                        <Card.Text className='radio-button-section'>
                            <input 
                                type="radio" 
                                className="filter-radio-button" 
                                id="iNeed" name="internetType" 
                                value="iNeed"
                            />
                            <lable className="radio-lable">Need</lable>
                            <input 
                                type="radio" 
                                className="filter-radio-button" 
                                id="iNoNeed" 
                                name="internetType" 
                                value="iNoNeed"
                            />
                            <lable className="radio-lable">No Need</lable>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    );
}

export default FilterSection;