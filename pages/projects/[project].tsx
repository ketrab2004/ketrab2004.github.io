import React from "react";
import Projects, { IProject } from "@data/projects";
import ErrorPage from "next/error";
import { NextPageContext } from "next";

export class ProjectView extends React.Component<{project: IProject, statusCode?: number}> {
    // use getInitialProps instead of getStaticProps
    // because getStaticProps is for server-side rendering
    // and this site will be client-side rendered
    static async getInitialProps(ctx: NextPageContext): Promise<any> {
        const params: any = ctx.query;
        const project = Projects[params.project ?? ''];

        if (!project) return { statusCode: 404 };

        return { project };
    }

    render(): JSX.Element {
        if(this.props.statusCode) return <ErrorPage statusCode={this.props.statusCode} />;
        
        const {title/*, thumbnail, date, type, system, languages, tools*/} = this.props.project;
        //let tags = [type, system, ...languages, ...tools];

        return (
            <main>
                <h1 className="text-3xl mb-2">{title}</h1>
                
            </main>
        );
    }
}

export default ProjectView;
