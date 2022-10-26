import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { FaEdit } from "react-icons/fa";
import { AiOutlineFileDone } from "react-icons/ai";
import axios from 'axios';

function PlaceInfoDescription(props) {

    // const userDetails = JSON.parse(sessionStorage.getItem("accessToken"));
    // const userId = userDetails.userId;
    const [description, setDescription] = useState(props.description);
    const [disabled, setDisabled] = useState(true);

    useEffect(() => {
        setDescription(props.description)
    }, [props.description])

    function updateProfileDescription() {
        //Put details

        console.log("NEw desctipsd fsdf :", description, props.placeId);

        axios
            .put("http://localhost:4000/renter/update/description/" + props.placeId, { description })
            .then((data) => {

                console.log("Description updatedddddd");
            })
            .catch((error) => {
                console.log(error);
            });
    }

    // useEffect((event) => {
    //     fetchProfileDetails();
    // }, []);

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
                                    onClick={() => setDisabled((oldDisabled) => !oldDisabled)}
                                />
                                <AiOutlineFileDone
                                    className=" ms-2 done-icon profile-button"
                                    onClick={updateProfileDescription}
                                />
                            </Col>
                        </Row>
                        <Row>
                            <textarea value={description} onChange={(e) => setDescription(e.target.value)} disabled={disabled}>
                            </textarea>

                        </Row>

                    </Card.Body>
                </Card>

            </Col>

        </Row>

    );
}

export default PlaceInfoDescription;
