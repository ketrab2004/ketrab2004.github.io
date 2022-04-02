module.exports = {
    content: [
        "./pages/**/*.{js,jsx,ts,tsx}",
        "./components/**/*.{js,jsx,ts,tsx}"
    ],
    theme: {
        fontFamily: {
            'sans': ['\'Open Sans\'', 'Arial', 'sans-serif'],
            'nunito': ['\'Nunito\'', 'Verdana', 'sans-serif'],
            'roboto': ['\'Roboto\'', 'Calibri', 'sans-serif'],
            'mono': ['\'Red Hat Mono\'', '"Lucida Console"', 'monospace'],

            'comic': ['"Comic Sans MS"', '"Comic Sans"', 'cursive']
        },
        screens: {
            'sm':  '640px',
            'md':  '768px',
            'lg':  '1024px',
            'xl':  '1280px',
            '2xl': '1536px',
            '3xl': '1920px',
            '4xl': '2560px',
        }
    },
    plugins: [
        
    ],
}
