import { ReactElement, useState } from "react";
import { Navbar } from "@components";
import { SearchContext, useSearchContext, getSCProjects } from "@context";
import { ISearchInfo, OrderEnum } from "@data/search";
import { applySearch } from "@functions";


// https://stackoverflow.com/a/68253165
interface IFormElementCollection extends HTMLFormControlsCollection {
    search: HTMLInputElement,
    highlightedOnly: HTMLInputElement,

    orderBy: HTMLSelectElement,
    orderDir: HTMLSelectElement,

    afterDate: HTMLInputElement,
    beforeDate: HTMLInputElement,
}
interface IFormInfo extends HTMLFormElement { readonly elements: IFormElementCollection }


export default function ProjectsLayout(page: ReactElement) {
    const searchContext = useSearchContext();
    const [search, _setSearch] = useState<ISearchInfo>(searchContext.search);

    console.log(search);

    const doSearch = (event: React.FormEvent<IFormInfo>) => {
        event.preventDefault(); // prevent submitting form

        const elements = event.currentTarget.elements;

        _setSearch({...search, // keep old search info
            query: elements.search.value ?? search.query,
            highlighted: elements.highlightedOnly.checked ?? search.highlighted,

            order: elements.orderBy.value as OrderEnum ?? search.order,
            orderAsc: elements.orderDir.value == "true" ?? search.orderAsc,

            afterDate: elements.afterDate.valueAsDate ?? undefined,
            beforeDate: elements.beforeDate.valueAsDate ?? undefined
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
                                <input type="checkbox" id="highlightedOnly" name="highlightedOnly" defaultChecked />
                                <label htmlFor="highlightedOnly" className="pl-2 select-none">Show highlighted only</label>
                            </div>

                            {/* ordering */}
                            <div className="flex flex-row pb-2">
                                <div className="flex flex-col justify-start"> {/* choose order by */}
                                    <label htmlFor="orderBy">Order by</label>
                                    <select className="border rounded" id="orderBy" name="orderBy">
                                        {Object.keys(OrderEnum).map(key => <option value={key}>{key.toLowerCase()}</option>)}
                                    </select>
                                </div>
                                <div className="flex flex-col justify-start ml-4"> {/* choose order by direction */}
                                    <label htmlFor="orderDir">Direction</label>
                                    <select className="border rounded" id="orderDir" name="orderDir">
                                        <option value="false">Descending</option>
                                        <option value="true">Ascending</option>
                                    </select>
                                </div>
                            </div>

                            {/* date filtering */}
                            <div className="flex flex-row justify-between pb-2">
                                <div className="flex flex-col justify-start">
                                    <label htmlFor="afterDate">After</label>
                                    <input type="date" id="afterDate" name="afterDate" className="border rounded max-w-min"
                                        min={new Date("2016").toLocaleDateString("en-ca") /* https://stackoverflow.com/a/49916376 */}
                                        max={new Date().toLocaleDateString("en-ca")}/>
                                </div>
                                <div className="flex flex-col justify-start">
                                    <label htmlFor="beforeDate">Before</label>
                                    <input type="date" id="beforeDate" name="beforeDate" className="border rounded max-w-min"
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
