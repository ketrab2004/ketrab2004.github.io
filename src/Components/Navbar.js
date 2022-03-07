import React from "react";

import '../css/Navbar.css';

function Navbar(props) {
    return (
        <div className="Navbar">
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/contact">Contact</a></li>
                <li><a href="/projects">Projects</a></li>
            </ul>
        </div>
    );
}

export default Navbar;

