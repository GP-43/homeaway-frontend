import React, { useEffect, useState } from "react";
import PlaceCard from "../place_card/PlaceCard.jsx";
import { Row, Col } from "react-bootstrap";
import { FaExchangeAlt } from "react-icons/fa";
import Dropdown from "react-bootstrap/Dropdown";
import axios from "axios";
import useLocalStorage from "../../../hooks/useLocalStorage.js";
import { useHomePagePlaces } from "../../../contexts/HomePagePlacesContext.js";

function PlaceSection() {


    const { homePagePlaces, setHomePagePlaces, setHomePagePlacesStatic } = useHomePagePlaces();
    const [places, setPlaces] = useState([]);


    useEffect(() => {
        axios.get("http://localhost:4000/addnewrent/places").then((response) => {
            setHomePagePlaces(response.data.places);
            setHomePagePlacesStatic(response.data.places);
            console.log("ane apoi", response.data.places)
            // const [places, setHomePagePlaces] = useLocalStorage('places', [])
            setPlaces(response.data.places);
        });
    }, []);

    //sorting
    const handleOnPriceSortClick = () => {
        setPlaces([...places].sort((a, b) => b.price - a.price));
    }
    const handleOnlocationSortClick = () => {
        setPlaces([...places].sort((a, b) => a.city > b.city ? 1 : -1,));
    }
    const handleOnRatingSortClick = () => {
        setPlaces([...places].sort((a, b) => a.rating - b.rating));
    }

    return (
        <Row className="py-3 mx-0">
            <Col md={11} xs={8} className='place-section-head px-0 pb-4'>
                <Row>
                    <Col md={11} xs={10} className='px-0'>
                        <h5 className='place-section-header'>Explore more places</h5>
                    </Col>
                    <Col md={1} xs={2} className='d-flex justify-content-end px-0'>
                        <Dropdown className="sort-drop-down-btn">
                            <Dropdown.Toggle variant="success" id="dropdown-basic" className='p-md-2 p-0'>
                                <FaExchangeAlt
                                    className="sort-icon"
                                    style={{ transform: "rotate(90deg)" }}
                                />
                            </Dropdown.Toggle>

                            <Dropdown.Menu className="my-bookings-dropdown">
                                <Dropdown.Item onClick={handleOnPriceSortClick}>Price</Dropdown.Item>
                                <Dropdown.Item onClick={handleOnlocationSortClick}>Location</Dropdown.Item>
                                <Dropdown.Item onClick={handleOnRatingSortClick}>Rating</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Col>
                </Row>
            </Col>
            <Col md={12} xs={8} className='place-section px-md-4 px-0'>
                <Row>
                    {homePagePlaces.map((value) => (
                        <Col lg={3} md={4} className="place-card-set px-lg-4 py-lg-3 px-md-2 py-md-2">
                            <PlaceCard
                                placeId={value.id}
                                title={value.title}
                                src={"http://localhost:4000/images/" + value.image}
                                city={value.city}
                                price={value.price}
                                quantity={value.quantity}
                                rating="0"
                            />
                        </Col>
                    ))}
                </Row>
            </Col>
        </Row>
    );
}

export default PlaceSection;
