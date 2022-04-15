import { SCProject } from "@context";
import { ISearchHolder, ISearchInfo, OrderEnum } from "@data/search";
import { distance as levenshteinDistance } from "fastest-levenshtein";

export function applySearch(projects: SCProject[], search: ISearchInfo): SCProject[] {
    let toReturn = projects.map((project) => { // map SCProject[] to ISearchHolder[]
        return { project: project } as ISearchHolder;
    });

    // if ordering by name, and no query given
    if ((search.order ?? OrderEnum.NAME) == OrderEnum.NAME && search.query.length <= 0) {
        search.order = OrderEnum.DATE; // order by date instead
    }

    let scoreFunction: (project: ISearchHolder) => number;

    // set scoreFunction based on chosen order (default is name)
    switch (search.order ?? OrderEnum.NAME) {
        case OrderEnum.DATE:
            scoreFunction = (project: ISearchHolder) => project.project.date.getTime();
            break;

        case OrderEnum.NAME:
        default: // default is order by name
            scoreFunction = (project: ISearchHolder) => { // lowercased weighted levenshtein distance
                const query = search.query.toLowerCase();
                const title = project.project.title.toLowerCase();

                return levenshteinDistance(query, title)
                / Math.max(query.length, title.length); // weigh the distance
            }
            break;
    }

    // apply chosen scoreFunction on each item
    toReturn.forEach((item) => {
        item.relevance = scoreFunction(item);
    });

    // sort by relevance
    toReturn.sort(
        search.orderAsc ?? false ? // sort ascending if orderAsc is true
            (a, b) => (b.relevance ?? 0) - (a.relevance ?? 0) : // ascending
            (a, b) => (a.relevance ?? 0) - (b.relevance ?? 0) // descending
    );

    console.log(toReturn);

    // map ISearchHolder[] back to SCProject[]
    return toReturn.map((projectHolder) => projectHolder.project);
}

export default applySearch;
