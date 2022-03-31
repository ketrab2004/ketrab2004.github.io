import React from "react";

import CapitalizeWords from "../functions/CapitalizeWords";

import { Link } from 'react-router-dom';
import { Language, Tool, System, Type } from "../Data/Tags/module";

export function TagItem({name, to}: {name: Language|Tool|System|Type, to?: string}): JSX.Element {
    const Clickable = to ? Link : "a";
    return (
        <li className="inline-block p-1 bg-sky-500 rounded shadow">
            <Clickable to={to ?? ''}>
                {CapitalizeWords(name)}
            </Clickable>
        </li>
    );
}

export function TagsHolder({children, className}: {children: JSX.Element[], className?: string}): JSX.Element {
    return (
        <ul className={`flex flex-wrap ${className ?? ''}`}>
            {children}
        </ul>
    );
}
