import React from "react";

import { GetTagInfo } from "@data/tags";
import { ColourFromNumber } from "@functions";

import { Link } from 'react-router-dom';
import { Language, Tool, System, Type } from "@data/tags";

export function TagItem({name, to}: {name: Language|Tool|System|Type, to?: string}): JSX.Element {
    const Clickable = to ? Link : "a";

    const {displayName, backgroundColor, textColor, borderColor} = GetTagInfo(name);

    return (
        <li className="inline-block p-1 rounded shadow border-2" style={{
                backgroundColor: ColourFromNumber(backgroundColor ?? 0),
                color: ColourFromNumber(textColor ?? 0),
                borderColor: ColourFromNumber(borderColor ?? 0)
            }}>
            <Clickable to={to ?? ''}>
                {displayName}
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
