import { default as State } from "./StateEnum";
import IProject from "./IProject";

//#region Image imports
import cardboardModImage from "@images/projects/mods/cardboard.png";
import grassModImage from "@images/projects/mods/grass.png";
import cannibalismModImage from "@images/projects/mods/cannibalism.png";

import hangmanHtml5Image from "@images/projects/html5/hangman.png";

import infiniteTerrainRobloxImage from "@images/projects/roblox/infinite-terrain.png";
//#endregion

export const Projects: {[key: string]: IProject} = {
    "cardboard-mod": {
        state: State.Abandoned,
        title: "The Cardboard Mod",
        thumbnail: cardboardModImage,
        date: new Date("21 May, 2018 @ 12:23"),

        type: "mod",
        languages: ["no-code"],
        tools: ["paint.net", "blender"],
        system: "other",
    },

    "grass-mod": {
        state: State.Completed,
        title: "The Grass Mod",
        thumbnail: grassModImage,
        date: new Date("10/01/2017 11:19"), // m d y

        type: "mod",
        languages: ["no-code"],
        tools: ["paint.net", "mcreator"],
        system: "minecraft",
    },

    "cannibalism-mod": {
        state: State.Completed,
        title: "The Cannibalism Mod",
        thumbnail: cannibalismModImage,
        date: new Date("25 April, 2020 @ 9:08"),

        type: "mod",
        languages: ["no-code"],
        tools: ["paint.net", "blender"],
        system: "other (ingame)",
    },

    "html5-hangman": {
        state: State.Completed,
        title: "HTML5 Hangman game",
        thumbnail: hangmanHtml5Image,
        date: new Date("thursday 5 March, 2020 20:20:03 +0100"),

        type: "game",
        languages: ["html", "css", "js"],
        tools: ["vscode"],
        system: "raw html",
    },

    "roblox-infinite-terrain": {
        state: State.Completed,
        title: "Roblox Infinite Terrain",
        thumbnail: infiniteTerrainRobloxImage,
        date: new Date("6/5/2020"), // m d y

        type: "game",
        languages: ["lua"],
        tools: ["roblox studio"],
        system: "roblox",
    }
};

export default Projects;
