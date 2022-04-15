import { createContext, useContext } from "react";
import Projects, { IProject } from "@data/projects";
import { ISearchInfo, ISpecificSearchInfo, OrderEnum, TagSearchTypeEnum } from "@data/search";
import { Language, System, Tool, Type } from "@data/tags";

export type IterableProject = (IProject & {key: string}); // IProjects, but with keys

export function getDefaultProjects(): IterableProject[] {
    return Array.from(
        Object.entries(Projects), // entries in Projects [[key, value], [key, value], etc.]
        ([key, project]) => { // map object into sortable array (and add the keys to the values)
            return {
                ...project, // unload project into object to be returned
                key: key // add key to object
            };
        }
    );
}

// create context for search data and projects list with default data
export const SearchContext = createContext({
    projects: getDefaultProjects(),

    search: {
        query: "",
        highlighted: true,

        order: OrderEnum.SEARCH,
        orderAsc: false,

        type: {
            tags: [],
            mode: TagSearchTypeEnum.OR
        } as ISpecificSearchInfo<Type>,
        system: {
            tags: [],
            mode: TagSearchTypeEnum.OR
        } as ISpecificSearchInfo<System>,
        languages: {
            tags: [],
            mode: TagSearchTypeEnum.OR
        } as ISpecificSearchInfo<Language>,
        tools: {
            tags: [],
            mode: TagSearchTypeEnum.OR
        } as ISpecificSearchInfo<Tool>
    } as ISearchInfo
});

export function useSearchContext() {
    return useContext(SearchContext);
}

export default SearchContext;
