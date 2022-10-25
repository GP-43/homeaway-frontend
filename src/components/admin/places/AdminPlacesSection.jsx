import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import PlaceCard from "./PlaceCard";
import { FaExchangeAlt } from "react-icons/fa";
import Dropdown from "react-bootstrap/Dropdown";
import axois from "axios";
const base_url = process.env.REACT_APP_BASE_URL;

function AdminPlacesSection() {
    const [nameSearchTerm, setNameSearchTerm] = useState('')
    const [dateSearchTerm, setDateSearchTerm] = useState('')
    const [rateSearchTerm, setRateSearchTerm] = useState('')

    const [details, setDetails] = useState([]);

    useEffect((event) => {
        axois
            .get(`${base_url}/admin/view/places`)
            .then((data) => {
                const detail = data.data;
                setDetails(detail);

            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    console.log(details);

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

                {/* <Col xs={2} className='d-flex justify-content-end px-0'>
                    <Dropdown className="sort-drop-down-btn-admin">
                        <Dropdown.Toggle variant="success" id="dropdown-basic" className='p-md-2 p-0'>
                            <FaExchangeAlt
                                className="sort-icon-admin"
                                style={{ transform: "rotate(90deg)" }}
                            />
                        </Dropdown.Toggle>

                        <Dropdown.Menu className="my-bookings-dropdown">
                            <Dropdown.Item href="#/action-1">Price</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Rating</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Date</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Col> */}
            </Row>
            <Row>
                {details.filter((val, index) => {
                    //without searching
                    if (nameSearchTerm == "" && rateSearchTerm == "" && dateSearchTerm == "") {
                        return val
                    }
                    // search by name
                    else if ((val.title.toLowerCase().includes(nameSearchTerm.toLowerCase()) || val.city.toLowerCase().includes(nameSearchTerm.toLowerCase())) && dateSearchTerm == "" && rateSearchTerm == "") {
                        return val
                    }
                    //clear rating search
                    else if (rateSearchTerm == "none") {
                        return val
                    }
                    // // search by rate
                    else if (nameSearchTerm == "" && dateSearchTerm == "") {
                        if (rateSearchTerm == val.rating) {
                            return val
                        }
                        else if (rateSearchTerm === '4+' && val.rating > 4) {
                            return val
                        }
                    }
                    // //search by date
                    else if (nameSearchTerm == "" && rateSearchTerm == "" && dateSearchTerm == val.createDate) {
                        return val
                    }
                    // //search by date + rate + name
                    else if ((val.title.toLowerCase().includes(nameSearchTerm.toLowerCase()) || val.city.toLowerCase().includes(nameSearchTerm.toLowerCase())) && dateSearchTerm == val.createDate) {
                        if (rateSearchTerm == val.rating) {
                            return val
                        }
                        else if (rateSearchTerm === '4+' && val.rating > 4) {
                            return val
                        }
                    }
                    // // search by date + name
                    else if ((val.title.toLowerCase().includes(nameSearchTerm.toLowerCase()) || val.city.toLowerCase().includes(nameSearchTerm.toLowerCase())) && dateSearchTerm == val.createDate && rateSearchTerm == "") {
                        return val
                    }
                    // //search by rate + name

                    else if ((val.title.toLowerCase().includes(nameSearchTerm.toLowerCase()) || val.city.toLowerCase().includes(nameSearchTerm.toLowerCase())) && dateSearchTerm == "") {
                        if (rateSearchTerm == val.rating) {
                            return val
                        }
                        else if (rateSearchTerm === '4+' && val.rating > 4) {
                            return val
                        }
                    }

                    // //search by date + rate
                    else if (nameSearchTerm == "" && dateSearchTerm == val.createDate) {
                        if (rateSearchTerm == val.rating) {
                            return val
                        }
                        else if (rateSearchTerm === '4+' && val.rating > 4) {
                            return val
                        }
                    }

                }).map((val, index) => {
                    return (
                        <Col lg={3} md={4} className="place-card-set px-lg-4 py-lg-3 px-md-2 py-md-2" key={index}>
                            <PlaceCard
                                Title={val.title}
                                Src={`${base_url}/images/` + val.image}
                                City={val.city}
                                Price={val.price}
                                Quantity={val.quantity}
                                Rating={val.rating}
                                CreateDate={val.createDate}

                            />
                        </Col>
                    )
                })}
            </Row>
        </Col >
    )
}

export default AdminPlacesSection

// const placeData = [
//     {
//         Src: place1,
//         Title: "Meeting room",
//         City: "Colombo",
//         Price: "Rs.2500",
//         Quantity: 8,
//         Rating: 4.0,
//         CreateDate: "2022-05-21"
//     },
//     {
//         Src: place2,
//         Title: "Study room",
//         City: "Gampaha",
//         Price: "Rs.3000",
//         Quantity: 20,
//         Rating: 4.8,
//         CreateDate: "2022-05-22"
//     },
//     {
//         Src: place3,
//         Title: "Study room",
//         City: "Kurunegala",
//         Price: "Rs.2000",
//         Quantity: 10,
//         Rating: 3.8,
//         CreateDate: "2022-06-23"
//     },
//     {
//         Src: place4,
//         Title: "Meeting room",
//         City: "Jaffna",
//         Price: "Rs.4500",
//         Quantity: 30,
//         Rating: 4.2,
//         CreateDate: "2022-05-24"
//     },
//     {
//         Src: place5,
//         Title: "Meeting room",
//         City: "Maho",
//         Price: "Rs.3500",
//         Quantity: 43,
//         Rating: 1.2,
//         CreateDate: "2022-07-21"
//     },
//     {
//         Src: place6,
//         Title: "Study room",
//         City: "chilaw",
//         Price: "Rs.4000",
//         Quantity: 50,
//         Rating: 4.9,
//         CreateDate: "2022-03-20"
//     },
//     {
//         Src: place7,
//         Title: "Study room",
//         City: "Mount lavinia",
//         Price: "Rs.2500",
//         Quantity: 20,
//         Rating: 3.0,
//         CreateDate: "2022-05-23"
//     },
//     {
//         Src: place8,
//         Title: "Meeting room",
//         City: "Rathmalane",
//         Price: "Rs.5000",
//         Quantity: 12,
//         Rating: 2.8,
//         CreateDate: "2022-05-28"
//     }, {
//         Src: place5,
//         Title: "Meeting room",
//         City: "Maho",
//         Price: "Rs.3500",
//         Quantity: 43,
//         Rating: 1.2,
//         CreateDate: "2022-05-24"
//     },
//     {
//         Src: place6,
//         Title: "Study room",
//         City: "chilaw",
//         Price: "Rs.4000",
//         Quantity: 50,
//         Rating: 4.9,
//         CreateDate: "2022-05-26"
//     },
//     {
//         Src: place7,
//         Title: "Study room",
//         City: "Mount lavinia",
//         Price: "Rs.2500",
//         Quantity: 20,
//         Rating: 3.0,
//         CreateDate: "2022-05-25"
//     },
//     {
//         Src: place8,
//         Title: "Meeting room",
//         City: "Rathmalane",
//         Price: "Rs.5000",
//         Quantity: 12,
//         Rating: 2.8,
//         CreateDate: "2022-05-22"
//     },
// ];