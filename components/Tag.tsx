import React from "react";
import Link from "next/link";
import Image from "next/image";

import { GetTagInfo } from "@data/tags";
import { ColourFromNumber } from "@functions";

import { Language, Tool, System, Type } from "@data/tags";

export function TagItem({name, to}: {name: Language|Tool|System|Type, to?: string}): JSX.Element {
    const {displayName, backgroundColor, textColor, borderColor, icon} = GetTagInfo(name);

    return (
        <li className="inline-flex items-center p-0.5 rounded shadow border-2" style={{
                backgroundColor: ColourFromNumber(backgroundColor),
                color: ColourFromNumber(textColor),
                borderColor: ColourFromNumber(borderColor)
            }}>
            {icon ? <Image className="h-4 pr-1" alt={displayName} src={icon} /> : null}

            {to ? // if to is set
            <Link href={to}> {/* render a link */}
                <a className="text-sm">
                    {displayName}
                </a>
            </Link> :

            <p className="text-sm"> {/* else render a p */}
                {displayName}
            </p>}
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
