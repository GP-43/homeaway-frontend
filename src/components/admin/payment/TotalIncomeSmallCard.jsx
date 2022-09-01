import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SingleSmallCard from './SingleSmallCard';
import { FaMoneyBill } from "react-icons/fa";

function TotalIncomeSmallCard() {
    const Income_Data = [
        {
            Name: "Total",
            Name2: "income",
            Total: "Rs. 9455",
        },

    ];
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
                                Total={i.Total}
                            />
                        ))}
                </Col>
            </Row>

        </Container>
    )
}

export default TotalIncomeSmallCard