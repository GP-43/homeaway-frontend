import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SingleDetailCard from '../SingleDetailCard';
import { FaUserPlus} from "react-icons/fa";

function NewOccupantDetailCard() {
    const NewOccupant_Data = [
        {
            Src: <FaUserPlus/>,
            Name: "Today New Occupants",
            Total: "+91",
            Content: "just updated",
        },

    ];
    return (
        <Container xs={5}>
            <Row className='card-container'>
                <Col className='p-2 mt-4 testing-card'>
                    
                    <dev className="new-occupant-icon card-icon-bg">
                        {<FaUserPlus className="ms-3 card-icon new-occupant-card" />}
                    </dev>

                    {NewOccupant_Data &&
                        NewOccupant_Data.map((i) => (
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

export default NewOccupantDetailCard