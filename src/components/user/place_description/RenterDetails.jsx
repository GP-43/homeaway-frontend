import React from "react";
import { Row, Col, Card, Button } from "react-bootstrap";
import girl1 from "../../../assets/images/renters/girl1.jpg";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

function RenterDetails(props) {

    const handleOnRatePlaceClick = () => {
        props.handleOnRatePlaceClick();
    }

    const ButtonMailto = ({ mailto, label }) => {
        return (
            <Link className="renter-buttons renter-message mb-2 border-0 email py-2 px-4"
                to='#'
                onClick={(e) => {
                    window.location.href = mailto;
                    e.preventDefault();
                }}
            >
                {label}
            </Link>
        );
    }

    return (
        <Card className="renter-card">
            <Card.Body>
                <Row className="renter-row">
                    <Col className="renter-col text-center">
                        <img className="renter-image" src={girl1} alt="girl1" />
                        <Col className="renter-name pt-3">Ms.Senulya Wijewardhane</Col>
                        <Col className="renter-rating d-flex align-items-center justify-content-center">
                            <FaStar className="rating-icon" />
                            &nbsp;4.5
                        </Col>
                    </Col>
                    <Col className="renter-col text-center">
                        <Col className="renter-no d-flex"><p className="renter-no-box bg-white p-2">+94 7* *** *****</p>
                        </Col>
                        {/* <ButtonMailto className="renter-buttons renter-message mb-2 border-0 ">Message Place Owner</ButtonMailto> */}
                        <ButtonMailto label="E-mail Place Owner" mailto="mailto:no-reply@example.com" />
                        <Button className="renter-buttons renter-message border-0 mt-4" onClick={handleOnRatePlaceClick}>Rate
                            The Place</Button>

                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
}

export default RenterDetails;
