import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

export function NavbarItem({href, children}: {href: string, children?: React.ReactNode}): JSX.Element {
    const router = useRouter();

    return (
        <li className="p-5">
            <Link href={href}>
                <a
                className={
                "p-5 text-black hover:opacity-80 transition-opacity ease-in-out duration-200" // default classes
                + (router.pathname == href ? // if current page
                    " italic" : // current page classes
                    '')
                }>
                    {children}
                </a>
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

