import React, {useState} from "react";
import { useEffect } from "react";
import {Card, Col, Row} from "react-bootstrap";
import { useHomePagePlaces } from "../../../contexts/HomePagePlacesContext";
import useLocalStorage from "../../../hooks/useLocalStorage";

function FilterSection(props) {

    const {homePagePlaces, setHomePagePlaces, homePagePlacesStatic} = useHomePagePlaces();

    const [internet, setInternet] = useState(false);
    const [parking, setParking] = useState(false);
    const [silentArea, setSilentArea] = useState(false);
    const [acNoNeed, setAcNoNeed] = useState(false);
    const [foodNeed, setFoodNeed] = useState(false);
    const [washrooms, setWashrooms] = useState(false);

    console.log("Filter section", homePagePlaces);
    
    // const filterOption = {Internet : internet, 
    //                 Parking : parking, 
    //                 SilentArea : silentArea,
    //                 AcNoNeed : acNoNeed,
    //                 FoodNeed : foodNeed,
    //                 Washrooms : washrooms,
    //                 MeetingRoom : meetingRoom,
    //                 StudyRoom : studyRoom,
    //                 OfficeRoom : officeRoom,
    //                 Cctv : cctv
    //             }

    useEffect(()=>{
        setHomePagePlaces(homePagePlacesStatic.filter((place)=> {
            let ret = true;
            if(internet) ret = ret && place.wifi;
            if(parking) ret = ret && place.parking;
            if(silentArea) ret = ret && place.silent;
            if(acNoNeed) ret = ret && place.ac;
            if(foodNeed) ret = ret && place.food;
            if(washrooms) ret = ret && place.washroom;
            return ret;
        }));
    },[internet, parking, silentArea, acNoNeed, foodNeed, washrooms])

    return (
        <Row className='mx-0 filter-section bg-transparent'>
            <Col className='bg-white filter-section-ac pt-lg-3 pt-md-2 pt-3 w-100' lg={4} md={6}>
                <Card className="filter-card mb-1">
                    <Card.Body className='filter-card-body py-0'>
                        <Card.Text className='radio-button-section w-70 p-lg-2 p-md-0 p-2'>
                            <Row className='filter-check-box px-3'>
                                <Col className='checkbox-col pt-md-0 pb-md-1 py-2' lg={3} md={4} xs={6}>
                                    <input
                                        type="checkbox"
                                        checked={internet}
                                        onChange={(e) => {setInternet(e.target.checked);
                                        
                                        }}

                                    />
                                    <label className="radio-label">Internet</label>
                                </Col> 
                                <Col className='checkbox-col pt-md-0 pb-md-1 py-2' lg={3} md={4} xs={6}>
                                    <input
                                        type="checkbox"
                                        checked={parking}
                                        onChange={(e) => setParking(e.target.checked)}
                                    />
                                    <label className="radio-label">Parking</label>
                                </Col>
                                <Col className='checkbox-col pt-md-0 pb-md-1 py-2' lg={3} md={4} xs={6}>
                                    <input
                                        type="checkbox"
                                        checked={silentArea}
                                        onChange={(e) => setSilentArea(e.target.checked)}
                                    />
                                    <label className="radio-label">Silent Area</label>
                                </Col>
                                <Col className='checkbox-col pt-md-0 pb-md-1 py-2' lg={3} md={4} xs={6}>
                                    <input
                                        type="checkbox"
                                        checked={acNoNeed}
                                        onChange={(e) => setAcNoNeed(e.target.checked)}
                                    />
                                    <label className="radio-label">A/C</label>
                                </Col>
                                <Col className='checkbox-col pt-md-0 pb-md-1 py-2' lg={3} md={4} xs={6}>
                                    <input
                                        type="checkbox"
                                        checked={foodNeed}
                                        onChange={(e) => setFoodNeed(e.target.checked)}
                                    />
                                    <label className="radio-label">Cafeteria</label>
                                </Col>
                                <Col className='checkbox-col pt-md-0 pb-md-1 py-2' lg={3} md={4} xs={6}>
                                    <input
                                        type="checkbox"
                                        checked={washrooms}
                                        onChange={(e) => setWashrooms(e.target.checked)}
                                    />
                                    <label className="radio-label">Washroom</label>
                                </Col>
                                {/* <Col className='checkbox-col pt-md-0 pb-md-1 py-1' lg={3} md={4} xs={6}>
                                    <input
                                        type="checkbox"
                                        checked={cctv}
                                        onChange={(e) => setCctv(e.target.checked)}
                                    />
                                    <label className="radio-label">CCTV</label>
                                </Col>
                                <Col className='checkbox-col pt-md-0 pb-md-1 py-1' lg={3} md={4} xs={6}>
                                    <input
                                        type="checkbox"
                                        checked={meetingRoom}
                                        onChange={(e) => setMeetingRoom(e.target.checked)}
                                    />
                                    <label className="radio-label">Meeting room</label>
                                </Col>
                                <Col className='checkbox-col pt-md-0 pb-md-1 py-1' lg={3} md={4} xs={6}>
                                    <input
                                        type="checkbox"
                                        checked={studyRoom}
                                        onChange={(e) => setStudyRoom(e.target.checked)}
                                    />
                                    <label className="radio-label">Study room</label>
                                </Col>
                                <Col className='checkbox-col pt-md-0 pb-md-1 py-1' lg={3} md={4} xs={6}>
                                    <input
                                        type="checkbox"
                                        checked={officeRoom}
                                        onChange={(e) => setOfficeRoom(e.target.checked)}
                                    />
                                    <label className="radio-label">Office room</label>
                                </Col> */}
                            </Row>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    );
}

export default FilterSection;