import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import ReviewCard from "./ReviewCard";
import ReviewForm from "./ReviewForm";

function Reviews() {
    return(
        <main>
            <header>
                <NavBar/>
            </header>
            <ul>
                <ReviewForm />
                <ReviewCard />
            </ul>
        </main>
    )
}

export default Reviews