import React, {useState} from "react";
import {Card, Col, Row} from "react-bootstrap";

function FilterSection() {
    const [foodType, setFoodType] = useState("no-need");
    const [acType, setAcType] = useState("no-need");
    const [internetType, setInternetType] = useState("no-need")

    return (
        <Row className='mx-0 bg-info'>
            <Col className='bg-white '>
                <Card className="">
                    <Card.Body className='py-2'>
                        {/*<Card.Title>Card Title</Card.Title>*/}
                        <Card.Subtitle className="mb-0 text-muted">AC or None AC</Card.Subtitle>
                            
                        <Card.Text className=''>
                            <input type="radio" value={acType} name="acType" /*checked={acType === "need"}*//>Need
                            <input type="radio" value={acType} name="acType" />No Need
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col className='bg-white'>
                <Card className="">
                    <Card.Body className='py-2'>
                        {/*<Card.Title>Card Title</Card.Title>*/}
                        <Card.Subtitle className="mb-0 text-muted">Food and Bevarage</Card.Subtitle>
                        <Card.Text className='province '>
                            <input type="radio" value={foodType} name="foodType" />Need
                            <input type="radio" value={foodType} name="foodType" />No Need
            
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col className='bg-white'>
                <Card className="">
                    <Card.Body className='py-2'>
                        {/*<Card.Title>Card Title</Card.Title>*/}
                        <Card.Subtitle className="mb-0 text-muted">Internet Sccess</Card.Subtitle>
                        
                        <Card.Text className='province '>
                            <input type="radio" value={internetType} name="internetType" />Need
                            <input type="radio" value={internetType} name="internetType" />No Need
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    );
}

export default FilterSection;