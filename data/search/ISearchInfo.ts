import { Language, Tool } from "@data/tags";
import OrderEnum from "./OrderEnum";
import TagSearchTypeEnum from "./TagSearchTypeEnum";

export interface ISpecificSearchInfo {
    tags: string[],
    mode?: TagSearchTypeEnum
}

export interface ISearchInfo {
    query: string,
    highlighted?: boolean,

    order?: OrderEnum,
    orderAsc?: boolean,

    beforeDate?: Date,
    afterDate?: Date,

    languages?: ISpecificSearchInfo & {
        tags: Language[]
    }
    tools?: ISpecificSearchInfo & {
        tags: Tool[]
    }
}

export default ISearchInfo;