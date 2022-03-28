import { Type, Language, System, Tool } from "./Tags"

export default interface IProject
{
    highlighted: boolean,
    
    thumbnail: string,
    title: string,
    date: Date,

    type: Type,
    system: System,
    languages: Language[],
    tools: Tool[]
}
