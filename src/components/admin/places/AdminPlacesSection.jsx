import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { useState } from 'react';
import PlaceCard from "../../user/place_card/PlaceCard";


//images
import place1 from "../../../assets/images/places_image_gallery/place1.jpg";
import place2 from "../../../assets/images/places_image_gallery/place2.jpg";
import place3 from "../../../assets/images/places_image_gallery/place3.jpg";
import place4 from "../../../assets/images/places_image_gallery/place4.jpg";
import place5 from "../../../assets/images/places_image_gallery/place5.jpg";
import place6 from "../../../assets/images/places_image_gallery/place6.jpg";
import place7 from "../../../assets/images/places_image_gallery/place7.jpg";
import place8 from "../../../assets/images/places_image_gallery/place8.jpg";


function AdminPlacesSection() {
    const [nameSearchTerm, setNameSearchTerm] = useState('')

    const placeData = [
        {
            Src: place1,
            Title: "Meeting room",
            City: "Colombo",
            Price: "Rs.2500",
            Quantity: 8,
            Rating: 4.0,
        },
        {
            Src: place2,
            Title: "Study room",
            City: "Gampaha",
            Price: "Rs.3000",
            Quantity: 20,
            Rating: 4.8,
        },
        {
            Src: place3,
            Title: "Study room",
            City: "Kurunegala",
            Price: "Rs.2000",
            Quantity: 10,
            Rating: 3.8,
        },
        {
            Src: place4,
            Title: "Meeting room",
            City: "Jaffna",
            Price: "Rs.4500",
            Quantity: 30,
            Rating: 4.2,
        },
        {
            Src: place5,
            Title: "Meeting room",
            City: "Maho",
            Price: "Rs.3500",
            Quantity: 43,
            Rating: 1.2,
        },
        {
            Src: place6,
            Title: "Study room",
            City: "chilaw",
            Price: "Rs.4000",
            Quantity: 50,
            Rating: 4.9,
        },
        {
            Src: place7,
            Title: "Study room",
            City: "Mount lavinia",
            Price: "Rs.2500",
            Quantity: 20,
            Rating: 3.0,
        },
        {
            Src: place8,
            Title: "Meeting room",
            City: "Rathmalane",
            Price: "Rs.5000",
            Quantity: 12,
            Rating: 2.8,
        }, {
            Src: place5,
            Title: "Meeting room",
            City: "Maho",
            Price: "Rs.3500",
            Quantity: 43,
            Rating: 1.2,
        },
        {
            Src: place6,
            Title: "Study room",
            City: "chilaw",
            Price: "Rs.4000",
            Quantity: 50,
            Rating: 4.9,
        },
        {
            Src: place7,
            Title: "Study room",
            City: "Mount lavinia",
            Price: "Rs.2500",
            Quantity: 20,
            Rating: 3.0,
        },
        {
            Src: place8,
            Title: "Meeting room",
            City: "Rathmalane",
            Price: "Rs.5000",
            Quantity: 12,
            Rating: 2.8,
        },
    ];

    return (
        <Col className='top-selling-products'>
            <Row className='mx-0 search-part mt-3 pt-3 '>
                <Col className='px-0 ps-3'>
                    <input className='search-by-name p-2' type="text" placeholder='Search...'
                        onChange={event => { setNameSearchTerm(event.target.value) }}
                    />
                </Col>
            </Row>

            <Row className='mx-0 px-0 data-part'>

                {placeData.filter((val) => {
                    // without searching
                    if (nameSearchTerm == "") {
                        return val
                    }

                    else if ((val.City.toLowerCase().includes(nameSearchTerm.toLowerCase()) || val.Title.toLowerCase().includes(nameSearchTerm.toLowerCase()))) {
                        return val
                    }

                }).map((val, key) => {
                    return (
                        <Col md={12} xs={8} className='place-section px-md-4 px-0'>
                            <Row className='mx-0 px-0 ' key={key}>
                                <Col lg={3} md={4} className="place-card-set px-lg-4 py-lg-3 px-md-2 py-md-2">
                                    <PlaceCard
                                        Title={val.Title}
                                        Src={val.Src}
                                        City={val.City}
                                        Price={val.Price}
                                        Quantity={val.Quantity}
                                        Ratings={val.Ratings}
                                    />
                                </Col>
                            </Row>
                        </Col>



                    )
                })}
            </Row >
        </Col >
    )
}

export default AdminPlacesSection