import { SCProject } from "@context";
import { ISearchHolder, ISearchInfo } from "@data/search";
import filterSearchHolders from "./filterSearchHolders";
import orderSearchHolders from "./orderSearchHolders";

export function applySearch(projects: SCProject[], search: ISearchInfo): SCProject[] {
    let toReturn = projects.map((project) => { // map SCProject[] to ISearchHolder[]
        return { project: project } as ISearchHolder;
    });

    toReturn =
        orderSearchHolders( // order filtered projects
            filterSearchHolders(toReturn, search), // filter projects
            search
        );

    console.log(toReturn);

    // map ISearchHolder[] back to SCProject[]
    return toReturn.map((projectHolder) => projectHolder.project);
}

export default applySearch;
