import React, { useState } from "react";
import { Card, Col } from "react-bootstrap";
import { FaUserFriends } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

import { useNavigate } from "react-router-dom";

function PlaceCard(props) {

    const navigate = useNavigate();

    const handleOnCardClick = () => {
        navigate('/user/placedescription')
    }
    return (
        <Col className="place-card-cover">
            <Card className="place-card-admin" >
                <img
                    className="d-block gallery-image place-image"
                    src={props.Src}
                    alt="place card"
                />


                <Card.Body className="text-box" onClick={handleOnCardClick}>
                    <Card.Body className="text">
                        <Card.Title className="title">{props.Title}</Card.Title>
                        <Card.Text className="city">{props.City}</Card.Text>
                        <Card.Text className="price">{props.Price}</Card.Text>
                        <Card.Text className="createdate">{props.CreateDate}</Card.Text>
                        <Card.Body className="last-row">
                            <Card.Body className="quantity-box">
                                <FaUserFriends className="people-icon" />
                                <Card.Text className="quantity">{props.Quantity}</Card.Text>
                            </Card.Body>
                            <Card.Body className="rating-box">
                                <FaStar className="rating-icon" />
                                <Card.Text className="rating">{props.Rating}</Card.Text>
                            </Card.Body>
                        </Card.Body>
                    </Card.Body>
                </Card.Body>
            </Card>
        </Col>
    );
}

export default PlaceCard;
