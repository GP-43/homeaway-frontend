import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

function SheduleCard(props) {
    return (

        <Container className="ps-0">
            <Card className="schedule-card ps-4 pb-2 pe-2 pt-2  mb-3" >

                <Col xs={7} className="m-auto ">
                    <Row className="m-auto schedule-card-text">
                        {props.Title}
                    </Row>
                    <Row className="m-auto schedule-card-text">
                        {props.Place}
                    </Row>
                </Col>
                <Col xs={5} className="m-auto schedule-card-text">
                    {props.From} to {props.To}
                </Col>
            </Card>
        </Container>

    );
}

export default SheduleCard;