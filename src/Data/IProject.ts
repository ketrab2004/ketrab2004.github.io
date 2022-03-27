import Tag from "./Tags"

export default interface IProject
{
    highlighted: boolean,
    
    thumbnail: string,
    title: string,
    date: Date,

    tags: Tag[]
}
