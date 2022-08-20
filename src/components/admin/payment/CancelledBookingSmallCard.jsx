import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SingleDetailCard from './SingleSmallCard';
import { FaChartBar } from "react-icons/fa";

function CancelledBookingSmallCard() {
    const Booking_Data = [
        {
            Src: <FaChartBar />,
            Name: "Bookings",
            Total: 250,
            Percentage: "3%",
            Content: "than last week",
        },

    ];
    return (
        <Container xs={3}>
            <Row className='card-container'>
                <Col className='p-2 mt-4 testing-card'>
                    
                    <dev className="booking-icon card-icon-bg">
                        {<FaChartBar className="ms-3 card-icon booking-card" />}
                    </dev>

                    {Booking_Data &&
                        Booking_Data.map((i) => (
                            <SingleDetailCard
                                Name={i.Name}
                                Total={i.Total}
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

export default CancelledBookingSmallCard