import React from "react";
import {Card} from "react-bootstrap";

function SheduleCard(props) {
    return (
        <Card className = "shedule-card">
            <Card.Body className="shedule-card-body">
                <Card.Subtitle className="card-place pb-2">{props.Title}</Card.Subtitle>
                <Card.Subtitle className="card-place">{props.Place}</Card.Subtitle>
            </Card.Body>

            <Card.Body className="shedule-card-body">
            <Card.Subtitle className="card-place">{props.From} - {props.To}</Card.Subtitle>
            </Card.Body>
        </Card>
    );
}

export default SheduleCard;