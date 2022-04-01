import React from "react";
import { Projects } from "@data/projects";
import { ProjectItem } from "@components";

export function ProjectsPage(): JSX.Element {
    return (
        <main className="px-5">
            <h1 className="text-3xl mb-2">Projects:</h1>
            
            <div className="grid gap-4 xl:gap-5 2xl:gap-7 3xl:gap-12 4xl:gap-36 content-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                {/* loop through Projects and render them inside ProjectItems */}
                {Object.keys(Projects).map(key => <ProjectItem key={key} url={key} project={Projects[key]} />)}
            </div>
        </main>
    );
}

export default ProjectsPage;
