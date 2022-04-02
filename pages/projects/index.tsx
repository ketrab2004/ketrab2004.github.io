import React from "react";
import { Projects } from "@data/projects";
import { ProjectItem } from "@components";
import { NextPageContext } from "next";

export class ProjectsPage extends React.Component<{projects: typeof Projects}> {
    static async getInitialProps(ctx: NextPageContext): Promise<any> {
        return { projects: Projects };
    }

    render(): JSX.Element {
        console.log("ProjectsPage render", this.props.projects);

        return (
            <main className="px-5">
                <h1 className="text-3xl mb-2">Projects:</h1>
                
                <div className="grid gap-4 xl:gap-5 2xl:gap-7 3xl:gap-12 4xl:gap-36 content-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                    {/* loop through Projects and render them inside ProjectItems */}
                    {Object.keys(this.props.projects).map(key => <ProjectItem key={key} url={key} project={this.props.projects[key]} />)}
                </div>
            </main>
        );
    }
}

// export async function getStaticProps(ctx: NextPageContext): Promise<any> {
//     console.log("ProjectsPage getInitialProps", ctx.query);
    
//     let projects = Projects;
//     console.log("ProjectsPage getInitialProps", projects, Projects);
    
//     return { props: {
//         projects
//     }};
// }

export default ProjectsPage;
