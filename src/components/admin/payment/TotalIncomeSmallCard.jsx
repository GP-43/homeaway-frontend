import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SingleSmallCard from './SingleSmallCard';
import { FaMoneyBill } from "react-icons/fa";
import axois from "axios";
const base_url = process.env.REACT_APP_BASE_URL;

function TotalIncomeSmallCard() {
    const Income_Data = [
        {
            Name: "Total",
            Name2: "income",
            Total: "Rs. 9455",
        },

    ];

    const [details, setDetails] = useState({});
    const [count, setCount] = useState();
    useEffect((event) => {
        axois
            .get(`${base_url}/admin/totalIncome`)
            .then((data) => {
                const details = data.data;
                setDetails({ ...details });
                setCount(details[0]?.total_income)
                console.log(count);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);
    return (
        <Container xs={2}>
            <Row className='smallcardcontainer'>
                <Col className='py-2 mt-4 testing-card'>

                    <Col>
                        <div className="totalincomesmallicon card-icon-bg">
                            {<FaMoneyBill className="ms-3 card-icon total-income-card" />}
                        </div>
                    </Col>

                    {Income_Data &&
                        Income_Data.map((i) => (
                            <SingleSmallCard
                                Name={i.Name}
                                Name2={i.Name2}
                                Total={count}
                            />
                        ))}
                </Col>
            </Row>

        </Container>
    )
}

export default TotalIncomeSmallCard