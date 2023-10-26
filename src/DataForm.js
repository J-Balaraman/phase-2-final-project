import React, { useState } from "react";
import "./DataForm.css"

function DataForm({onAddSong}){
    const [title, setTitle] = useState('')
    const [artist, setArtist] = useState('')
    const [album, setAlbum] = useState('')
    const [genre, setGenre] = useState('')
    const [releaseDate, setReleaseDate] = useState('')
    const [duration, setDuration] = useState('')

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
                onAddSong(newSong)
            })
    }

    return (
        <main>
        <h2>Add A Song</h2>
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
            </div>
        </main>
    )
}

export default DataForm;