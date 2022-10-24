import React, {useState} from 'react';
import {Row, Col} from 'react-bootstrap';
import PlaceInfoDescription from "./PlaceInfoDescription";
import PlaceInfoTime from "./PlaceInfoTime";
import PlaceInfoFeatures from "./PlaceInfoFeatures";
import PlaceInfoComment from "./PlaceInfoComment";
import PlaceInfoMap from "./PlaceInfoMap";
import {GrCircleInformation} from "react-icons/gr";
import {BiTimeFive, BiMap} from "react-icons/bi";
import {MdReviews} from "react-icons/md";
import {BsFilterCircle} from "react-icons/bs";

function PlaceInformation(props) {

    const [isVisibleDescription, setIsVisibleDescription] = useState(true);
    const [isVisibleTime, setIsVisibleTime] = useState(false);
    const [isVisibleComment, setIsVisibleComment] = useState(false);
    const [isVisibleFeatures, setIsVisibleFeatures] = useState(false);
    const [isVisibleMap, setIsVisibleMap] = useState(false);

    const disableActiveButton = () => {
        setIsVisibleDescription(false);
        setIsVisibleTime(false);
        setIsVisibleFeatures(false);
        setIsVisibleComment(false)
        setIsVisibleMap(false);
    }

    const handleOnDescriptionClick = () => {
        disableActiveButton();
        setIsVisibleDescription(true)
    }
    const handleOnTimeClick = () => {
        disableActiveButton();
        setIsVisibleTime(true);
    }
    const handleOnFeaturesClick = () => {
        disableActiveButton();
        setIsVisibleFeatures(true)
    }
    const handleOnCommentClick = () => {
        disableActiveButton();
        setIsVisibleComment(true)
    }
    const handleOnMapClick = () => {
        disableActiveButton();
        setIsVisibleMap(true)
    }

    return (
        <Row className='mx-0'>
            <Col md={1} xs={2}>
                <Row className='bg-white pt-3 pb-1 mb-2 rounded-pill d-flex justify-content-center navigation-buttons'>
                    <Col xs={12}
                         className={isVisibleDescription ? 'nav-buttons-icon-box-active' : 'nav-buttons-icon-box'}
                         onClick={handleOnDescriptionClick}
                    >
                        <GrCircleInformation className='nav-buttons-icon'/>
                    </Col>
                    <Col xs={12}
                         className={isVisibleTime ? 'nav-buttons-icon-box-active' : 'nav-buttons-icon-box'}
                         onClick={handleOnTimeClick}
                    >
                        <BiTimeFive className='nav-buttons-icon'/>
                    </Col>
                    <Col xs={12}
                         className={isVisibleFeatures ? 'nav-buttons-icon-box-active' : 'nav-buttons-icon-box'}
                         onClick={handleOnFeaturesClick}
                    >
                        <BsFilterCircle className='nav-buttons-icon'/>
                    </Col>
                    <Col xs={12}
                         className={isVisibleComment ? 'nav-buttons-icon-box-active' : 'nav-buttons-icon-box'}
                         onClick={handleOnCommentClick}
                    >
                        <MdReviews className='nav-buttons-icon'/>
                    </Col>
                    <Col xs={12}
                         className={isVisibleMap ? 'nav-buttons-icon-box-active' : 'nav-buttons-icon-box'}
                         onClick={handleOnMapClick}
                    >
                        <BiMap className='nav-buttons-icon'/>
                    </Col>
                </Row>
            </Col>
            <Col md={11} xs={10} className={isVisibleDescription ? 'd-block px-md-4 px-1' : 'd-none'}>
                <PlaceInfoDescription description={props.description}/>
            </Col>
            <Col md={11} xs={10} className={isVisibleTime ? 'd-block px-md-4 px-1' : 'd-none px-4'}>
                <PlaceInfoTime/>
            </Col>
            <Col md={11} xs={10} className={isVisibleFeatures ? 'd-block px-md-4 px-1' : 'd-none px-4'}>
                <PlaceInfoFeatures
                    wifi={props.wifi}
                    parking={props.parking}
                    ac={props.ac}
                    silent={props.silent}
                    food={props.food}
                    washroom={props.washroom}
                />
            </Col>
            <Col md={11} xs={10} className={isVisibleComment ? 'd-block px-md-4 px-1' : 'd-none px-4'}>
                <PlaceInfoComment rating={props.rating}
                />
            </Col>
            <Col md={11} xs={10} className={isVisibleMap ? 'd-block px-md-4 px-1' : 'd-none px-4'}>
                <PlaceInfoMap/>
            </Col>
        </Row>
    );
}

export default PlaceInformation;
