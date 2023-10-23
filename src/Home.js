import React from "react";
import NavBar from "./NavBar";

function Home(){
    return (
        <>
            <header>
                <NavBar />
            </header>
            <main>
                <h5>To add a song, click the "Submit A Song" link</h5>
                <h5>To view songs, click the "Songs" link</h5>
            </main>
        </>
    )
}

export default Home;