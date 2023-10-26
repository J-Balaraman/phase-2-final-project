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
                <h5>To add a song, click the "Submit A Song" link</h5>
                <h5>To view songs, click the "Songs" link</h5>
            </div>
        </main>
    )
}

export default Home;