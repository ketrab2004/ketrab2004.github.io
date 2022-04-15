import { ReactElement, useState } from "react";
import { Navbar } from "@components";
import { SearchContext, useSearchContext, getSCProjects } from "@context";
import { ISearchInfo } from "@data/search";
import { applySearch } from "@functions";

export default function ProjectsLayout(page: ReactElement) {
    const searchContext = useSearchContext();
    const [search, _setSearch] = useState<ISearchInfo>(searchContext.search);

    const doSearch = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault(); // prevent submitting form

        const eventForm = event.target as HTMLElement; // cast to HTMLElement, so you can use querySelector

        _setSearch({...search, // keep old search info
            query: (eventForm.querySelector("input[name=search]") as HTMLInputElement) // cast to HTMLInputElement so you can use value
                    .value ?? '' // value or empty string
        });
    }

    // toggle the filter element
    const toggleFilter = () => {
        document.getElementById("search-filters")?.classList.toggle("hidden");
    }

    return (
        <SearchContext.Provider value={{projects: applySearch(getSCProjects(), search), search}}>
            <Navbar>
                <form className="flex flex-col justify-center font-nunito text-sm" onSubmit={doSearch}>
                    <div className="flex items-center pl-4">
                        <input name="search" className="rounded-md shadow-inner inset-4 border-gray-200 border p-1 mr-2" />
                        <button onClick={toggleFilter} className="
                            rounded-md bg-sky-600 px-3 py-2 transition-colors text-white
                            hover:bg-blue-700
                            ring-blue-600 ring-opacity-25 active:ring-2" type="button">Filters</button>
                    </div>

                    <div className="relative hidden" id="search-filters">
                        <div className="flex
                            absolute left-0 z-10
                            w-full mt-2 py-2 pl-4
                            bg-white shadow-md">

                            <div> {/* show highlighted projects only */}
                                <input type="checkbox" id="highlighted-only" name="highlighted-only" defaultChecked />
                                <label htmlFor="highlighted-only" className="pl-2 select-none">Show highlighted only</label>
                            </div>
                        </div>
                    </div>
                </form>
            </Navbar>
            {page}
            {/* footer */}
        </SearchContext.Provider>
    );
}
