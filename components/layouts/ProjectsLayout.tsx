import { ReactElement, useState } from "react";
import { Navbar } from "@components";
import { SearchContext, useSearchContext, getSCProjects, SCProject } from "@context";
import { ISearchInfo, ISearchHolder, OrderEnum } from "@data/search";

import { distance as levenshteinDistance } from "fastest-levenshtein";

export default function ProjectsLayout(page: ReactElement) {
    const searchContext = useSearchContext();
    const [search, _setSearch] = useState<ISearchInfo>(searchContext.search);

    const applySearch = (): SCProject[] => {
        let toReturn = getSCProjects().map((project) => { // map SCProject[] to ISearchHolder[]
            return {
                project: project,
            } as ISearchHolder;
        });

        let scoreFunction: (project: ISearchHolder) => number;
        switch (search.order ?? OrderEnum.NAME) { // apply search scores based on chosen order
            case OrderEnum.DATE:
                scoreFunction = (project: ISearchHolder) => project.project.date.getTime();
                break;

            case OrderEnum.NAME:
            default: // default is order by name
                scoreFunction = search.query == '' ? // if no query
                    () => 0 : // always return 0
                    (project: ISearchHolder) => { // when there is a query, return lowercased weighted levenshtein distance
                        return levenshteinDistance(search.query.toLowerCase(), project.project.title.toLowerCase())
                        / Math.max(search.query.length, project.project.title.length);
                    }
                break;
        }

        // apply chosen scoreFunction
        toReturn.forEach((item) => {
            item.relevance = scoreFunction(item);
        });

        // sort by relevance
        toReturn.sort(
            search.orderAsc ?? false ?
                (a, b) => (b.relevance ?? 0) - (a.relevance ?? 0) : // ascending
                (a, b) => (a.relevance ?? 0) - (b.relevance ?? 0) // descending
        );
        
        console.log(toReturn);
        
        return toReturn.map((projectHolder) => {
            return projectHolder.project;
        });
    }

    const doSearch = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault(); // prevent submitting form

        const eventForm = event.target as HTMLElement; // cast to HTMLElement, so you can use querySelector
    
        _setSearch({...search, // keep old search info
            query: (eventForm.querySelector("input[name=search]") as HTMLInputElement) // cast to HTMLInputElement so you can use value
                    .value ?? '' // value or empty string
        });
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
