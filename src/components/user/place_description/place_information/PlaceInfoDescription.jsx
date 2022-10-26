import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { FaEdit } from "react-icons/fa";
import { AiOutlineFileDone } from "react-icons/ai";
import axios from 'axios';

function PlaceInfoDescription(props) {

    const userDetails = JSON.parse(sessionStorage.getItem("accessToken"));
    const userId = userDetails.userId;
    const [profileDetails, setProfileDetails] = useState({});
    const [name, setName] = useState("");

    const toUpdateName = {
        Name: name,
    };

    const handleOnNameSubmit = () => {
        setIsNameDisabled(true);
        //nama witharak wenas karamu
        axios
            .put(
                "http://localhost:4000/renter/update/description/" + userId,
                toUpdateName
            )
            .then(() => {
                console.log("Work");
                fetchProfileDetails();
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const [isNameDisabled, setIsNameDisabled] = useState(true);

    function fetchProfileDetails() {
        // get details
        axios
            .get("http://localhost:4000/renter/select/description/" + userId)
            .then((data) => {
                const profileDetails = data.data;
                setProfileDetails({ ...profileDetails });
                //setProfileDescription(profile)
                console.log("hi", profileDetails[0].? description);

                setName(data.data[0]?.name);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    useEffect((event) => {
        fetchProfileDetails();
    }, []);

    return (
        <Row>
            <Col xs={12} className='px-0'>
                <h3>Description</h3>

                <Card className='place-information-description'>
                    <Card.Body>
                        <Row>
                            <Col className='pb-2'>
                                <FaEdit
                                    className="ms-3 edit-icon profile-button"
                                    onClick={() => setIsNameDisabled(false)}
                                />
                                <AiOutlineFileDone
                                    className=" ms-2 done-icon profile-button"
                                    onClick={handleOnNameSubmit}
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Card.Text>
                                {props.description}

                            </Card.Text>
                        </Row>

                    </Card.Body>
                </Card>

            </Col>

        </Row>

    );
}

export default PlaceInfoDescription;
