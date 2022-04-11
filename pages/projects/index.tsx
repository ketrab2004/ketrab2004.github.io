import React, { ReactElement, createContext, useContext } from "react";
import type { NextPage } from "next";

import { Projects } from "@data/projects";
import type { ISearchInfo } from "@data/search";
import { ProjectItem, Navbar } from "@components";
import { NextSeo, BreadcrumbJsonLd } from "next-seo";
import { useState, useEffect } from "react";

export const ProjectsPage: NextPage & { getLayout: Function } = () => {
    // declare a stateVariable for the projects
    // const [projects, _setProjects] = useState<typeof Projects>(Projects);
    const ctx = useContext(SearchContext);
    const projects = ctx.projects;

    // console.log(ctx);
    

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
            <h1 className="text-3xl mb-2">Projects: {ctx.search.query}</h1>
            
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

// create context for search data and projects list with default data
const SearchContext = createContext({projects: Projects, search: {query: "", highlighted: true} as ISearchInfo});

ProjectsPage.getLayout = (page: ReactElement) => {
    const [search, _setSearch] = useState<ISearchInfo>(useContext(SearchContext).search);

    function applySearch(): typeof Projects {
        let toReturn = {...Projects}; // copy (not deep), so delete doesn't change Projects

        if (search.query == "bb") delete toReturn["cardboard-mod"];

        return toReturn;
    }

    function doSearch(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault(); // prevent submitting form
    
        _setSearch({...search, query: "bb"});

        console.log(event);
        console.log(event.target);
    }

    return (
        <SearchContext.Provider value={{projects: applySearch(), search}}>
            <Navbar>
                <form className="flex items-center font-nunito text-sm ml-4" onSubmit={doSearch}>
                    <input name="search" className="rounded-md border-black border p-1 mr-2" />
                    <button className="
                        rounded-md bg-sky-600 px-3 py-2 transition-colors text-white
                        hover:bg-blue-700
                        ring-blue-600 ring-opacity-25 active:ring-2" type="button">Filters</button>
                </form>
            </Navbar>
            {page}
            {/* footer */}
        </SearchContext.Provider>
    );
}

export default ProjectsPage;
