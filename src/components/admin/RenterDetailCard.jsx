import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SingleDetailCard from './SingleDetailCard';
import { FaHouseUser } from "react-icons/fa";

function RenterDetailCard() {
    const Renter_Data = [
        {
            Src: <FaHouseUser />,
            Name: "Rent places",
            Total: 3045,
            Percentage: "1% ",
            Content: "than yesterday",
        },

    ];
    return (
        <Container xs={5}>
            <Row className='card-container'>
                <Col className='p-2 mt-4 testing-card'>

                    <dev className="renter-icon card-icon-bg">
                        {<FaHouseUser className="ms-3 card-icon" />}
                    </dev>

                    {Renter_Data &&
                        Renter_Data.map((i) => (
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

export default RenterDetailCard