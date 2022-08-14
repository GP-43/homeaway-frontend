import React from "react";
import {Col, Row, Card} from "react-bootstrap";

function ThingsYouNeedCard(props) {
    return (
        <Row className='mx-0'>
            <Card className='px-0 things-you-need-card p-5 ps-5 pe-5 m-2'>
                <Row>
                    <img src={props.Src} className = "image" />
                </Row>

                <Row>
                    <Card.Title className="title pt-2">{props.Title}</Card.Title> 
                </Row>

                <Row>
                    <Card.Text className="text pt-1">{props.Text}</Card.Text> 
                </Row>
                             
            </Card>
        </Row>
    );
}

export default ThingsYouNeedCard;
