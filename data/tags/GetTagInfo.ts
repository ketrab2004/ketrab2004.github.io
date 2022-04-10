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
    const tagInfo: Partial<ITag> = Tags[tag] ?? {};

    let background = tagInfo.backgroundColor ?? ColourFromString(tag); // set the background colour if it isn't set

    let border = tagInfo.borderColor; // get border colour

    if(!border) { // if the border colour isn't set
        const total = // get the total of the colours
            (background & 0xFF0000) >> 16 + // red
            (background & 0x00FF00) >> 8 + // green
            (background & 0x0000FF); // blue

        border = total > 255*3/2 ? // if the total is greater than half of the max of the colours
            // set the border colour to be the same as the background but a bit darker
            background - 0x0a0a0a : // set the border colour to be the same as the background colour but a bit darker
            background + 0x0a0a0a; // set the border colour to be the same as the background colour but a bit lighter
    }

    let text = tagInfo.textColor ?? GetTextColourForBackground(background); // set the text colour if it isn't set

    let title = tagInfo.displayName ??= CapitalizeWords(tag); // set the display name if it isn't set

    return {
        displayName: title,

        backgroundColor: background,
        borderColor: border,
        textColor: text,

        icon: tagInfo.icon ?? undefined
    }
}
