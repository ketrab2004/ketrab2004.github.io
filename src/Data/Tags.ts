export type Tag = Language | Tool | System;
export default Tag;

export type Language =
    "c" |
    "c++" |
    "c#" |
    "lua" |
    "luau" |
    "js" |
    "ts" |
    "md" |
    "hlsl" |
    "java" |
    "kotlin" |
    "dart" |
    "html" |
    "html5" |
    "css" |
    "scss" |
    "php" |
    "no-code";

export type Tool =
    "vscode" |
    "visual studio 2022" |
    "visual studio 2017" |
    "roblox studio" |
    "sublime text" |
    "sourcetree" |
    "git gui" |
    "git";

export type System =
    "unity" |
    "unreal engine" |
    "platformio" |
    "roblox" |
    "flutter" |
    "spigot" |
    "forge" |
    "laravel" |
    "react";
