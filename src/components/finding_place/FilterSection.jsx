import React, {useState} from "react";
import {Card, Col, Row} from "react-bootstrap";

function FilterSection() {
    
    return (
        <Row className='mx-0 filter-section'>         
            <Col className='bg-white'>
                <Card className="bg-white filter-card">
                    <Card.Body className='py-2 filter-card-body'>
                        {/*<Card.Title>Card Title</Card.Title>*/}
                        <Card.Subtitle className="mb-0 text-filter">AC or None AC</Card.Subtitle>                           
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
            <Col className='bg-white'>
                <Card className="bg-white filter-card">
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
            <Col className='bg-white'>
                <Card className="bg-white filter-card">
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