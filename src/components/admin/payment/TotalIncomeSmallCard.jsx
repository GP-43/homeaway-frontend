import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SingleSmallCard from './SingleSmallCard';
import { FaMoneyBill } from "react-icons/fa";

function TotalIncomeSmallCard() {
    const Income_Data = [
        {
            Name: "Rent",
            Name2: "places",
            Total: "Rs. 9455",
        },

    ];
    return (
        <Container xs={2}>
            <Row className='smallcardcontainer'>
                <Col className='p-2 mt-4 testing-card'>

                    <Col>
                        <dev className="totalincomesmallicon card-icon-bg">
                            {<FaMoneyBill className="ms-3 card-icon total-income-card" />}
                        </dev>
                    </Col>

                    {Income_Data &&
                        Income_Data.map((i) => (
                            <SingleSmallCard
                                Name={i.Name}
                                Name2={i.Name2}
                                Total={i.Total}
                            />
                        ))}
                </Col>
            </Row>

        </Container>
    )
}

export default TotalIncomeSmallCard