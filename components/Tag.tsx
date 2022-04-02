import React from "react";

import { GetTagInfo } from "@data/tags";
import { ColourFromNumber } from "@functions";

import { Link } from 'react-router-dom';
import { Language, Tool, System, Type } from "@data/tags";

export function TagItem({name, to}: {name: Language|Tool|System|Type, to?: string}): JSX.Element {
    const Clickable = to ? Link : "a";

    const {displayName, backgroundColor, textColor, borderColor, icon} = GetTagInfo(name);

    return (
        <li className="inline-flex items-center p-0.5 rounded shadow border-2" style={{
                backgroundColor: ColourFromNumber(backgroundColor),
                color: ColourFromNumber(textColor),
                borderColor: ColourFromNumber(borderColor)
            }}>
            {icon ? <img className="h-4 pr-1" src={icon} /> : null}

            <Clickable to={to ?? ''} className="text-sm">
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
