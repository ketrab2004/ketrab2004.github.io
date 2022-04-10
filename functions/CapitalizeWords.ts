// thank you github copilot :)
export default function CapitalizeWords(str: string): string {
    // https://stackoverflow.com/questions/1026069/how-do-i-make-the-first-letter-of-a-string-uppercase-in-javascript
    return str.replace(/\w\S*/g, function(txt) {
        return txt.charAt(0).toUpperCase() + txt.substring(1).toLowerCase();
    });
}
