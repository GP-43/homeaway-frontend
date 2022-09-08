import ReactStars from "react-rating-stars-component";
import React from "react";

function AddRating() {
    const ratingChanged = (newRating) => {
        console.log(newRating);
    };

    return (
        <ReactStars
            count={5}
            onChange={ratingChanged}
            size={24}
            activeColor="#ffd700"
        />
    );
}

export default AddRating

