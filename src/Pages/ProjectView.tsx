import React from "react";
import Error404 from "./404";
import { useParams } from "react-router-dom"
import Projects from "../Data/module";

function ProjectView(): JSX.Element {
    const params = useParams();
    const project = Projects[params.project ?? ''];

    if (!project) return <Error404 />;

    let {title, thumbnail, date, tags} = project;

    return (
        <main>
            <h1>{title}</h1>
            
        </main>
    );
}

export default ProjectView;
