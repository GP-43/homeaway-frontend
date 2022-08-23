import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { FaPhoneAlt } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";

import p1 from "../../../assets/images/admin/occupant/p1.jpg";

function UserDetails() {
    const details_array = [
        {
            Src: p1, firstName: "saman", lastName: "kumara", telenumber: "0112123123", IDno: '992544092V',
            rate: '2', Address: 'No. 78, samanala Mawatha, Malabe.'
        }
    ]
    return (
        <Col className='mt-1'>
            <Row className='image-row'>
                <img className="user-image" src={p1} alt="p1" />
            </Row>
            <Row className='detail-container'>
                <Row className='name-row'>
                    Samadhi Keshika
                </Row>
                <Row className='pb-4 rate-row'>
                    4.3
                </Row>
                <Row className='py-4 bars'>
                    <Col xs={5}>
                        <Row className='progress-bar'>Progress bar here</Row>
                        <Row className='bar-name'>Total Bookings</Row>
                    </Col>
                    <Col xs={5}>
                        <Row className='progress-bar'>Progress bar here</Row>
                        <Row className='bar-name'>Total Bookings</Row>
                    </Col>
                </Row>
                <Row className='py-4 bars'>
                    <Col xs={5}>
                        <Row className='progress-bar'>Progress bar here</Row>
                        <Row className='bar-name'>Total Spend</Row>
                    </Col>
                </Row>

                <Row className='py-4 details'>
                    <Col className='details-parts' xs={6}>
                        <Col xs={1}><FaPhoneAlt className='icon' /></Col>
                        <Col xs={6} className='ps-3 content'>0112123123</Col>
                    </Col>
                    <Col className='details-parts' xs={6}>
                        <Col xs={1}><FaUserAlt className='icon' /></Col>
                        <Col xs={6} className='ps-3 content'>995287662V</Col>
                    </Col>
                </Row>
                <Row className='py-4 details'>
                    <Col className='ms-5 details-parts' xs={12}>
                        <Col xs={1}><FaMapMarkerAlt className='icon' /></Col>
                        <Col xs={10} className='ps-3 content'>No. 78, samanala Mawatha, Malabe.</Col>
                    </Col>
                </Row>

            </Row>

        </Col>
    )
}

export default UserDetails