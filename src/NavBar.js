import React from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";

function NavBar(){
    return (
        <nav className="navbar" >
            <NavLink to='/' >
                Home
            </NavLink>
            <NavLink to='/songs' >
                Songs
            </NavLink>
            <NavLink to='/reviews' >
                Leave A Review
            </NavLink>
        </nav>
    )
}

export default NavBar;