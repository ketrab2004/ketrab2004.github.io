import { GetStaticPathsResult } from "next";
import Projects from "@data/projects";
import { Redirect } from "@components";

export default Redirect;

/**
 * get all possible projects
 * so they can be statically rendered
 */
export function getStaticPaths(): GetStaticPathsResult {
    return {
        paths: Object.keys(Projects).map(project => ({ params: { project } })),
        fallback: false,
    }
}

/**
 * get json for each static project page
 * so that it can be loaded in in the statically generated pages
 */
export function getStaticProps(props: { params: { project: string } }) {
    const project = JSON.stringify( Projects[props.params.project] );

    return {
        props: {
            project
        }
    };
}
