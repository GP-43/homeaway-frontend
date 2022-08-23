import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SingleDetailCard from '../SingleDetailCard';
import { BiUserCircle } from "react-icons/bi";

function RenterDetailCard() {
    const Renter_Data = [
        {
            Src: <BiUserCircle />,
            Name: "Total renters",
            Total: 2300,
            Percentage: "55%",
            Content: "than last week",
        },

    ];
    return (
        <Container xs={5}>
            <Row className='card-container'>
                <Col className='p-2 mt-4 testing-card'>

                    <div className="total-renter-icon card-icon-bg">
                        {<BiUserCircle className="ms-3 card-icon total-renter-card" />}
                    </div>

                    {Renter_Data &&
                        Renter_Data.map((i) => (
                            <SingleDetailCard
                                key={`{${i.Name}}`}
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