import { Type, System, Language, Tool } from "@data/tags";
import OrderEnum from "./OrderEnum";
import TagSearchTypeEnum from "./TagSearchTypeEnum";

export interface ISpecificSearchInfo<T> {
    tags: T[],
    mode: TagSearchTypeEnum
}

export interface ISearchInfo {
    query: string,
    highlighted: boolean,

    order: OrderEnum,
    orderAsc: boolean,

    beforeDate?: Date,
    afterDate?: Date,

    type: ISpecificSearchInfo<Type>,
    system: ISpecificSearchInfo<System>,
    languages: ISpecificSearchInfo<Language>
    tools: ISpecificSearchInfo<Tool>
}

export default ISearchInfo;
