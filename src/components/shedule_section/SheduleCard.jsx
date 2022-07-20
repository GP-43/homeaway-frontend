import React from "react";
import {Card} from "react-bootstrap";

function SheduleCard() {
    return (
        <Card className = "shedule-card">
            <Card.Body className="shedule-card-body">
                <Card.Subtitle className="card-place">Card Subtitle 01</Card.Subtitle>
                <Card.Subtitle className="card-place">Card Subtitle 02</Card.Subtitle>
            </Card.Body>

            <Card.Body className="shedule-card-body">
                <Card.Subtitle className="card-place">time</Card.Subtitle>
            </Card.Body>
        </Card>
    );
}

export default SheduleCard;