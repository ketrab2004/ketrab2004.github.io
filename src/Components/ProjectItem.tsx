import React from "react";
import { Link } from 'react-router-dom';

import { IProject } from "../Data/module";

import { TagItem, TagsHolder } from "../Components/Tag";

export default function ProjectItem({url, project}: {url: string, project: IProject}): JSX.Element {
    const { title, thumbnail, date, state, type,system,languages,tools } = project;
    const tags = [type, system, ...languages, ...tools];

    return (
        <Link className="group
            shadow rounded overflow-hidden bg-white
            transition-shadow hover:shadow-lg active:shadow-lg focus:shadow-lg
            active:ring ring-sky-400 ring-opacity-25 md:ring-transparent"
            to={url} key={url}>

            <img className="w-full h-52 sm:h-36 object-cover" src={thumbnail} alt={title} />

            <div className="px-2 pt-1 pb-2">
                <h3 className="mb-1 text-xl sm:text-base">{title}</h3>
                <TagsHolder className="justify-evenly gap-x-2 gap-y-1">
                    {/* split tags array into TagItems */}
                    {tags.map(tag => <TagItem name={tag} />)}
                </TagsHolder>
            </div>
        </Link>
    );
}