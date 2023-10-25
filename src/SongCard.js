import React from "react";
import { Link } from 'react-router-dom';

function SongCard({ songs }) {
    return (
        <ul className="song-list">
            {songs.map((song) => (
                <li key={song.id}>
                    <h3>{song.title}</h3>
                    <Link to={`/songs/${song.title}`}>More Info</Link>
                </li>
            ))}
        </ul>
    );
}

export default SongCard;
