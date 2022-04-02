import React from "react";

import Link from "next/link";

export function NavbarItem({href, children}: {href: string, children?: React.ReactNode}): JSX.Element {
    return (
        <li className="p-5">
            <Link href={href} 
                // className={({isActive}) =>
                // "p-5 text-black hover:opacity-80 transition-opacity ease-in-out duration-200" + // default classes
                // (isActive ?
                //     " italic" : // current page classes
                //     " ") // not current page classes
                // }
                >
                
                {children}
            </Link>
        </li>
    );
}

export function Navbar(): JSX.Element {
    return (
        <header className="Navbar font-sans shadow mb-2 bg-white">
            <ul className="list-none flex flex-row flex-nowrap justify-end">
                <NavbarItem href="/">Home</NavbarItem>
                <NavbarItem href="/contact">Contact</NavbarItem>
                <NavbarItem href="/projects">Projects</NavbarItem>
            </ul>
        </header>
    );
}

export default Navbar;

