import React, {useState, useEffect} from "react";
import {Card, Col} from "react-bootstrap";
import {FaUserFriends} from "react-icons/fa";
import {FaStar} from "react-icons/fa";
import {FaRegHeart} from "react-icons/fa";
import {FaHeart} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
//import axois from "axios";
const base_url = process.env.REACT_APP_BASE_URL;

// const viewDetails = (id) => {
//     axois
//       .put(`${base_url}/user/placedescription/` + id)
//       .then(() => {
//         console.log("Work");
//         // const detail = data.data;
//         // setDetails(detail);
//         //setoccupantData(false)
//       })
//       .catch((error) => {
//         console.log(error);
//       });
// };

function PlaceCard(props) {
    
    const [show, setShow] = useState(true);

    const navigate = useNavigate();

    const handleOnCardClick = (id) => {
        navigate(`/user/placedescription`+ id)
    }
    return (
        <Col className="place-card-cover">
            <Card className="place-card" >
                <img
                    className="d-block gallery-image place-image"
                    src={props.src}
                    alt="place card"
                />
                {show ? (
                    <button className="button" onClick={() => setShow(false)}>
                        <FaRegHeart className="heart-icon"/>
                    </button>
                ) : (
                    <button className="button" onClick={() => setShow(true)}>
                        <FaHeart className="heart-icon"/>
                    </button>
                )}

                <Card.Body className="text-box" onClick={handleOnCardClick}>
                    <Card.Body className="text">
                        <Card.Title className="title">{props.title}</Card.Title>
                        <Card.Text className="city">{props.city}</Card.Text>
                        <Card.Text className="price">{props.price}</Card.Text>
                        <Card.Body className="last-row">
                            <Card.Body className="quantity-box">
                                <FaUserFriends className="people-icon"/>
                                <Card.Text className="quantity">{props.quantity}</Card.Text>
                            </Card.Body>
                            <Card.Body className="rating-box">
                                <FaStar className="rating-icon"/>
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
