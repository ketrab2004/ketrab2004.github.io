import React from "react";
import { useLocation } from "react-router-dom"

function ProjectView() {
    const location = useLocation();
    const path = decodeURI( location.pathname.match(/.+[\\/]([^/\\]+?)[\\/]*$/)[1] ?? '' ); // get info after last slash using regex

    console.log(location);
    console.log(path);

    return (
        <main className="ProjectView">
            <h1>Detailed view of a project page</h1>
            <h2>{path}</h2>
        </main>
    );
}

export default ProjectView;
