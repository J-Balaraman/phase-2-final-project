import React, { useState } from "react";
import NavBar from "./NavBar";
import SongCard from "./SongCard";

function DataForm(){
    const [title, setTitle] = useState('')
    const [artist, setArtist] = useState('')
    const [album, setAlbum] = useState('')
    const [genre, setGenre] = useState('')
    const [releaseDate, setReleaseDate] = useState('')
    const [duration, setDuration] = useState('')
    const [newSongEntry, setNewSongEntry] = useState([])
    const [songSubmitted, setSongSubmitted] = useState(false)

    function handleSubmit(e) {
        e.preventDefault();
        const songData = {
            title: title,
            artist: artist,
            album: album,
            genre: genre,
            releaseDate: releaseDate,
            duration: duration
        };

        fetch("http://localhost:6001/songs", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(songData),
        })
            .then((r) => r.json())
            .then((newSong) => {
                setTitle("");
                setArtist("");
                setAlbum("");
                setGenre("");
                setReleaseDate("");
                setDuration("");
                setNewSongEntry(newSong)
                setSongSubmitted(true)
            })
    }

    return (
        <>
            <header>
                <NavBar />
            </header>
            <div className="new-song-form">
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="title"
                        placeholder="Song"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <input
                        type="text"
                        name="artist"
                        placeholder="Artist"
                        value={artist}
                        onChange={(e) => setArtist(e.target.value)}
                    />
                    <input
                        type="text"
                        name="album"
                        placeholder="Album"
                        value={album}
                        onChange={(e) => setAlbum(e.target.value)}
                    />
                    <input
                        type="text"
                        name="genre"
                        placeholder="Genre"
                        value={genre}
                        onChange={(e) => setGenre(e.target.value)}
                    />
                    <input
                        type="text"
                        name="releaseDate"
                        placeholder="Release Date"
                        value={releaseDate}
                        onChange={(e) => setReleaseDate(e.target.value)}
                    />
                    <input
                        type="text"
                        name="duration"
                        placeholder="Duration"
                        value={duration}
                        onChange={(e) => setDuration(e.target.value)}
                    />
                    <button type="submit">Submit</button>
                </form>
                {songSubmitted ? (
                    <div className="new-song-info">
                        <h2>New Song Information:</h2>
                        <SongCard songs={[newSongEntry]} />
                    </div>
                ) : null}
            </div>
        </>
    )
}

export default DataForm;