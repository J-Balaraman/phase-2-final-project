import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import ReviewCard from "./ReviewCard";
import ReviewForm from "./ReviewForm";

function Reviews() {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('http://localhost:6001/reviews')
            .then((res) => res.json())
            .then((data) => {
                setReviews(data);
            });
    }, []);

    function handleAddReview(newReview) {
        setReviews([...reviews, newReview])
    }
    return(
        <main>
            <header>
                <NavBar/>
            </header>
            <>
                <ReviewForm onAddReview={handleAddReview} />
                <ReviewCard reviews={reviews} />
            </>
        </main>
    )
}

export default Reviews