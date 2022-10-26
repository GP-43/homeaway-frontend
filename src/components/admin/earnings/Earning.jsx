import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import { FaCircle } from "react-icons/fa";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import axios from 'axios';
const base_url = process.env.REACT_APP_BASE_URL;

function Earning() {
    const [incomeDetails, setIncomeDetails] = useState({});
    const [totalIncome, setIncome] = useState();
    useEffect((event) => {
        axios
            .get(`${base_url}/admin/totalIncome`)
            .then((data) => {
                const incomeDetails = data.data;
                setIncomeDetails({ ...incomeDetails });
                setIncome(incomeDetails[0]?.total_profit)
                console.log(totalIncome);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const [details, setDetails] = useState({});
    const [count, setCount] = useState();
    useEffect((event) => {
        axios
            .get(`${base_url}/admin/totalPayment`)
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

    const percentage = (count - totalIncome) * 100 / count;

    return (
        <Col className='transaction'>
            <Row className='mx-0 search-part mt-4 pt-3 '>
                <Col className='ps-4 transaction-heading'>
                    <Row>
                        Earnings
                    </Row>
                    <Row>
                        <Col className='earn ps-0 ms-0'>
                            Rs. {totalIncome}
                        </Col>
                    </Row>
                    <Row className='pt-4 week-heading'>
                        Summary
                    </Row>
                    <Row>
                        <Col className='content-progress'>
                            <Row className='py-2'>
                                <Col className='other-circle' xs={1}>
                                    <FaCircle />
                                </Col>
                                <Col xs={7}>
                                    Total Transaction Amount
                                </Col>
                                <Col xs={2}>
                                    {percentage}%
                                </Col>

                            </Row>
                            <Row className='py-3' >
                                <Col className='our-circle' xs={1}>
                                    <FaCircle />
                                </Col>
                                <Col xs={7}>
                                    Our Amount
                                </Col>
                                <Col xs={2}>
                                    {100 - percentage}%
                                </Col>

                            </Row>
                        </Col>
                        <Col xs={4}>
                            <CircularProgressbar className='px-3 pt-1 cicle-graph' value={percentage} styles={buildStyles({ pathColor: "#0EFA5E", trailColor: "#DFFF17" })} />
                        </Col>
                    </Row>

                </Col>



            </Row>


        </Col>
    )
}

export default Earning