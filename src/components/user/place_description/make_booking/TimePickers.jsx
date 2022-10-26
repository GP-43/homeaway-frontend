import React, {useEffect, useState} from "react";
import {Row, Col, Container, Form, Button} from "react-bootstrap";
import {getHours} from "date-fns";

function TimePickers(props) {

    const [time, setTime] = useState(new Date());
    // if (props.endTime) {
    //     setTime(props.endTime);
    // }

    const handleOnHourChange = (data) => {
        if (data > 24) {
            const tempTime = new Date();
            tempTime.setHours(24);
            tempTime.setMinutes(0);
            tempTime.setSeconds(0);
            setTime(tempTime);
        } else if (data < 0) {
            const tempTime = new Date();
            tempTime.setHours(0);
            tempTime.setMinutes(0);
            tempTime.setSeconds(0);
            setTime(tempTime);
        } else {
            const tempTime = new Date();
            tempTime.setHours(data);
            tempTime.setMinutes(0);
            tempTime.setSeconds(0);
            setTime(tempTime);
        }
    }

    useEffect(() => {
        props.handleOnTime(time);
    }, [time])

    return (
        <Form className="bg-white time-picker">
            <Row className="bg-white time-base m-2 d-flex">
                <div className="time-box-1 mt-1 p-0">
                    <input type="number" id="hours" className="time-input" placeholder="00" value={time.getHours()}
                           max="12" min="00" onChange={(event) => handleOnHourChange(event.target.value)}></input>
                </div>
                <span className="time-input-span bg-white px-0"><p
                    className="time-input-span-text bg-white">Hours</p></span>

                <div className="time-dots px-3 mx-3"><h4 className="time-dots-h4 bg-white mt-0 px-0">:</h4></div>

                <div className="time-box-1 mt-1 px-0">
                    <input type="number" id="minutes" className="time-input" value="00" max="60" min="00"></input>
                </div>
                <span className="time-input-span bg-white p-0"><p className="time-input-span-text bg-white">Minutes</p></span>

                {/*<div className="time-button-div px-3 mx-3 mt-1">*/}
                {/*    <Button className="time-button am" id="am"><p className="button-name" onClick={(event) => setMeridiem("AM")}>AM</p></Button>*/}
                {/*    <Button className="time-button pm" id="pm"><p className="button-name" onClick={(event) => setMeridiem("PM")}>PM</p></Button>*/}
                {/*</div>*/}
            </Row>
        </Form>
    );
}

export default TimePickers;