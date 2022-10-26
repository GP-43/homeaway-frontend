import React, {useEffect, useState} from "react";
import {Container, Row, Col, Button} from "react-bootstrap";
import ImageGallery from "../../../components/user/place_description/imagegallery/ImageGallery";
import PlaceDetails from "../../../components/user/place_description/PlaceDetails";
import RenterDetails from "../../../components/user/place_description/RenterDetails";
import PlaceInformation from "../../../components/user/place_description/place_information/PlaceInformation";
import MakeBooking from "../../../components/user/place_description/make_booking/MakeBooking";
import AddRating from "../../../components/user/place_description/AddRating";
import {useParams} from "react-router-dom";
import axios from "axios";

function PlaceDescription() {

    // const userDetails = JSON.parse(sessionStorage.getItem("accessToken"));
    // const userId = userDetails.userId;

    const userDetails = JSON.parse(sessionStorage.getItem('accessToken'));
    const userId = userDetails.userId;

    let {id} = useParams();
    const placeId = parseInt(id);

    const [placeDetails, setPlaceDetails] = useState({});

    useEffect(() => {
        axios.get('http://localhost:4000/addnewrent/place/' + placeId).then((response) => {
            setPlaceDetails(response.data);
        });
    }, []);

    const [isRatePlaceClicked, setIsRatePlaceClicked] = useState(false);

    const handleOnRatePlaceClick = () => {
        setIsRatePlaceClicked(true);
    }

    const handleOnReviewSubmitClick = () => {
        setIsRatePlaceClicked(false);
    }

    return (
        <Container>
            <Row className="renter-gallery-and-details mx-0 mt-2">
                <Col lg={6}>
                    <Row>
                        <ImageGallery/>
                    </Row>
                    <Row>
                        <PlaceDetails
                            title={placeDetails.title}
                            city={placeDetails.city}
                            priceType={placeDetails.priceType}
                            price={placeDetails.price}
                        />
                    </Row>
                </Col>
                <Col lg={6} className='px-5 pt-2'>
                    {isRatePlaceClicked ?
                        <AddRating handleOnReviewSubmitClick={handleOnReviewSubmitClick} placeId={placeId}/>
                        :
                        <RenterDetails handleOnRatePlaceClick={handleOnRatePlaceClick}
                                       renterId={placeDetails.renter_id}
                        />
                    }
                </Col>
            </Row>
            <Row className="mx-0 mt-2">
                <Col lg={6} className="px-0">
                    <PlaceInformation
                        description={placeDetails.description}
                        wifi={placeDetails.wifi}
                        parking={placeDetails.parking}
                        ac={placeDetails.ac}
                        silent={placeDetails.silent}
                        food={placeDetails.food}
                        washroom={placeDetails.washroom}
                        rating={placeDetails.rating}
                        occupantId={userId}
                        placeId={placeId}
                    />
                </Col>
                <Col className="px-1">
                    <MakeBooking
                        priceType={placeDetails.priceType}
                        price={placeDetails.price}
                        occupantId={userId}
                        renterId={placeDetails.renter_id}
                        placeId={placeId}
                    />
                </Col>
            </Row>
        </Container>
    );
}

export default PlaceDescription;
