import { ISearchHolder, ISearchInfo, OrderEnum } from "@data/search";
import { distance as levenshteinDistance } from "fastest-levenshtein";

export function orderSearchHolders(toReturn: ISearchHolder[], search: ISearchInfo): ISearchHolder[] {
    let searchOrder = search.order ?? OrderEnum.SEARCH;

    // if ordering by search relevance, and no query given
    if (searchOrder == OrderEnum.SEARCH && search.query.length <= 0) {
        searchOrder = OrderEnum.DATE; // order by date instead
    }

    let scoreFunction!: (project: ISearchHolder) => number;
    let sortFunction = (a: ISearchHolder, b: ISearchHolder) => (a.relevance ?? 0) - (b.relevance ?? 0); // descending

    // set scoreFunction based on chosen order (default is name)
    switch (searchOrder) {
        case OrderEnum.NAME:
            // replace sortFunction instead of scoreFunction,
            // because there is no efficient way to convert strings to numbers (that correctly sort)
            sortFunction = (a: ISearchHolder, b: ISearchHolder) => a.project.title.localeCompare(b.project.title);
            break;

        case OrderEnum.SEARCH:
            scoreFunction = (project: ISearchHolder) => { // lowercased weighted levenshtein distance
                const query = search.query.toLowerCase();
                const title = project.project.title.toLowerCase();

                return levenshteinDistance(query, title)
                / Math.max(query.length, title.length); // weigh the distance
            }
            break;

        case OrderEnum.DATE:
        default: // default is order by search relevance
            scoreFunction = (project: ISearchHolder) => -project.project.date.getTime(); // negative so that the newest projects are first (descending order)
            break;
    }

    // apply chosen scoreFunction on each item (only if scoreFunction is set)
    if (scoreFunction !== undefined) toReturn.forEach((item) => {
        item.relevance = scoreFunction(item);
    });

    toReturn.sort(
        search.orderAsc ?? false ? // if order is ascending
        (a, b) => -sortFunction(a, b) : // make it ascending by making the sortFunction negative
        sortFunction // otherwise just use the sortFunction
    );

    return toReturn;
}

export default orderSearchHolders;
