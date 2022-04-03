import React from "react";
import Projects, { IProject } from "@data/projects";
import { GetStaticPropsResult, GetStaticPathsResult } from "next";

export function ProjectView(params: { project: string }): JSX.Element {
    const {title/*, thumbnail, date, type, system, languages, tools*/}: IProject = JSON.parse(params.project);
    //let tags = [type, system, ...languages, ...tools];

    return (
        <main>
            <h1 className="text-3xl mb-2">{title}</h1>
            
        </main>
    );
}

/**
 * get json for each static project page
 * so that it can be loaded in in the statically generated pages
 */
export function getStaticProps(props: { params: { project: string } }): GetStaticPropsResult<{ project: string /* JSON */ }> {
    const project = JSON.stringify( Projects[props.params.project] );

    return { props: { project } };
}

/**
 * get all possible projects 
 * so they can be statically rendered
 */
export function getStaticPaths(): GetStaticPathsResult {
    return {
        paths: Object.keys(Projects).map(key => ({ params: { project: key } })),
        fallback: false,
    }
}

export default ProjectView;
