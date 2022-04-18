import React from "react";
import type { NextPage } from "next";
import { GetStaticPropsResult, GetStaticPathsResult } from "next";
import { NextSeo, ProductJsonLd } from "next-seo";
import Projects, { IProject } from "@data/projects";

// import { useTranslation } from "react-i18next";
import { II18nProp, getStaticPaths as getStaticI18nPaths, makeStaticProps } from "~/functions/getStaticLocales";

/**
 * get json for each static project page
 * so that it can be loaded in in the statically generated pages
 */
export function getStaticProps(props: { params: { project: string } } & II18nProp): GetStaticPropsResult<{ project: string /* JSON */ }> {
    const project = JSON.stringify( Projects[props.params.project] );

    return {
        ... makeStaticProps(["common"])(props), // add language static props
        props: {
            project
        }
    };
}

/**
 * get all possible projects 
 * so they can be statically rendered
 */
export function getStaticPaths(): GetStaticPathsResult {
    let paths: ({ params: { project: string } } & II18nProp)[] = [];

    getStaticI18nPaths().paths.forEach(i18nPath => { // loop through languages
        Object.keys(Projects).forEach(project => { // loop through projects

            paths.push({ // add a path for every language/project combination
                params: {
                    project: project,

                    // get locale from params, because getStaticI18nPaths() can be used standalone
                    locale: i18nPath.params.locale
                }
            })

        });
    });

    return {
        paths: paths,
        fallback: false,
    }
}

export const ProjectView: NextPage<{ project: string }> = (params: { project: string }) => {
    let {title, thumbnail, date, type, system, languages, tools} = JSON.parse(params.project);
    date = new Date(date); // convert json string to date object
    const tags = [type, system, ...languages, ...tools];

    return <>
        <NextSeo
            title={ title }
            description={ `Project page for \`${title}\`` }

            openGraph={{
                type: "article",
                title: title,
                description: `Project page for \`${title}\``,
                article: {
                    publishedTime: date.toISOString(),
                    section: type, // mod, game, etc.
                    tags: tags
                },
                images: [
                    {
                        url: thumbnail,
                        alt: title
                    }
                ]
            }}
            twitter={{ cardType: 'summary_large_image' }} // big image on twitter for the individual project page
        />
        <ProductJsonLd
            productName={ title }
            description={ `Project page for \`${title}\`` }
            brand={ type }
            images={ [thumbnail] }
            releaseDate={ date.toISOString() }
            manufacturerName="Bartek Oskam"
        />

        <main>
            <h1 className="text-3xl mb-2">{title}</h1>
            
        </main>
    </>;
}


export default ProjectView;
