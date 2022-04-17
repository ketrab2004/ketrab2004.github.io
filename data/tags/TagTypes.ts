export type Tag = Language | Tool | System | Type;
export default Tag;

// https://stackoverflow.com/a/64174790

export const Languages = [
    "c",
    "c++",
    "c#",
    "lua",
    "js",
    "ts",
    "md",
    "hlsl",
    "java",
    "kotlin",
    "dart",
    "mysql",
    "sql",
    "html",
    "css",
    "scss",
    "php",
    "no-code"
] as const;
export type Language = typeof Languages[number];

export const Tools = [
    "vscode",
    "visual studio",
    "roblox studio",
    "mcreator",
    "sublime text",
    "blender",
    "paint.net",
    "sourcetree",
    "git gui",
    "git"
] as const;
export type Tool = typeof Tools[number];

export const Types = [
    "game",
    "plugin",
    "library",
    "mod",
    "app",
    "website",
    "other"
] as const;
export type Type = typeof Types[number];

export const Systems = [
    "unity",
    "unreal engine",
    "platformio",
    "roblox",
    "minecraft",
    "other (ingame)",
    "flutter",
    "spigot",
    "forge",
    "laravel",
    "react",
    "php",
    "raw html"
] as const;
export type System = typeof Systems[number];
