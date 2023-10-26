import React, { useState, useEffect } from "react";
import "./ReviewForm.css"

function ReviewCard({reviews}) {
    return(
        <ul>
            {reviews.map((review) => (
                <li key={review.id}>
                    <h3>{review.reviewContent}</h3>
                    <h3>-{review.user}</h3>
                </li>
            ))}
        </ul>
    )
}

export default ReviewCard