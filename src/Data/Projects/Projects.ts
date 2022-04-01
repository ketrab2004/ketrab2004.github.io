import { default as State } from "./StateEnum";
import IProject from "./IProject";

// PUBLIC_URL
const url = window.location.origin;

export const Projects: {[key: string]: IProject} = {
    "cardboard-mod": {
        state: State.Abandoned,
        title: "The Cardboard Mod",
        thumbnail: `${url}/projects/mods/cardboard/thumbnail.jfif`,
        date: new Date("21 May, 2018 @ 12:23"),

        type: "mod",
        languages: ["no-code"],
        tools: ["paint.net", "blender"],
        system: "other",
    },

    "grass-mod": {
        state: State.Completed,
        title: "The Grass Mod",
        thumbnail: `${url}/projects/mods/grass/thumbnail.png`,
        date: new Date("10/01/2017 11:19"), // m d y

        type: "mod",
        languages: ["no-code"],
        tools: ["paint.net", "mcreator"],
        system: "minecraft",
    },

    "cannibalism-mod": {
        state: State.Completed,
        title: "The Cannibalism Mod",
        thumbnail: `${url}/projects/mods/cannibalism/thumbnail.jfif`,
        date: new Date("25 April, 2020 @ 9:08"),

        type: "mod",
        languages: ["no-code"],
        tools: ["paint.net", "blender"],
        system: "other (ingame)",
    },

    "html5-hangman": {
        state: State.Completed,
        title: "HTML5 Hangman game",
        thumbnail: `${url}/projects/html5/hangman/thumbnail.png`,
        date: new Date("thursday 5 March, 2020 20:20:03 +0100"),

        type: "game",
        languages: ["html", "css", "js"],
        tools: ["vscode"],
        system: "raw html",
    },

    "roblox-infinite-terrain": {
        state: State.Completed,
        title: "Roblox Infinite Terrain",
        thumbnail: `${url}/projects/roblox/infinite-terrain/thumbnail.png`,
        date: new Date("6/5/2020"), // m d y

        type: "game",
        languages: ["lua"],
        tools: ["roblox studio"],
        system: "roblox",
    }
};

export default Projects;
