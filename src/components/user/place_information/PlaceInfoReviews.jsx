import React from 'react';
import {Row, Col} from 'react-bootstrap';
import PlaceInfoReviewsItem from './PlaceInfoReviewsItem';

// images
import p1 from "../../../assets/images/admin/occupant/p1.jpg";
import p2 from "../../../assets/images/admin/occupant/p2.jpg";
import p3 from "../../../assets/images/admin/occupant/p3.jpg";
import p4 from "../../../assets/images/admin/occupant/p4.jpg";

function PlaceInfoReviews() {
    const review_array = [{image : p1 , fName : "Saman", lName : "Kumara", comment : "it's amaizing"},
        {image : p2, fName : "Amal", lName : "Perera", comment : "We enjoyed that place"},
        {image : p3, fName : "saman", lName : "Kithsiri", comment : "Great"},
        {image : p4, fName : "Nilantha", lName : "Jayasooriya", comment : "There were some issues with washrooms, but we enjoyed that place"}];
    return (
        <Row className='mt-5'>
            <h4>Comments</h4>
            {review_array && review_array.map(i => <PlaceInfoReviewsItem Image = {i.image} Fname = {i.fName} Lname = {i.lName}  Comment = {i.comment} />)}
        </Row>
    );
}

export default PlaceInfoReviews;
