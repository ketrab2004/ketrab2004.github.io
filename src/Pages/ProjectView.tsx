import React from "react";
import Error404 from "./404";
import { useParams } from "react-router-dom"
import Projects from "../Data/module";

function ProjectView(): JSX.Element {
    const params = useParams();
    const project = Projects[params.project ?? ''];

    let {title, thumbnail, date, tags} = project;

    return project ? (
        <main>
            <h1>{title}</h1>
            
        </main>
    ) : <Error404 />;
}

export default ProjectView;
