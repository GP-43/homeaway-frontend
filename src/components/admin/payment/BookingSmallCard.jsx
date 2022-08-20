import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SingleDetailCard from './SingleSmallCard';
import { BiUserCircle } from "react-icons/bi";

function BookingSmallCard() {
    const Occupant_Data = [
        {
            Src: <BiUserCircle />,
            Name: "Total occupants",
            Total: 2300,
            Percentage: "55%",
            Content: "than last week",
        },

    ];
    return (
        <Container xs={3}>
            <Row className='card-container'>
                <Col className='p-2 mt-4 testing-card'>
                    
                    <dev className="occupant-icon card-icon-bg">
                        {<BiUserCircle className="ms-3 card-icon total-occupant-card" />}
                    </dev>

                    {Occupant_Data &&
                        Occupant_Data.map((i) => (
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

export default BookingSmallCard