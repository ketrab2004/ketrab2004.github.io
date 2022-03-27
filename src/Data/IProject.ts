import Tag from "./Tags"

export default interface IProject
{
    highlighted: boolean,
    
    image: string,
    title: string,
    date: Date,

    tags: Tag[]
}
