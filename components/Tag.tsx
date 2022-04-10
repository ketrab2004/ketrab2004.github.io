import React from "react";
import Link from "next/link";
// import Image from "next/image";

import { GetTagInfo } from "@data/tags";
import { ColourFromNumber } from "@functions";

import { Language, Tool, System, Type } from "@data/tags";

interface ITagItemProps {
    name: Language|Tool|System|Type,
    to?: string,
    className?: string,
    isntInList?: boolean
}

export function TagItem({name, to, className, isntInList}: ITagItemProps): JSX.Element {
    const {displayName, backgroundColor, textColor, borderColor, icon} = GetTagInfo(name);

    const Item = isntInList ? "span" : "li";

    return (
        <Item className={`inline-flex items-center p-0.5 rounded shadow bg-gray-50 text-gray-500 border border-slate-100 ${className ?? ''}`}
            // style={{
            //     backgroundColor: ColourFromNumber(backgroundColor),
            //     color: ColourFromNumber(textColor),
            //     borderColor: ColourFromNumber(borderColor)
            // }}
            >
            {/* {icon ? <img className="h-4 pr-1" alt={displayName} src={icon} /> : null} */}

            {to ? // if to is set
            <Link href={to}> {/* render a link */}
                <a className="text-sm">
                    {displayName}
                </a>
            </Link> :

            <p className="text-sm"> {/* else render a p */}
                {displayName}
            </p>}
        </Item>
    );
}

export function TagsHolder({children, className}: {children: JSX.Element[], className?: string}): JSX.Element {
    return (
        <ul className={`flex flex-wrap ${className ?? ''}`}>
            {children}
        </ul>
    );
}
