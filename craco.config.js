const path = require("path");

module.exports = {
    webpack: {
        alias: {
            "~": path.resolve(__dirname, "src/"),

            "@components": path.resolve(__dirname, "src/Components/module"),
            "@functions": path.resolve(__dirname, "src/Functions/module"),
            "@pages": path.resolve(__dirname, "src/Pages/module"),

            "@data/tags": path.resolve(__dirname, "src/Data/Tags/module"),
            "@data/projects": path.resolve(__dirname, "src/Data/Projects/module"),
            "@data": path.resolve(__dirname, "src/data/"),

            "@tests": path.resolve(__dirname, "src/tests/")
        }
    },
    jest: {
        configure: {
            moduleNameMapper: {
                "^~(.+)$": "<rootDir>/src$1",

                "^@components$": "<rootDir>/src/Components/module",
                "^@functions$": "<rootDir>/src/Functions/module",
                "^@pages$": "<rootDir>/src/Pages/module",

                "^@data/tags$": "<rootDir>/src/Data/Tags/module",
                "^@data/projects$": "<rootDir>/src/Data/Projects/module",
                "^@data(.+)$": "<rootDir>/src/data$1",

                "^@tests(.+)$": "<rootDir>/src/tests$1"
            }
        }
    }
}
