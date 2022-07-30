import React, {useState} from "react";
import {Card, Col, Form, Row} from "react-bootstrap";
import GuestsPopup from "./GuestsPopup";
import CitySelecting from "./CitySelecting";
import {GoCalendar} from 'react-icons/go'
import CalendarPopup from "./CalendarPopup";

function ChooseSection() {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    const [show, setShow] = useState(false);
    const [isAdGuestButtonDisable, setIsAdGuestButtonDisable] = useState(true);
    const [guestCount, setGuestCount] = useState(0)


    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleOnGuestCountChange = (event) => {
        setIsAdGuestButtonDisable(false);
        setGuestCount(event.target.value);
    }

    const [showCalendar, setShowCalendar] = useState(false);
    const [findClickedDatePicker, setFindClickedDatePicker] = useState(1);
    const handleCalendarClose = () => setShowCalendar(false);

    const handleOnFirstCalendarClick = () => {
        setShowCalendar(true);
        setFindClickedDatePicker(1)
    }
    const handleOnSecondCalendarClick = () => {
        setShowCalendar(true)
        setFindClickedDatePicker(2)
    };

    const [startDay, setStartDay] = useState("Mon");
    const [startDate, setStartDate] = useState(1);
    const [startMonth, setStartMonth] = useState("Jan");

    const [endDay, setEndDay] = useState(startDay);
    const [endDate, setEndDate] = useState(startDate);
    const [endMonth, setEndMonth] = useState(startMonth);

    const handleOnShowStartDate = (date) => {
        setStartDay(days[date.getDay()]);
        setStartDate(date.getDate());
        setStartMonth(month[date.getMonth()]);
    }
    const handleOnShowEndDate = (date) => {
        setEndDay(days[date.getDay()]);
        setEndDate(date.getDate());
        setEndMonth(month[date.getMonth()]);
    }

    const handleOnShowtDate = (date) => {
        if (findClickedDatePicker === 1) {
            handleOnShowStartDate(date);
            handleOnShowEndDate(date);
        }
        if (findClickedDatePicker === 2) {
            handleOnShowEndDate(date);
        }
    }

    return (
        <Row className='mx-0'>
            <Col lg={4} md={6} className='bg-white pb-2 pt-3 choose-section-city'>
                <Card className='city-selecting-card mb-2'>
                    <Card.Body className='py-2'>
                        {/*<Card.Title>Card Title</Card.Title>*/}
                        <Card.Subtitle className="mb-0 text-muted">CITY</Card.Subtitle>
                        <CitySelecting/>
                        <Card.Text className='province '>Western Province</Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col lg={4} md={6} className='bg-white pb-2 pt-3 choose-section-guests'>
                <Card className='guests-selecting-card mb-2'>
                    <Card.Body className='py-2'>
                        <Card.Subtitle className="mb-0 text-muted">GUESTS</Card.Subtitle>
                        <Form.Control
                            type="number"
                            id="guestsCount"
                            className='guests-count'
                            placeholder='Only me'
                            min='2'
                            onChange={handleOnGuestCountChange}
                        />
                        <button className='add-guests m-0 p-0' onClick={handleShow} disabled={isAdGuestButtonDisable}>
                            + Add guests
                        </button>
                        <GuestsPopup
                            show={show}
                            handleClose={handleClose}
                            guestCount={guestCount}
                        />

                    </Card.Body>
                </Card>

            </Col>
            <Col lg={4} className='bg-white pb-2 pt-3 choose-section-date'>
                <Card className='date-selecting-card mb-2'>
                    <Card.Body className='py-2 date-selecting-card-body'>
                        <Card.Subtitle className="mb-0 text-muted">DATE</Card.Subtitle>
                        <Row>
                            <Col xs={6}>
                                <span className='row'>
                                    <Card.Title
                                        className='col-9 my-1 show-date'>
                                        {startDay}, {startDate} {startMonth}
                                    </Card.Title>
                                <GoCalendar className='col-2 px-0 my-1 calendar-icon'
                                            onClick={handleOnFirstCalendarClick}
                                />
                                </span>
                                <CalendarPopup show={showCalendar}
                                               handleCalendarClose={handleCalendarClose}
                                               showDate={handleOnShowtDate}/>
                                <Card.Text className='check'>Check in</Card.Text>
                            </Col>
                            <Col xs={6}>
                                <span className='row'>
                                    <Card.Title
                                        className='col-9 my-1 show-date'>{endDay}, {endDate} {endMonth}
                                    </Card.Title>
                                <GoCalendar className='col-2 px-0 my-1 calendar-icon'
                                            onClick={handleOnSecondCalendarClick}/>
                                </span>
                                <CalendarPopup show={showCalendar}
                                               handleCalendarClose={handleCalendarClose}
                                               showDate={handleOnShowtDate}/>
                                <Card.Text className='check'>Check out</Card.Text>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    );
}

export default ChooseSection;