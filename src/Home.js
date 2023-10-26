import React from "react";
import NavBar from "./NavBar";
import "./Home.css"

function Home(){
    return (
        <main>
            <header>
                <NavBar />
            </header>
            <div>
                <h5>To view and add new songs, click the "Songs" link</h5>
                <h5>To leave a review, click the "Review" link</h5>
            </div>
        </main>
    )
}

export default Home;