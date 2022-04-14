import { createContext, useContext } from "react";
import Projects, { IProject } from "@data/projects";
import { ISearchInfo } from "@data/search";

export type SortableProjectList = (IProject & {key: string})[]; // array of IProjects, but with keys

export function getDefaultProjects(): SortableProjectList {
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
        highlighted: true
    } as ISearchInfo
});

export function useSearchContext() {
    return useContext(SearchContext);
}

export default SearchContext;
