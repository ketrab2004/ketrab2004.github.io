import OrderEnum from "./OrderEnum";
import TagSearchTypeEnum from "./TagSearchTypeEnum";
import { IProject } from "@data/projects";

export interface ISearchHolder {
    projects: IProject, // the item that is being sorted/searched

    relevance?: number, // the relevance of the item, used for sorting
}

export default ISearchHolder
