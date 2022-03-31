import { default as Tag } from "./TagTypes"; 
import ITag from "./ITag";

// Record<Tag, ITag> = { [key in Tag]: ITag };
// Partial<> makes it so not every Tag has to be defined
export const Tags: Partial<Record<Tag, ITag>> = {
    
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
        displayName: "no code",
    },
    
    // tools
    blender: {
        backgroundColor: 0xE87C0D,
        textColor: 0x275787
    }
};

export default Tags;
