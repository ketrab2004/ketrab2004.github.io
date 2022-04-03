import { Type, Language, System, Tool } from "@data/tags"
import { StaticImageData } from "next/image"
import StateEnum from "./StateEnum"

export default interface IProject
{
    highlighted?: boolean,
    collection?: number,
    state: StateEnum,
    
    thumbnail: string,
    title: string,
    date: Date,

    type: Type,
    system: System,
    languages: Language[],
    tools: Tool[]
}
