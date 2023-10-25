import React, { useEffect, useState } from "react";
import SongCard from "./SongCard";
import NavBar from "./NavBar";

function SongContainer() {
    const [songs, setSongs] = useState([]);

    useEffect(() => {
        fetch('http://localhost:6001/songs')
            .then((res) => res.json())
            .then((data) => {
                setSongs(data);
            });
    }, []);

    return (
        <>
            <header>
                <NavBar />
            </header>
            <main>
                <SongCard songs={songs} />
            </main>
        </>
    );
}

export default SongContainer;
