import { SCProject } from "@context"

export interface ISearchHolder {
    project: SCProject, // the item that is being sorted/searched

    relevance?: number, // the relevance of the item, used for sorting
}

export default ISearchHolder
