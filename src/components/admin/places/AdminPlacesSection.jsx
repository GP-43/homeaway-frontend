import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { useState } from 'react';
import PlaceCard from "./PlaceCard";
import { FaExchangeAlt } from "react-icons/fa";
import Dropdown from "react-bootstrap/Dropdown";


//images
import place1 from "../../../assets/images/places_image_gallery/place1.jpg";
import place2 from "../../../assets/images/places_image_gallery/place2.jpg";
import place3 from "../../../assets/images/places_image_gallery/place3.jpg";
import place4 from "../../../assets/images/places_image_gallery/place4.jpg";
import place5 from "../../../assets/images/places_image_gallery/place5.jpg";
import place6 from "../../../assets/images/places_image_gallery/place6.jpg";
import place7 from "../../../assets/images/places_image_gallery/place7.jpg";
import place8 from "../../../assets/images/places_image_gallery/place8.jpg";
import { useEffect } from 'react';


function AdminPlacesSection() {
    const [nameSearchTerm, setNameSearchTerm] = useState('')
    const [dateSearchTerm, setDateSearchTerm] = useState('')
    const [rateSearchTerm, setRateSearchTerm] = useState('')
    const [places, setPlaces] = useState([])

    useEffect(() => {
        const fetchPlaces = () => {
            // localhost:8080/places
            fetch('https://jsonplaceholder.typicode.com/todos')
                .then(response => response.json())
                .then(json => setPlaces(json))
        }

        fetchPlaces();
    }, [])

    const placeData = [
        {
            Src: place1,
            Title: "Meeting room",
            City: "Colombo",
            Price: "Rs.2500",
            Quantity: 8,
            Rating: 4.0,
            CreateDate: "2022-05-21"
        },
        {
            Src: place2,
            Title: "Study room",
            City: "Gampaha",
            Price: "Rs.3000",
            Quantity: 20,
            Rating: 4.8,
            CreateDate: "2022-05-22"
        },
        {
            Src: place3,
            Title: "Study room",
            City: "Kurunegala",
            Price: "Rs.2000",
            Quantity: 10,
            Rating: 3.8,
            CreateDate: "2022-06-23"
        },
        {
            Src: place4,
            Title: "Meeting room",
            City: "Jaffna",
            Price: "Rs.4500",
            Quantity: 30,
            Rating: 4.2,
            CreateDate: "2022-05-24"
        },
        {
            Src: place5,
            Title: "Meeting room",
            City: "Maho",
            Price: "Rs.3500",
            Quantity: 43,
            Rating: 1.2,
            CreateDate: "2022-07-21"
        },
        {
            Src: place6,
            Title: "Study room",
            City: "chilaw",
            Price: "Rs.4000",
            Quantity: 50,
            Rating: 4.9,
            CreateDate: "2022-03-20"
        },
        {
            Src: place7,
            Title: "Study room",
            City: "Mount lavinia",
            Price: "Rs.2500",
            Quantity: 20,
            Rating: 3.0,
            CreateDate: "2022-05-23"
        },
        {
            Src: place8,
            Title: "Meeting room",
            City: "Rathmalane",
            Price: "Rs.5000",
            Quantity: 12,
            Rating: 2.8,
            CreateDate: "2022-05-28"
        }, {
            Src: place5,
            Title: "Meeting room",
            City: "Maho",
            Price: "Rs.3500",
            Quantity: 43,
            Rating: 1.2,
            CreateDate: "2022-05-24"
        },
        {
            Src: place6,
            Title: "Study room",
            City: "chilaw",
            Price: "Rs.4000",
            Quantity: 50,
            Rating: 4.9,
            CreateDate: "2022-05-26"
        },
        {
            Src: place7,
            Title: "Study room",
            City: "Mount lavinia",
            Price: "Rs.2500",
            Quantity: 20,
            Rating: 3.0,
            CreateDate: "2022-05-25"
        },
        {
            Src: place8,
            Title: "Meeting room",
            City: "Rathmalane",
            Price: "Rs.5000",
            Quantity: 12,
            Rating: 2.8,
            CreateDate: "2022-05-22"
        },
    ];

    return (
        <Col className='top-selling-products'>
            <Row className='mx-0 search-part mt-3 pt-3 '>
                <Col xs={3} className='px-0 ps-3'>
                    <input className='search-by-name p-2' type="text" placeholder='Search...'
                        onChange={event => { setNameSearchTerm(event.target.value) }}
                    />
                </Col>

                <Col xs={3} className='text-right'>
                    <select className='search-by-name p-2' onChange={event => { setRateSearchTerm(event.target.value) }}>
                        <option hidden value="none"> Search by ratings ...</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>4+</option>
                        <option>none</option>
                    </select>
                </Col>
                <Col xs={3} className='text-center ps-5 ms-5'>
                    <input className='search-by-name p-2' type="date"
                        onChange={event => { setDateSearchTerm(event.target.value) }}
                    />
                </Col>
                <Col xs={2} className='d-flex justify-content-end px-0'>
                    <Dropdown className="sort-drop-down-btn-admin">
                        <Dropdown.Toggle variant="success" id="dropdown-basic" className='p-md-2 p-0'>
                            <FaExchangeAlt
                                className="sort-icon-admin"
                                style={{ transform: "rotate(90deg)" }}
                            />
                        </Dropdown.Toggle>

                        <Dropdown.Menu className="my-bookings-dropdown">
                            <Dropdown.Item href="#/action-1">Price</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Location</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Rating</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Date</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Col>
            </Row>
            <Row>
                {/* {placeData.filter((val) => {
                    if (nameSearchTerm == "" && rateSearchTerm == "" && dateSearchTerm == "") {
                        return val
                    }
                    // search by name
                    else if ((val.City.toLowerCase().includes(nameSearchTerm.toLowerCase()) || val.Title.toLowerCase().includes(nameSearchTerm.toLowerCase())) && rateSearchTerm == "" && dateSearchTerm == "") {
                        return val
                    }
                    //clear rating search
                    else if (rateSearchTerm == "none") {
                        return val
                    }
                    // search by rate
                    else if (nameSearchTerm == "" && dateSearchTerm == "") {
                        if (rateSearchTerm == val.Rating) {
                            return val
                        }
                        else if (rateSearchTerm === '4+' && val.Rating > 4) {
                            return val
                        }
                    }
                    //search by date
                    else if (nameSearchTerm == "" && rateSearchTerm == "" && dateSearchTerm == val.CreateDate) {
                        return val
                    }
                    //search by date + rate + name
                    else if (rateSearchTerm == val.Rating && dateSearchTerm == val.CreateDate && (val.City.toLowerCase().includes(nameSearchTerm.toLowerCase()) || val.Title.toLowerCase().includes(nameSearchTerm.toLowerCase()))) {
                        return val
                    }
                    // search by date + name
                    else if (rateSearchTerm == "" && dateSearchTerm == val.CreateDate && (val.City.toLowerCase().includes(nameSearchTerm.toLowerCase()) || val.Title.toLowerCase().includes(nameSearchTerm.toLowerCase()))) {
                        return val
                    }
                    //search by rate + name
                    else if (dateSearchTerm == "" && (val.City.toLowerCase().includes(nameSearchTerm.toLowerCase()) || val.Title.toLowerCase().includes(nameSearchTerm.toLowerCase()))) {
                        if (rateSearchTerm == val.Rating) {
                            return val
                        }
                        else if (rateSearchTerm === '4+' && val.Rating > 4) {
                            return val
                        }
                    }
                    //search by date + rate
                    else if (nameSearchTerm == "" && dateSearchTerm == val.CreateDate) {
                        if (rateSearchTerm == val.Rating) {
                            return val
                        }
                        else if (rateSearchTerm === '4+' && val.Rating > 4) {
                            return val
                        }
                    }

                }).map((val) => {
                    return (
                        <Col lg={3} md={4} className="place-card-set px-lg-4 py-lg-3 px-md-2 py-md-2">
                            <PlaceCard
                                Title={val.Title}
                                Src={val.Src}
                                City={val.City}
                                Price={val.Price}
                                Quantity={val.Quantity}
                                Rating={val.Rating}
                                CreateDate={val.CreateDate}
                            />
                        </Col>
                    )
                })} */}


                {places && places.map(val => {
                    return <PlaceCard
                        Title={val.title}
                        Src={val.Src}
                        City={val.City}
                        Price={val.Price}
                        Quantity={val.Quantity}
                        Rating={val.Rating}
                        CreateDate={val.CreateDate}
                    />
                })}
            </Row>
        </Col >
    )
}

export default AdminPlacesSection