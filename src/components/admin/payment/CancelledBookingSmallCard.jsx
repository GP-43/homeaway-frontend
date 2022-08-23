import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SingleSmallCard from './SingleSmallCard';
import { FaRegBuilding } from "react-icons/fa";

function CancelledBookingSmallCard() {
    const Booking_Data = [
        {
            Name: "No of Cancelled",
            Name2: "Bookings",
            Total: 25,
        },

    ];
    return (
        <Container xs={2}>
            <Row className='smallcardcontainer'>
                <Col className='p-2 mt-4 testing-card'>
                    <Col>
                        <div className="cancelledbookingsmallicon card-icon-bg">
                            {<FaRegBuilding className="ms-3 card-icon cancelled-booking-card" />}
                        </div>
                    </Col>

                    {Booking_Data &&
                        Booking_Data.map((i) => (
                            <SingleSmallCard
                                Name={i.Name}
                                Name2={i.Name2}
                                Total={i.Total}
                            />
                        ))}
                </Col>
            </Row>

        </Container>
    )
}

export default CancelledBookingSmallCard