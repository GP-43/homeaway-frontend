import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { FaPhoneAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import axios from 'axios';
const base_url = process.env.REACT_APP_BASE_URL;

function UserDetails({ userDetailsObj }) {
    const user_ID = userDetailsObj.UserId;
    console.log(user_ID);
    // const details_array = [
    //     {
    //         Src: p1, firstName: "saman", lastName: "kumara", telenumber: "0112123123", IDno: '992544092V',
    //         Address: 'No. 78, samanala Mawatha, Malabe.'
    //     }
    // ]

    const [bookingdetails, setBookingDetails] = useState({});
    const [userBookingCount, setUserBookingCount] = useState();

    useEffect((event) => {
        axios
            .get("http://localhost:4000/admin/occupantBooking/" + user_ID)
            .then((data) => {
                const bookingdetails = data.data;
                setBookingDetails({ ...bookingdetails });
                setUserBookingCount(bookingdetails[0]?.user_booking_count)
                console.log("hi", bookingdetails);
                console.log("helo", bookingdetails[0]?.user_booking_count);

            })
            .catch((error) => {
                console.log(error);
            });
    }, [user_ID]);

    const [paidbookingdetails, setPaidBookingDetails] = useState({});
    const [userPaidBookingCount, setCancelledUserBookingCount] = useState();

    useEffect((event) => {
        axios
            .get("http://localhost:4000/admin/occupantPaidBooking/" + user_ID)
            .then((data) => {
                const paidbookingdetails = data.data;
                setPaidBookingDetails({ ...paidbookingdetails });
                setCancelledUserBookingCount(paidbookingdetails[0]?.user_paid_booking_count)
                console.log("hi", paidbookingdetails);
                console.log("helo", paidbookingdetails[0]?.user_paid_booking_count);

            })
            .catch((error) => {
                console.log(error);
            });
    }, [user_ID]);


    const [spenddetails, setSpendDetails] = useState({});
    const [userTotalSpend, setUserSpendCount] = useState();

    useEffect((event) => {
        axios
            .get("http://localhost:4000/admin/occupantSpend/" + user_ID)
            .then((data) => {
                const spenddetails = data.data;
                setSpendDetails({ ...spenddetails });
                setUserSpendCount(spenddetails[0]?.user_total_amount)
            })
            .catch((error) => {
                console.log(error);
            });
    }, [user_ID]);

    return (
        <Col className='mt-1'>
            <Row className='image-row'>
                <img src={`${base_url}/renters/` + userDetailsObj.image} className="user-image" alt="renter" />
            </Row>
            <Row className='detail-container'>
                <Row className='name-row'>
                    {userDetailsObj.name}
                </Row>
                <Row className='pb-4 rate-row'>
                    {userDetailsObj.rate}
                </Row>
                <Row className='py-4 values'>
                    <Col xs={5}>
                        <Row className='value'>{userBookingCount}</Row>
                        <Row className='value-name'>Total Bookings</Row>
                    </Col>
                    <Col xs={5}>
                        <Row className='value'>{userPaidBookingCount}</Row>
                        <Row className='value-name'>Paid Bookings</Row>
                    </Col>
                </Row>
                <Row className='py-4 values'>
                    <Col xs={5}>
                        <Row className='value'>{userTotalSpend}</Row>
                        <Row className='value-name'>Total Spend</Row>
                    </Col>
                </Row>

                <Row className='py-4 details'>
                    <Col className='details-parts' xs={5}>
                        <Col xs={1}><FaPhoneAlt className='icon' /></Col>
                        <Col xs={6} className='ps-3 content'>{userDetailsObj.contact}</Col>
                    </Col>
                    <Col className='details-parts' xs={7}>
                        <Col xs={1}><FaEnvelope className='icon' /></Col>
                        <Col xs={6} className='ps-3 content'>{userDetailsObj.email}</Col>
                    </Col>
                </Row>
                <Row className='pt-4 pb-5 details'>
                    <Col className='ms-5 details-parts' xs={12}>
                        <Col xs={1}><FaMapMarkerAlt className='icon' /></Col>
                        <Col xs={10} className='ps-3 content'>{userDetailsObj.location}</Col>
                    </Col>
                </Row>

            </Row>

        </Col>
    )
}

export default UserDetails