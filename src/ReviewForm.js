import React, { useState, useEffect } from "react";
import "./ReviewForm.css"

function ReviewForm({onAddReview}) {
    const [reviewContent, setReviewContent] = useState('')
    const [user, setUser] = useState('')

    function handleSubmit(e) {
        e.preventDefault();
        const reviewData = {
            user: user,
            reviewContent: reviewContent
        };

        fetch("http://localhost:6001/reviews", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(reviewData),
        })
            .then((r) => r.json())
            .then((newReview) => {
                setReviewContent("");
                setUser("");
                onAddReview(newReview)
            })
    }

    return(
        <main>
            <h2>Leave A Review</h2>
            <div className="new-review-form">
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="reviewContent"
                        placeholder="Let us know what you think!"
                        value={reviewContent}
                        onChange={(e) => setReviewContent(e.target.value)}
                    />
                    <input
                        type="text"
                        name="user"
                        placeholder="What's your name?"
                        value={user}
                        onChange={(e) => setUser(e.target.value)}
                    />
                    <div>
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </main>
    )
}

export default ReviewForm