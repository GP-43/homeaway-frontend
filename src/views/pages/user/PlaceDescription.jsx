import React, {useState} from "react";
import {Container, Row, Col, Button} from "react-bootstrap";
import ImageGallery from "../../../components/user/place_description/imagegallery/ImageGallery";
import PlaceDetails from "../../../components/user/place_description/PlaceDetails";
import RenterDetails from "../../../components/user/place_description/RenterDetails";
import PlaceInformation from "../../../components/user/place_description/place_information/PlaceInformation";
import MakeBooking from "../../../components/user/place_description/make_booking/MakeBooking";
import AddRating from "../../../components/user/place_description/AddRating";

function PlaceDescription() {
    
    const userDetails = JSON.parse(sessionStorage.getItem("accessToken"));
    const userId = userDetails.userId;

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
                        <PlaceDetails/>
                    </Row>
                </Col>
                <Col lg={6} className='px-5 pt-2'>
                    {isRatePlaceClicked ?
                        <AddRating handleOnReviewSubmitClick={handleOnReviewSubmitClick}/>
                        :
                        <RenterDetails handleOnRatePlaceClick={handleOnRatePlaceClick}/>
                    }
                </Col>
            </Row>
            <Row className="mx-0 mt-2">
                <Col lg={6} className="px-0">
                    <PlaceInformation/>
                </Col>
                <Col className="px-1">
                    <MakeBooking/>
                </Col>
            </Row>
        </Container>
    );
}

export default PlaceDescription;
