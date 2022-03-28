import { default as State } from "./StateEnum";
import IProject from "./IProject";

// PUBLIC_URL
const url = window.location.origin;

const Projects: {[key: string]: IProject} = {
    "cardboard-mod": {
        highlighted: false,
        state: State.Abandoned,
        title: "The Cardboard Mod",
        thumbnail: `${url}/projects/cardboard-mod/thumbnail.jfif`,
        date: new Date("21 May, 2018 @ 12:23"),

        type: "mod",
        languages: ["no-code"],
        tools: ["paint.net", "blender"],
        system: "other",
    },
    "grass-mod": {
        highlighted: false,
        state: State.Abandoned,
        title: "The Grass Mod",
        thumbnail: `${url}/projects/grass-mod/thumbnail.png`,
        date: new Date("10/01/2017 11:19"), // m d y

        type: "mod",
        languages: ["no-code"],
        tools: ["paint.net", "mcreator"],
        system: "minecraft",
    }
};

export default Projects;
