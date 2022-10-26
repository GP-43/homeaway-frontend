import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SingleDetailCard from '../SingleDetailCard';
import { BiUserCircle } from "react-icons/bi";
import axois from "axios";
const base_url = process.env.REACT_APP_BASE_URL;

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

    const [details, setDetails] = useState({});
    const [count, setCount] = useState();
    useEffect((event) => {
        axois
            .get(`${base_url}/admin/countRenters`)
            .then((data) => {
                const details = data.data;
                setDetails({ ...details });
                setCount(details[0]?.renter_count)
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

                    <div className="total-renter-icon card-icon-bg">
                        {<BiUserCircle className="ms-3 card-icon total-renter-card" />}
                    </div>

                    {Renter_Data &&
                        Renter_Data.map((i) => (
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

export default RenterDetailCard