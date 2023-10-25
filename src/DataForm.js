import React, { useState } from "react";
import NavBar from "./NavBar";

function DataForm(){
    
    const [title, setTitle] = useState('')
    return (
        <>
            <header>
                <NavBar />
            </header>
            <div className="new-song-form">
                <form>
                    <input
                        type="text"
                        name="title"
                        placeholder="Song"
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <input
                        type="text"
                        name="artist"
                        placeholder="Artist"
                        /*onChange={(e) => setSong(e.target.value)}*/
                    />
                    <input
                        type="text"
                        name="album"
                        placeholder="Album"
                        /*onChange={(e) => setSong(e.target.value)}*/
                    />
                    <input
                        type="text"
                        name="genre"
                        placeholder="Genre"
                        /*onChange={(e) => setSong(e.target.value)}*/
                    />
                    <input
                        type="text"
                        name="release-date"
                        placeholder="Release Date"
                        /*onChange={(e) => setSong(e.target.value)}*/
                    />
                    <input
                        type="text"
                        name="duration"
                        placeholder="Duration"
                        /*onChange={(e) => setSong(e.target.value)}*/
                    />
                </form>
            </div>
        </>
    )
}

export default DataForm;