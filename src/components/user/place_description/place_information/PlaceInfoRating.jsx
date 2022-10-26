import React, {useEffect, useState} from 'react';
import {Row, Col} from 'react-bootstrap';
import {FaStar} from "react-icons/fa";
import ProgressBar from 'react-bootstrap/ProgressBar';
import axios from "axios";

function PlaceInfoRating(props) {

    const [rateDetails, setRateDetails] = useState({});

    useEffect(() => {
        axios.get('http://localhost:4000/addnewrent/rating/' + props.placeId).then((response) => {
            setRateDetails(response.data);
        });
    }, []);

    return (
        <Col>
            <Row className='mb-2'>
                <Col xs={1} className='pe-0'>
                    <FaStar size={50}/>
                </Col>
                <Col className=' mt-3 p-0 ms-4'>
                    <h3>{props.rating}</h3>
                </Col>
            </Row>
            <Row>
                <Col className='rating-number' xs={2}>
                    <h5 className='rating-number-4 ms-md-4'>5</h5>
                </Col>
                <Col>
                    <ProgressBar variant="dark" now={rateDetails.rate5/rateDetails.rateAll*100}/>
                </Col>
            </Row>
            <Row>
                <Col className='rating-number' xs={2}>
                    <h5 className='ms-4'>4</h5>
                </Col>
                <Col>
                    <ProgressBar variant="dark" now={rateDetails.rate4/rateDetails.rateAll*100}/>
                </Col>
            </Row>
            <Row>
                <Col className='rating-number' xs={2}>
                    <h5 className='ms-4'>3</h5>
                </Col>
                <Col>
                    <ProgressBar variant="dark" now={rateDetails.rate3/rateDetails.rateAll*100}/>
                </Col>
            </Row>
            <Row>
                <Col className='rating-number' xs={2}>
                    <h5 className='ms-4'>2</h5>
                </Col>
                <Col>
                    <ProgressBar variant="dark" now={rateDetails.rate2/rateDetails.rateAll*100}/>
                </Col>
            </Row>
            <Row>
                <Col className='rating-number' xs={2}>
                    <h5 className='ms-4'>1</h5>
                </Col>
                <Col>
                    <ProgressBar variant="dark" now={rateDetails.rate1/rateDetails.rateAll*100}/>
                </Col>
            </Row>
        </Col>
    );
}

export default PlaceInfoRating;
