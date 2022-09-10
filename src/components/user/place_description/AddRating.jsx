import ReactStars from "react-rating-stars-component";
import React from "react";
import {Button, Card, Form} from "react-bootstrap";
import SweetAlert from 'sweetalert2'

function AddRating(props) {
    const ratingChanged = (newRating) => {
        console.log(newRating);
    };

    const handleOnSubmitClick = () => {

        const Toast = SweetAlert.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 1200,
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
                onChange={ratingChanged}
                size={48}
                activeColor="#db9c04"
            />
            <Form className='w-100'>
                <Form.Group className="mb-1" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Give Your Feedback</Form.Label>
                    <Form.Control as="textarea" rows={3}
                                  className='bg-transparent border border-1 border-dark feedback-textarea'/>
                </Form.Group>
                <Button className='py-1 px-3 float-end border-0' onClick={handleOnSubmitClick}>POST</Button>
            </Form>
        </Card>
    );
}

export default AddRating

