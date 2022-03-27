import React from "react";
import { useParams } from "react-router-dom"

function ProjectView(): JSX.Element {
    const params = useParams();
    const project = params.project;

    return (
        <main className="ProjectView">
            <h1>Detailed view of a project page</h1>
            <h2>{project}</h2>
        </main>
    );
}

export default ProjectView;
