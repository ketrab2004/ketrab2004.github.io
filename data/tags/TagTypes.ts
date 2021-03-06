export type Tag = Language | Tool | System | Type;
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
    "mysql" |
    "sql" |
    "html" |
    "css" |
    "scss" |
    "php" |
    "no-code";

export type Tool =
    "vscode" |
    "visual studio" |
    "roblox studio" |
    "mcreator" |
    "sublime text" |
    "blender" |
    "paint.net" |
    "sourcetree" |
    "git gui" |
    "git";

export type System =
    "unity" |
    "unreal engine" |
    "platformio" |
    "roblox" |
    "minecraft" |
    "other (ingame)" |
    "flutter" |
    "spigot" |
    "forge" |
    "laravel" |
    "react" |
    "php" |
    "raw html" |
    "other";

export type Type =
    "game" |
    "plugin" |
    "library" |
    "mod" |
    "app" |
    "website" |
    "other";

