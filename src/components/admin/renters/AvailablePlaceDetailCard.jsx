import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SingleDetailCard from '../SingleDetailCard';
import { FaRegAddressCard } from "react-icons/fa";

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
    return (
        <Container xs={5}>
            <Row className='card-container'>
                <Col className='p-2 mt-4 testing-card'>
                    
                    <dev className="availplace-icon card-icon-bg">
                        {<FaRegAddressCard className="ms-3 card-icon availplace-card" />}
                    </dev>

                    {AvailablePlaceCard_Data &&
                        AvailablePlaceCard_Data.map((i) => (
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

export default AvailablePlaceCard