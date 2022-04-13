import { ReactElement, useState } from "react";
import { Navbar } from "@components";
import { SearchContext, useSearchContext } from "@context";
import Projects from "@data/projects";
import { ISearchInfo } from "@data/search";

export default function ProjectsLayout(page: ReactElement) {
    const [search, _setSearch] = useState<ISearchInfo>(useSearchContext().search);

    const applySearch = (): typeof Projects => {
        let toReturn = {...Projects}; // copy (not deep), so delete doesn't change Projects

        if (search.query == "bb") delete toReturn["cardboard-mod"];

        return toReturn;
    }

    const doSearch = (event: React.FormEvent<HTMLFormElement>) => {
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
