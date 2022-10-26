import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import ProgressBar from './ProgressBar';
import { FaCircle } from "react-icons/fa";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import axios from 'axios';
const base_url = process.env.REACT_APP_BASE_URL;

function Earning() {
    const percentage = 66;

    const [details, setDetails] = useState({});
    const [count, setCount] = useState();
    useEffect((event) => {
        axios
            .get(`${base_url}/admin/totalIncome`)
            .then((data) => {
                const details = data.data;
                setDetails({ ...details });
                setCount(details[0]?.total_profit)
                console.log(count);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <Col className='transaction'>
            <Row className='mx-0 search-part mt-4 pt-4 '>
                <Col className='ps-4 transaction-heading'>
                    <Row>
                        Earnings
                    </Row>
                    <Row>
                        <Col className='earn ps-0 ms-0'>
                            Rs. {count}
                        </Col>
                    </Row>
                    <Row className='py-1 px-0'>
                        <ProgressBar progress='60' />
                    </Row>
                    <Row className='week-heading'>
                        Summary
                    </Row>
                    <Row>
                        <Col className='content-progress'>
                            <Row className='py-3'>
                                <Col className='other-circle' xs={1}>
                                    <FaCircle />
                                </Col>
                                <Col xs={7}>
                                    Total Transaction Amount
                                </Col>
                                <Col xs={2}>
                                    67%
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
                                    33%
                                </Col>

                            </Row>
                        </Col>
                        <Col xs={4}>
                            <CircularProgressbar className='p-3 cicle-graph' value={percentage} styles={buildStyles({ pathColor: "#0EFA5E", trailColor: "#DFFF17" })} />
                        </Col>
                    </Row>

                </Col>



            </Row>


        </Col>
    )
}

export default Earning