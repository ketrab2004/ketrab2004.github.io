import React from "react";
import type { NextPage } from "next";
import { useRouter } from 'next/router'

import { Projects } from "@data/projects";
import { ProjectItem } from "@components";
import { NextSeo, BreadcrumbJsonLd } from "next-seo";
import { useState, useEffect } from "react";

export const ProjectsPage: NextPage = () => {
    const router = useRouter();

    // declare a stateVariable for the projects
    const [projects, _setProjects] = useState<typeof Projects>(Projects);

    const onKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
            console.log("Escape");
        }
    }

    // register an effect
    useEffect(() => {
        // setup of the effect
        window.addEventListener("keydown", onKeyDown);

        // cleanup function for the effect
        return () => window.removeEventListener("keydown", onKeyDown);
    })

    return <>
        <NextSeo
            title="Projects"
            description="A collection of projects from Bartek Oskam"
        />
        <BreadcrumbJsonLd
            itemListElements={
                Object.keys(projects).map((projectKey, i) => {
                    return {
                        position: i + 1,
                        name: projects[projectKey].title,
                        item: `/projects/${projectKey}`
                    };
                })
            }

            scriptId="breadcrumb-json-ld"
            key="JsonLd"
        />

        <main className="px-5 pb-5">
            <h1 className="text-3xl mb-2">Projects:</h1>
            
            <div className="grid gap-4 xl:gap-5 2xl:gap-7 3xl:gap-12 4xl:gap-36 content-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                {/* loop through Projects and render them inside ProjectItems */}
                {Object.keys(projects).map(key => <ProjectItem key={key} url={`/projects/${key}`} project={projects[key]} />)}

                {Object.keys(projects).length <= 0 ? // if no projects found
                    <p>No results found...</p> :
                    null}
            </div>
        </main>
    </>;
}

export default ProjectsPage;
