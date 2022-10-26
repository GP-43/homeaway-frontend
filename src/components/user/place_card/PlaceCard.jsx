import React, { useEffect, useState } from "react";
import { Card, Col } from "react-bootstrap";
import { FaUserFriends } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { useNavigate, Navigate } from "react-router-dom";
import axios from "axios";

function PlaceCard(props) {
  //const userDetails = JSON.parse(sessionStorage.getItem("accessToken"));
  const curruser = JSON.parse(sessionStorage.getItem("currentuserrole"));
  const curruserrole = curruser.isRenter;
  //const userId = userDetails.userId;
  console.log("isren", curruserrole);

  const [rentings, setRentings] = useState([]);
  const [show, setShow] = useState(true);
  const navigate = useNavigate();

  const handleOnCardClick = () => {
    if (curruserrole == false) {
      navigate(`/user/placedescription/${props.placeId}`);
    } else {
      navigate(`/user/myplacedescription/${props.placeId}`);
    }
  };

  return (
    <Col className="place-card-cover">
      <Card className="place-card">
        <img
          className="d-block gallery-image place-image"
          src={props.src}
          alt="place card"
        />
        {show ? (
          <button className="button" onClick={() => setShow(false)}>
            <FaRegHeart className="heart-icon" />
          </button>
        ) : (
          <button className="button" onClick={() => setShow(true)}>
            <FaHeart className="heart-icon" />
          </button>
        )}

        <Card.Body className="text-box" onClick={handleOnCardClick}>
          <Card.Body className="text">
            <Card.Title className="title">{props.title}</Card.Title>
            <Card.Text className="city">{props.city}</Card.Text>
            <Card.Text className="price">{props.price}</Card.Text>
            <Card.Body className="last-row">
              <Card.Body className="quantity-box">
                <FaUserFriends className="people-icon" />
                <Card.Text className="quantity">{props.quantity}</Card.Text>
              </Card.Body>
              <Card.Body className="rating-box">
                <FaStar className="rating-icon" />
                <Card.Text className="rating">{props.rating}</Card.Text>
              </Card.Body>
            </Card.Body>
          </Card.Body>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default PlaceCard;
