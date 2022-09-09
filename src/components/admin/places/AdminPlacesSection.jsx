import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import PlaceCard from "./PlaceCard";
import { FaExchangeAlt } from "react-icons/fa";
import Dropdown from "react-bootstrap/Dropdown";
import axois from "axios";
const base_url = process.env.REACT_APP_BASE_URL;


//images
// import place1 from "../../../assets/images/places_image_gallery/place1.jpg";
// import place2 from "../../../assets/images/places_image_gallery/place2.jpg";
// import place3 from "../../../assets/images/places_image_gallery/place3.jpg";
// import place4 from "../../../assets/images/places_image_gallery/place4.jpg";
// import place5 from "../../../assets/images/places_image_gallery/place5.jpg";
// import place6 from "../../../assets/images/places_image_gallery/place6.jpg";
// import place7 from "../../../assets/images/places_image_gallery/place7.jpg";
// import place8 from "../../../assets/images/places_image_gallery/place8.jpg";


function AdminPlacesSection() {
    const [nameSearchTerm, setNameSearchTerm] = useState('')
    const [dateSearchTerm, setDateSearchTerm] = useState('')
    const [rateSearchTerm, setRateSearchTerm] = useState('')

    const [details, setDetails] = useState({});

    useEffect((event) => {
        axois
            .get(`${base_url}/admin/view/places`)
            .then((data) => {
                const details = data.data;
                setDetails({ ...details });

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
                {Object.keys(details).filter((index) => {
                    if (nameSearchTerm == "" && rateSearchTerm == "" && dateSearchTerm == "") {
                        return index
                    }
                    // search by name
                    else if ((details[index].city.toLowerCase().includes(nameSearchTerm.toLowerCase()) || details[index].title.toLowerCase().includes(nameSearchTerm.toLowerCase())) && rateSearchTerm == "" && dateSearchTerm == "") {
                        return index
                    }
                    //clear rating search
                    else if (rateSearchTerm == "none") {
                        return index
                    }
                    // search by rate
                    else if (nameSearchTerm == "" && dateSearchTerm == "") {
                        if (rateSearchTerm == details[index].rating) {
                            return index
                        }
                        else if (rateSearchTerm === '4+' && details[index].rating > 4) {
                            return index
                        }
                    }
                    //search by date
                    else if (nameSearchTerm == "" && rateSearchTerm == "" && dateSearchTerm == details[index].createDate) {
                        return index
                    }
                    //search by date + rate + name
                    else if (rateSearchTerm == details[index].rating && dateSearchTerm == details[index].createDate && (details[index].city.toLowerCase().includes(nameSearchTerm.toLowerCase()) || details[index].title.toLowerCase().includes(nameSearchTerm.toLowerCase()))) {
                        return index
                    }
                    // search by date + name
                    else if (rateSearchTerm == "" && dateSearchTerm == details[index].createDate && (details[index].city.toLowerCase().includes(nameSearchTerm.toLowerCase()) || details[index].title.toLowerCase().includes(nameSearchTerm.toLowerCase()))) {
                        return index
                    }
                    //search by rate + name
                    else if (dateSearchTerm == "" && (details[index].city.toLowerCase().includes(nameSearchTerm.toLowerCase()) || details[index].title.toLowerCase().includes(nameSearchTerm.toLowerCase()))) {
                        if (rateSearchTerm == details[index].rating) {
                            return index
                        }
                        else if (rateSearchTerm === '4+' && details[index].rating > 4) {
                            return index
                        }
                    }
                    //search by date + rate
                    else if (nameSearchTerm == "" && dateSearchTerm == details[index].createDate) {
                        if (rateSearchTerm == details[index].rating) {
                            return index
                        }
                        else if (rateSearchTerm === '4+' && details[index].rating > 4) {
                            return index
                        }
                    }

                }).map((key, index) => {
                    return (
                        <Col lg={3} md={4} className="place-card-set px-lg-4 py-lg-3 px-md-2 py-md-2" index={index}>
                            <PlaceCard
                                Title={details[index].title}
                                Src={`${base_url}/images/` + details[index].image}
                                City={details[index].city}
                                Price={details[index].price}
                                Quantity={details[index].quantity}
                                Rating={details[index].rating}
                                CreateDate={details[index].createDate}
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