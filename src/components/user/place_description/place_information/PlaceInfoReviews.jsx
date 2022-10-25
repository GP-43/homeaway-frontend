import React, {useEffect, useState} from 'react';
import {Row} from 'react-bootstrap';
import PlaceInfoReviewsItem from './PlaceInfoReviewsItem';

import axios from "axios";

function PlaceInfoReviews(props) {

    const [reviews, setReviews] = useState([]);

    const [userIds, setUserIds] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:4000/addnewrent/review/' + props.placeId).then(async (response) => {
            await setReviews(response.data);
        });
    }, []);

    // useEffect(() => {
    //     const occupantIdArr = reviews.map((item) => {
    //         return item.occupantId;
    //     })
    //     console.log(reviews)
    //     axios.post('http://localhost:4000/occupant/occupantName' , occupantIdArr).then((response) => {
    //         console.log(response);
    //     });
    // },[reviews]);

    return (
        <Row className='mt-3'>
            <h4>Comments</h4>
            {reviews.map((value) => (
                <PlaceInfoReviewsItem
                // Image={value.image}
                name={"Awantha Irushan"}
                comment={value.review}
            />
            ))}
        </Row>
    );
}

export default PlaceInfoReviews;
