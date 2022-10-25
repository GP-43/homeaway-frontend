import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SingleDetailCard from '../SingleDetailCard';
import { FaRegAddressCard } from "react-icons/fa";
import axois from "axios";
const base_url = process.env.REACT_APP_BASE_URL;

function AvailablePlaceCard() {
    const AvailablePlaceCard_Data = [
        {
            Src: <FaRegAddressCard />,
            Name: "Available places",
            Total: 250,
            Percentage: "3%",
            Content: "than last week",
        },

    ];

    const [places, setPlaceDetails] = useState({});
    const [placecount, setPlaceCount] = useState();
    useEffect((event) => {
        axois
            .get(`${base_url}/admin/countPlaces`)
            .then((data) => {
                const places = data.data;
                setPlaceDetails({ ...places });
                setPlaceCount(places[0]?.place_count)
                console.log(placecount);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const [details, setBookingDetails] = useState({});
    const [bookingcount, setBookingCount] = useState();
    useEffect((event) => {
        axois
            .get(`${base_url}/admin/countBookings`)
            .then((data) => {
                const details = data.data;
                setBookingDetails({ ...details });
                setBookingCount(details[0]?.booking_count)
                console.log(bookingcount);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <Container xs={5}>
            <Row className='card-container'>
                <Col className='p-2 mt-4 testing-card'>

                    <div className="availplace-icon card-icon-bg">
                        {<FaRegAddressCard className="ms-3 card-icon availplace-card" />}
                    </div>

                    {AvailablePlaceCard_Data &&
                        AvailablePlaceCard_Data.map((i) => (
                            <SingleDetailCard
                                key={`{${i.Name}}`}
                                Name={i.Name}
                                Total={placecount - bookingcount}
                                Src={i.Src}
                                Percentage={i.Percentage}
                                Content={i.Content}
                            />
                        ))}
                </Col>
            </Row>

        </Container>
    )
}

export default AvailablePlaceCard