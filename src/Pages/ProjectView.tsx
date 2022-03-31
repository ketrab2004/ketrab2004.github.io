import React from "react";
import Error404 from "./404";
import { useParams } from "react-router-dom"
import Projects from "../Data/Projects/module";

function ProjectView(): JSX.Element {
    const params = useParams();
    const project = Projects[params.project ?? ''];

    if (!project) return <Error404 />;

let {title/*, thumbnail, date, type, system, languages, tools*/} = project;
    //let tags = [type, system, ...languages, ...tools];

    return (
        <main>
            <h1 className="text-3xl mb-2">{title}</h1>
            
        </main>
    );
}

export default ProjectView;
