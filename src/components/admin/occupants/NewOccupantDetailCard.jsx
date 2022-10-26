import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SingleDetailCard from '../SingleDetailCard';
import { FaUserPlus } from "react-icons/fa";
import axois from "axios";
const base_url = process.env.REACT_APP_BASE_URL;

function NewOccupantDetailCard() {
    const NewOccupant_Data = [
        {
            Src: <FaUserPlus />,
            Name: "Today New Occupants",
            Total: "+91",
            Content: "just updated",
        },

    ];

    const [details, setDetails] = useState({});
    const [count, setCount] = useState();
    useEffect((event) => {
        axois
            .get(`${base_url}/admin/countNewOccupants`)
            .then((data) => {
                const details = data.data;
                setDetails({ ...details });
                setCount(details[0]?.new_occupant_count)
                console.log(count);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);
    return (
        <Container xs={5}>
            <Row className='card-container'>
                <Col className='p-2 mt-4 testing-card'>

                    <div className="new-occupant-icon card-icon-bg">
                        {<FaUserPlus className="ms-3 card-icon new-occupant-card" />}
                    </div>

                    {NewOccupant_Data &&
                        NewOccupant_Data.map((i) => (
                            <SingleDetailCard
                                key={`{${i.Name}}`}
                                Name={i.Name}
                                Total={count}
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