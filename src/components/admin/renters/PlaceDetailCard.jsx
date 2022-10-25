import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SingleDetailCard from '../SingleDetailCard';
import { FaHome } from "react-icons/fa";
import axois from "axios";
const base_url = process.env.REACT_APP_BASE_URL;

function PlaceDetailCard() {
    const Place_Data = [
        {
            Src: <FaHome />,
            Name: "Total places",
            Total: "+391",
            Content: "just updated",
        },

    ];

    const [details, setDetails] = useState({});
    const [count, setCount] = useState();
    useEffect((event) => {
        axois
            .get(`${base_url}/admin/countPlaces`)
            .then((data) => {
                const details = data.data;
                setDetails({ ...details });
                setCount(details[0]?.place_count)
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

                    <div className="place-icon card-icon-bg">
                        {<FaHome className="ms-3 card-icon place-card" />}
                    </div>

                    {Place_Data &&
                        Place_Data.map((i) => (
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

export default PlaceDetailCard