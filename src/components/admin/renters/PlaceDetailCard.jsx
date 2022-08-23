import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SingleDetailCard from '../SingleDetailCard';
import { FaHome } from "react-icons/fa";

function PlaceDetailCard() {
    const Place_Data = [
        {
            Src: <FaHome />,
            Name: "Total places",
            Total: "+391",
            Content: "just updated",
        },

    ];
    return (
        <Container xs={5}>
            <Row className='card-container'>
                <Col className='p-2 mt-4 testing-card'>

                    <div className="place-icon card-icon-bg">
                        {<FaHome className="ms-3 card-icon place-card" />}
                    </div>

                    {Place_Data &&
                        Place_Data.map((i) => (
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

export default PlaceDetailCard