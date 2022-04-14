import { ReactElement, useState } from "react";
import { Navbar } from "@components";
import { SearchContext, useSearchContext, getSCProjects, SCProject } from "@context";
import { ISearchInfo, ISearchHolder } from "@data/search";

export default function ProjectsLayout(page: ReactElement) {
    const searchContext = useSearchContext();
    const [search, _setSearch] = useState<ISearchInfo>(searchContext.search);

    const applySearch = (): SCProject[] => {
        let toReturn = getSCProjects().map((project) => { // map SCProject[] to ISearchHolder[]
            return {
                project: project,
            } as ISearchHolder;
        });

        if (search.query == "bb") toReturn.shift();

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
