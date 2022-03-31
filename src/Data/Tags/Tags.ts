import { default as Tag } from "./TagTypes"; 
import ITag from "./ITag";

// Record<Tag, ITag> = { [key in Tag]: ITag };
// Partial<> makes it so not every Tag has to be defined
const Tags: Partial<Record<Tag, ITag>> = {
    
    // languages
    "kotlin": {
        backgroundColor: "#A97BFF"
    },
    "ts": {
        backgroundColor: "#2B7489"
    },
    "js": {
        backgroundColor: "#F1E05A"
    },
    "html": {
        backgroundColor: "#E34C26"
    },
    "css": {
        backgroundColor: "#563D7C",
        textColor: "#FFFFFF"
    },
    "php": {
        backgroundColor: "#4F5D95",
        textColor: "#FFFFFF"
    },
    "no-code": {
        displayName: "no code",
    },
    
    // tools
    "blender": {
        backgroundColor: "#E87C0D",
        textColor: "#275787"
    }
};

export default Tags;
