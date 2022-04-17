import { ISearchHolder, ISearchInfo, TagSearchTypeEnum } from "@data/search";
import { Tag } from "@data/tags";
import { isAfter, isBefore } from "date-fns";

export function matchesTags(tags: Tag[], filterTags: Tag[], mode: TagSearchTypeEnum): boolean {
    if (filterTags.length <= 0) return true; // no tags given, so it should match

    switch (mode) {
        case TagSearchTypeEnum.OR:
            // OR mode: if any of the tags given match, return true
            for (const tag of tags) {
                if (filterTags.includes(tag)) return true; // if tag matches any of the filterTags, return true
            }
            return false;

        case TagSearchTypeEnum.AND:
            // AND mode: only if all of the given tags match, return true
            for (const filterTag of filterTags) {
                if (!tags.includes(filterTag)) return false; // if one of the filterTags isn't found, return false
            }
            return true; // if all of the tags match, return true

        default:
            throw new Error(`TagSearchTypeEnum "${mode}" is not implemented.`);
    }
}

export function filterSearchHolders(projects: ISearchHolder[], search: ISearchInfo): ISearchHolder[] {
    let toReturn: ISearchHolder[] = [];

    // filter projects
    projects.forEach((projectHolder) => {
        // check if it matches the highlightedOnly option
        // if (search.highlighted && !(projectHolder.project.highlighted ?? false)) return; //TODO uncomment this, when highlighted projects are added

        // check if it's after the afterDate if it's set
        if (search.afterDate !== undefined && isBefore(projectHolder.project.date, search.afterDate))
            return; // if it's before the afterDate, return (don't add it to toReturn)

        // check if it's before the beforeDate if it's set
        if (search.beforeDate !== undefined && isAfter(projectHolder.project.date, search.beforeDate))
            return; // if it's after the beforeDate, return (don't add it to toReturn)

        // check if it matches the project type tag
        // TagSearchTypeEnum is OR by default, because a project can only have 1 type
        if (!matchesTags([projectHolder.project.type], search.type.tags, TagSearchTypeEnum.OR))
            return; // if it doesn't match, return (don't add it to toReturn)

        // check if it matches the project system tag
        // TagSearchTypeEnum is OR by default, because a project can only have 1 system
        if (!matchesTags([projectHolder.project.system], search.system.tags, TagSearchTypeEnum.OR))
            return; // if it doesn't match, return (don't add it to toReturn)

        // check if it matches the languages tags
        if (!matchesTags(projectHolder.project.languages, search.languages.tags, search.languages.mode))
            return; // if it doesn't match, return (don't add it to toReturn)

        // check if it matches the tools tags
        if (!matchesTags(projectHolder.project.tools, search.tools.tags, search.tools.mode))
            return; // if it doesn't match, return (don't add it to toReturn)

        // if all checks passed, add it to toReturn
        toReturn.push(projectHolder);
    });

    return toReturn;
}

export default filterSearchHolders;
