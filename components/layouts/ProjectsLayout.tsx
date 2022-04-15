import { ReactElement, useState } from "react";
import { Navbar } from "@components";
import { SearchContext, useSearchContext, getSCProjects } from "@context";
import { ISearchInfo, OrderEnum } from "@data/search";
import { applySearch } from "@functions";
import { format as formatDate } from "date-fns";

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
                        <div className="flex flex-col
                            absolute left-0 z-10
                            w-full mt-2 p-2 pl-4
                            bg-white shadow-md">

                            <div className="pb-2"> {/* show highlighted projects only */}
                                <input type="checkbox" id="highlighted-only" name="highlighted-only" defaultChecked />
                                <label htmlFor="highlighted-only" className="pl-2 select-none">Show highlighted only</label>
                            </div>

                            {/* ordering */}
                            <div className="flex flex-row pb-2">
                                <div className="flex flex-col justify-start"> {/* choose order by */}
                                    <label htmlFor="order-by">Order by</label>
                                    <select className="border rounded" id="order-by" name="order-by">
                                        {Object.keys(OrderEnum).map(key => <option value={key}>{key.toLowerCase()}</option>)}
                                    </select>
                                </div>
                                <div className="flex flex-col justify-start ml-4"> {/* choose order by direction */}
                                    <label htmlFor="is-asc">Direction</label>
                                    <select className="border rounded" id="is-asc" name="is-asc">
                                        <option value="false">Descending</option>
                                        <option value="true">Ascending</option>
                                    </select>
                                </div>
                            </div>

                            {/* date filtering */}
                            <div className="flex flex-row justify-between pb-2">
                                <div className="flex flex-col justify-start">
                                    <label htmlFor="date-after">After</label>
                                    <input type="date" id="date-after" name="date-after" className="border rounded max-w-min"
                                        min={new Date("2016").toLocaleDateString("en-ca") /* https://stackoverflow.com/a/49916376 */}
                                        max={new Date().toLocaleDateString("en-ca")}/>
                                </div>
                                <div className="flex flex-col justify-start">
                                    <label htmlFor="date-before">Before</label>
                                    <input type="date" id="date-before" name="date-before" className="border rounded max-w-min"
                                        min={new Date("2016").toLocaleDateString("en-ca")}
                                        max={new Date().toLocaleDateString("en-ca")} />
                                </div>
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
