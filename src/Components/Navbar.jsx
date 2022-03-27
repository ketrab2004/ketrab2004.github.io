import React from "react";

import { NavLink } from 'react-router-dom';

function NavbarItem(props) {
    return (
        <li className="p-5">
            <NavLink to={props.to} className={({isActive}) =>
                "p-5 text-black hover:opacity-80 transition-opacity ease-in-out duration-200" + // default classes
                (isActive ?
                    " italic" : // current page classes
                    " ") // not current page classes
                }>
                
                {props.children}
            </NavLink>
        </li>
    );
}

function Navbar(props) {
    return (
        <header className="Navbar font-sans shadow mb-2 bg-white">
            <ul className="list-none flex flex-row flex-nowrap justify-end">
                <NavbarItem to="/">Home</NavbarItem>
                <NavbarItem to="/contact">Contact</NavbarItem>
                <NavbarItem to="/projects">Projects</NavbarItem>
            </ul>
        </header>
    );
}

export default Navbar;

