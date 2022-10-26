import ReactStars from "react-rating-stars-component";
import React, {useState} from "react";
import {Button, Card, Form} from "react-bootstrap";
import SweetAlert from 'sweetalert2'
import axios from "axios";

function AddRating(props) {

    const userDetails = JSON.parse(sessionStorage.getItem('accessToken'));
    const userId = userDetails.userId;

    const [rate, setRate] = useState(0);
    const [review, setReview] = useState("");

    const handleOnRatingChanged = (rate) => {
        setRate(rate);
    };
    const handleOnReviewChanged = (review) => {
        setReview(review.target.value);
    }

    const handleOnSubmitClick = () => {
        const reviewDetails = {
            rate: rate,
            review: review,
            placeId: props.placeId,
            occupantId: userId,
        }

        axios.post("http://localhost:4000/addnewrent/review", reviewDetails).then((response) => {
            console.log(response);
        });

        const Toast = SweetAlert.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 1500,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.addEventListener('mouseenter', SweetAlert.stopTimer)
                toast.addEventListener('mouseleave', SweetAlert.resumeTimer)
            }
        })

        Toast.fire({
            icon: 'success',
            title: 'Your feedback is submitted'
        })

        props.handleOnReviewSubmitClick();
    }

    return (
        <Card className='place-rating-card d-flex align-items-center justify-content-center p-3'>
            <h3>PLACE RATING</h3>
            <ReactStars
                count={5}
                onChange={handleOnRatingChanged}
                size={48}
                activeColor="#db9c04"
            />
            <Form className='w-100'>
                <Form.Group className="mb-1" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Give Your Feedback</Form.Label>
                    <Form.Control as="textarea" rows={3}
                                  className='bg-transparent border border-1 border-dark feedback-textarea'
                                  onChange={handleOnReviewChanged}
                    />
                </Form.Group>
                <Button className='py-1 px-3 float-end border-0' onClick={handleOnSubmitClick}>POST</Button>
            </Form>
        </Card>
    );
}

export default AddRating

