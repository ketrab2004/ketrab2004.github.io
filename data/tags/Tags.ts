import { default as Tag } from "./TagTypes"; 
import ITag from "./ITag";

//#region Image imports
// import paintNetImage from "@images/tag-icons/paint-net.png";
// import mcreatorImage from "@images/tag-icons/mcreator.png";
//#endregion

// Record<Tag, ITag> = { [key in Tag]: ITag };
// Partial<> makes it so not every Tag has to be defined
export const Tags: Partial<Record<Tag, Partial<ITag>>> = {
    
    // languages
    kotlin: {
        backgroundColor: 0xA97BFF
    },
    ts: {
        backgroundColor: 0x2B7489
    },
    js: {
        backgroundColor: 0xF1E05A
    },
    html: {
        backgroundColor: 0xE34C26
    },
    css: {
        backgroundColor: 0x563D7C,
        textColor: 0xFFFFFF
    },
    php: {
        backgroundColor: 0x4F5D95,
        textColor: 0xFFFFFF
    },
    "no-code": {
        displayName: "No Code",
    },
    
    // tools
    vscode: {
        backgroundColor: 0x3C99D6,
    },
    "visual studio": {
        backgroundColor: 0x854CC7,
    },
    blender: {
        backgroundColor: 0xE87C0D
    },
    "paint.net": {
        icon: "./images/tag-icons/paint-net.png", //paintNetImage,
    },
    mcreator: {
        icon: "./images/tag-icons/mcreator.png", //mcreatorImage
    }
};

export default Tags;
