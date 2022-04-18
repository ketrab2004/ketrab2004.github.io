import { ReactElement, useState } from "react";
import { Navbar } from "@components";
import Select from "react-select";
import { SearchContext, useSearchContext, getSCProjects } from "@context";
import { ISearchInfo, OrderEnum, TagSearchTypeEnum } from "@data/search";
import { applySearch, CapitalizeWords, getValuesOfReactSelect } from "@functions";
import { Language, Languages, System, Systems, Tool, Tools, Type, Types } from "@data/tags";


// https://stackoverflow.com/a/68253165
interface IFormElementCollection extends HTMLFormControlsCollection {
    search: HTMLInputElement,
    highlightedOnly: HTMLInputElement,

    orderBy: HTMLSelectElement,
    orderDir: HTMLSelectElement,

    afterDate: HTMLInputElement,
    beforeDate: HTMLInputElement,

    types: RadioNodeList,
    // typesMode: HTMLSelectElement,
    systems: RadioNodeList,
    // systemsMode: HTMLSelectElement,

    languages: RadioNodeList,
    languagesMode: HTMLSelectElement,

    tools: RadioNodeList,
    toolsMode: HTMLSelectElement
}
interface IFormInfo extends HTMLFormElement { readonly elements: IFormElementCollection }


export default function ProjectsLayout(page: ReactElement) {
    const searchContext = useSearchContext();
    const [search, _setSearch] = useState<ISearchInfo>(searchContext.search);

    const doSearch = (event: React.FormEvent<IFormInfo>) => {
        event.preventDefault(); // prevent submitting form

        const elements = event.currentTarget.elements;

        _setSearch({...search, // keep old search info
            query: elements.search.value ?? search.query,
            highlighted: elements.highlightedOnly.checked ?? search.highlighted,

            order: elements.orderBy.value as OrderEnum ?? search.order,
            orderAsc: elements.orderDir.value == "true" ?? search.orderAsc,

            afterDate: elements.afterDate.valueAsDate ?? undefined,
            beforeDate: elements.beforeDate.valueAsDate ?? undefined,

            type: {
                ...search.type, // keep old type search info
                tags: getValuesOfReactSelect(elements.types) as Type[] ?? search.type.tags
            },
            system: {
                ...search.system, // keep old system search info
                tags: getValuesOfReactSelect(elements.systems) as System[] ?? search.system.tags
            },
            languages: {
                ...search.languages, // keep old languages search info
                tags: getValuesOfReactSelect(elements.languages) as Language[] ?? search.languages.tags,
                mode: elements.languagesMode.value as TagSearchTypeEnum ?? search.languages.mode
            },
            tools: {
                ...search.tools, // keep old tools search info
                tags: getValuesOfReactSelect(elements.tools) as Tool[] ?? search.tools.tags,
                mode: elements.toolsMode.value as TagSearchTypeEnum ?? search.tools.mode
            }
        });
    }

    // toggle the filter element
    const toggleFilter = () => document.getElementById("search-filters")?.classList.toggle("hidden");

    return (
        <SearchContext.Provider value={{projects: applySearch(getSCProjects(), search), search}}>
            <Navbar>
                <form className="flex flex-col justify-center font-nunito text-sm" onSubmit={doSearch}>
                    <input type="submit" hidden />

                    <div className="flex items-center pl-4">
                        <input name="search" className="rounded-md shadow-inner inset-4 border-gray-200 border p-1 mr-2" />
                        <button onClick={toggleFilter} className="
                            rounded-md bg-sky-600 px-3 py-2 transition-colors text-white
                            hover:bg-blue-700
                            ring-blue-600 ring-opacity-25 active:ring-2" type="button">Filters</button>
                    </div>

                    <div className="relative hidden" id="search-filters">
                        <div className="flex flex-col space-y-3
                            absolute left-0 z-10
                            w-[150%] max-w-[100vw] mt-2 p-3 pl-4
                            rounded-br bg-white shadow-md">

                            {/* show highlighted projects only */}
                            <div>
                                <input type="checkbox" id="highlightedOnly" name="highlightedOnly" defaultChecked />
                                <label htmlFor="highlightedOnly" className="pl-2 select-none">Show highlighted only</label>
                            </div>

                            {/* ordering */}
                            <div className="flex flex-row">
                                <div className="flex flex-col justify-start"> {/* choose order by */}
                                    <label htmlFor="orderBy">Order by</label>
                                    <select className="border rounded" id="orderBy" name="orderBy">
                                        {Object.keys(OrderEnum).map(key => <option key={key} value={key}>{CapitalizeWords(key.toLowerCase())}</option>)}
                                    </select>
                                </div>
                                <div className="flex flex-col justify-start ml-4"> {/* choose order by direction */}
                                    <label htmlFor="orderDir">Direction</label>
                                    <select className="border rounded" id="orderDir" name="orderDir">
                                        <option title="from high to low" value="false">Descending</option>
                                        <option title="from low to high" value="true">Ascending</option>
                                    </select>
                                </div>
                            </div>

                            {/* date filtering */}
                            <div className="flex flex-row justify-between">
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

                            {/* select type tags */}
                            <div>
                                <label htmlFor="types">Types</label>
                                <Select className="rounded border" id="types" instanceId="types" name="types" isMulti options={
                                    Types.map(type => ({value: type, label: CapitalizeWords(type)}))
                                } />
                            </div>

                            {/* select system tags */}
                            <div>
                                <label htmlFor="systems">Systems</label>
                                <Select className="rounded border" id="systems" instanceId="systems" name="systems" isMulti options={
                                    Systems.map(system => ({value: system, label: CapitalizeWords(system)}))
                                } />
                            </div>

                            {/* select system tags */}
                            <div>
                            <div className="flex items-center justify-between">
                                    <label htmlFor="languages">Languages</label>

                                    <div>
                                        <label htmlFor="languagesMode">Mode</label>
                                        <select className="ml-2 rounded border" id="languagesMode" name="languagesMode">
                                            {Object.keys(TagSearchTypeEnum).map(key => <option key={key} value={key}>{CapitalizeWords(key.toLowerCase())}</option>)}
                                        </select>
                                    </div>
                                </div>
                                <Select className="rounded border" id="languages" instanceId="languages" name="languages" isMulti options={
                                    Languages.map(language => ({value: language, label: CapitalizeWords(language)}))
                                } />
                            </div>

                            {/* select system tags */}
                            <div>
                                <div className="flex items-center justify-between">
                                    <label htmlFor="tools">Tools</label>

                                    <div>
                                        <label htmlFor="toolsMode">Mode</label>
                                        <select className="ml-2 rounded border" id="toolsMode" name="toolsMode">
                                            {Object.keys(TagSearchTypeEnum).map(key => <option key={key} value={key}>{CapitalizeWords(key.toLowerCase())}</option>)}
                                        </select>
                                    </div>
                                </div>
                                <Select className="rounded border" id="tools" instanceId="tools" name="tools" isMulti options={
                                    Tools.map(tool => ({value: tool, label: CapitalizeWords(tool)}))
                                } />
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
