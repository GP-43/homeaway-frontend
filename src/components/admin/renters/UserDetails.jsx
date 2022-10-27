import React, { useState, useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import { FaPhoneAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import axios from "axios";
const base_url = process.env.REACT_APP_BASE_URL;

function UserDetails({ userDetailsObj }) {
    const user_ID = userDetailsObj.UserId;
    console.log(user_ID);

    //totalBooking

    const [bookingdetails, setBookingDetails] = useState({});
    const [userBookingCount, setUserBookingCount] = useState();

    //const [details, setDetails] = useState({});
    useEffect((event) => {
        axios
            .get("http://localhost:4000/admin/renterBooking/" + user_ID)
            .then((data) => {
                const bookingdetails = data.data;
                setBookingDetails({ ...bookingdetails });
                setUserBookingCount(bookingdetails[0]?.user_booking_count)
                console.log("hi", bookingdetails);
                console.log("hi", userBookingCount);

            })
            .catch((error) => {
                console.log(error);
            });
    }, []);
    // .get(`${base_url}/admin/countUserBookings/` + user_ID)
    // .then((data) => {
    //     const bookingdetails = data.data;
    //     setBookingDetails({ ...bookingdetails });
    //     setUserBookingCount(bookingdetails[0]?.user_booking_count)
    //     console.log(userBookingCount);
    // })
    // .catch((error) => {
    //     console.log(error);
    // });

    //totalIncome

    const [incomedetails, setIncomeDetails] = useState({});
    const [userTotalIncome, setUserTotalIncome] = useState();

    useEffect((event) => {
        axios
            .get(`${base_url}/admin/totalUserIncome/` + user_ID)
            .then((data) => {
                const incomedetails = data.data;
                setIncomeDetails({ ...incomedetails });
                setUserTotalIncome(incomedetails[0]?.user_booking_count)
                console.log(userTotalIncome);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);
    // const details_array = [
    //     {
    //         Src: p1, firstName: "saman", lastName: "kumara", telenumber: "0112123123", IDno: '992544092V',
    //         Address: 'No. 78, samanala Mawatha, Malabe.'
    //     }
    // ]
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
                        <Row className='value'>{userTotalIncome}</Row>
                        <Row className='value-name'>Total Income</Row>
                    </Col>
                </Row>
                <Row className='py-4 values'>
                    <Col xs={5}>
                        <Row className='value'>{userDetailsObj.TotalRecieved}</Row>
                        <Row className='value-name'>Total Recieved</Row>
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