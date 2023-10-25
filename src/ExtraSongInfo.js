import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import NavBar from "./NavBar";

function ExtraSongInfo() {
    const [extraSongData, setExtraSongData] = useState([]);
    const { title } = useParams();

    useEffect(() => {
        fetch('http://localhost:6001/songs')
            .then((res) => res.json())
            .then((data) => {
                setExtraSongData(data);
            })
    }, []);

    const extraData = extraSongData.find((song) => song.title === title);

    return (
        <>
            <header>
                <NavBar />
            </header>
            <main>
                <div className="song-info">
                    <li>{`Song: ${extraData && extraData.title}`}</li>
                    <li>{`Artist: ${extraData && extraData.artist}`}</li>
                    <li>{`Album: ${extraData && extraData.album}`}</li>
                    <li>{`Genre: ${extraData && extraData.genre}`}</li>
                    <li>{`Release Date: ${extraData && extraData.releaseDate}`}</li>
                    <li>{`Duration: ${extraData && extraData.duration}`}</li>
                </div>
            </main>
        </>
    );
}

export default ExtraSongInfo;
