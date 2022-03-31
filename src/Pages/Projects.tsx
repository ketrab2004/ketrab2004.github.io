import React from "react";
import { Projects } from "@data/projects";
import ProjectItem from "@components/ProjectItem";

function ProjectsPage(): JSX.Element {
    return (
        <main className="px-5">
            <h1 className="text-3xl mb-2">Projects:</h1>
            
            <div className="gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                {/* loop through Projects and render them inside ProjectItems */}
                {Object.keys(Projects).map(key => <ProjectItem key={key} url={key} project={Projects[key]} />)}
            </div>
        </main>
    );
}

export default ProjectsPage;
