import React from "react";
import Error404 from "./404";
import { useParams } from "react-router-dom"

function ProjectView(): JSX.Element {
    const params = useParams();
    const project = params.project;

    const projectExists = false;

    return projectExists ? (
        <main className="ProjectView">
            <h1>Detailed view of a project page</h1>
            <h2>{project}</h2>
        </main>
    ) : <Error404 />;
}

export default ProjectView;
