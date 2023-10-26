import React, { useEffect, useState } from "react";
import SongCard from "./SongCard";
import NavBar from "./NavBar";
import "./SongContainer.css"
import DataForm from "./DataForm";

function SongContainer() {
    const [songs, setSongs] = useState([]);

    useEffect(() => {
        fetch('http://localhost:6001/songs')
            .then((res) => res.json())
            .then((data) => {
                setSongs(data);
            });
    }, []);

    function handleAddSong(newSong) {
        setSongs([...songs, newSong])
    }

    return (
        <main>
            <header>
                <NavBar />
            </header>
            <main>
                <DataForm onAddSong={handleAddSong} />
                <SongCard songs={songs} />
            </main>
        </main>
    );
}

export default SongContainer;
