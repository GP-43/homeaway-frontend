import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import axois from "axios";
const base_url = process.env.REACT_APP_BASE_URL;

function TodayEarning() {

    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;

    const [details, setDetails] = useState({});
    const [count, setCount] = useState();
    useEffect((event) => {
        axois
            .get(`${base_url}/admin/todayEarnings`)
            .then((data) => {
                const details = data.data;
                setDetails({ ...details });
                setCount(details[0]?.today_income)
                console.log("earning", count);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <Col className='earnings mt-4'>
            <Row className='mx-0 my-4 py-4'>
                <Row className='earning-heading'>
                    Today
                </Row>
                <Row className='pb-3 date'>
                    {date}
                </Row>
                <Row className='pt-3 amount'>
                    {count}
                </Row>
            </Row>


        </Col>
    )
}

export default TodayEarning