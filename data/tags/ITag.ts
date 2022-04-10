import { StaticImageData } from "next/image";

export default interface ITag
{
    displayName: string,
    
    icon?: string, //StaticImageData;

    backgroundColor: number,
    borderColor: number,
    textColor: number
}
