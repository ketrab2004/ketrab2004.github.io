import IProject from "./IProject";

const Projects: {[key: string]: IProject} = {
    "cardboard-mod": {
        highlighted: false,
        title: "The cardboard mod",
        thumbnail: "https://steamuserimages-a.akamaihd.net/ugc/939458259771732109/F879436CA1E6EAA94FF9AA7E888006535CB5A341/",
        date: new Date("21 May, 2018 @ 12:23"),

        type: "mod",
        languages: ["no-code"],
        tools: ["paint.net", "blender"],
        system: "other",
    }
};

export default Projects;
