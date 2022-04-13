import { createContext, useContext } from "react";
import Projects from "@data/projects";
import { ISearchInfo } from "@data/search";

// create context for search data and projects list with default data
export const SearchContext = createContext({
    projects: Projects,
    search: {
        query: "",
        highlighted: true
    } as ISearchInfo
});

export function useSearchContext() {
    return useContext(SearchContext);
}

export default SearchContext;
