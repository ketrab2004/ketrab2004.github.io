import React, { ReactElement, useEffect } from "react";
import type { NextPage } from "next";
import { NextSeo, BreadcrumbJsonLd } from "next-seo";

import { ProjectItem } from "@components";
import { useSearchContext } from "@context";
import { ProjectsLayout } from "@layouts";

// import { useTranslation } from "react-i18next";
import { II18nProp, getStaticPaths, makeStaticProps } from "~/functions/getStaticLocales";

export {getStaticPaths}
export function getStaticProps(props: II18nProp) {
    return makeStaticProps(["common"])(props);
}

export const ProjectsPage: NextPage & { getLayout: (page: ReactElement) => JSX.Element } = () => {
    const ctx = useSearchContext();
    const projects = ctx.projects;

    const onKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
            console.log("Escape", ctx);
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
                projects.map((project, i) => {
                    return {
                        position: i + 1,
                        name: project.title,
                        item: `/projects/${project.key}`
                    };
                })
            }

            scriptId="breadcrumb-json-ld"
            key="JsonLd"
        />

        <main className="px-5 pb-5">
            <h1 className="text-3xl mb-2">Projects: {ctx.search.query}</h1>
            
            <div className="grid gap-4 xl:gap-5 2xl:gap-7 3xl:gap-12 4xl:gap-36 content-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                {/* loop through Projects and render them inside ProjectItems */}
                {projects.map(project => <ProjectItem key={project.key} url={`/projects/${project.key}`} project={project} />)}

                {projects.length <= 0 ? // if no projects found
                    <p>No results found...</p> :
                    null}
            </div>
        </main>
    </>;
}

ProjectsPage.getLayout = ProjectsLayout;

export default ProjectsPage;
