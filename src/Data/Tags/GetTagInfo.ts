import { ColourFromString, GetTextColourForBackground, CapitalizeWords } from "@functions";

import Tag from "./TagTypes";
import Tags from "./Tags";
import ITag from "./ITag";

/**
 * Get the tag info for a tag.
 * 
 * @return {ITag} info of the tag
 */
export default function GetTagInfo(tag: Tag): ITag {
    let toReturn = {...Tags[tag] ?? {}}; // copy the tag info if it exists

    toReturn.backgroundColor ??= ColourFromString(tag); // set the background colour if it isn't set

    if(!toReturn.borderColor) { // if the border colour isn't set
        const total = // get the total of the colours
            (toReturn.backgroundColor & 0xFF0000) >> 16 + // red
            (toReturn.backgroundColor & 0x00FF00) >> 8 + // green
            (toReturn.backgroundColor & 0x0000FF); // blue

        toReturn.borderColor = total > 255*3/2 ? // if the total is greater than half of the max of the colours
            toReturn.backgroundColor - 0x101010 : // set the border colour to be the same as the background colour but a bit darker
            toReturn.backgroundColor + 0x101010; // set the border colour to be the same as the background colour but a bit lighter
    }

    toReturn.textColor ??= GetTextColourForBackground(toReturn.backgroundColor); // set the text colour if it isn't set

    toReturn.displayName ??= CapitalizeWords(tag); // set the display name if it isn't set

    return toReturn;
}
