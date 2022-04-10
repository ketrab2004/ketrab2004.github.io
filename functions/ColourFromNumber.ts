// function that gets a hex colour string from a number
export default function ColourFromNumber(number: number): string {
    return "#" + number.toString(16).padStart(6, "0");
}