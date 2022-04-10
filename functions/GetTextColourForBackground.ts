/**
 * Generate a text colour with sufficient contrast to the background colour
 * 
 * @author Github Copilot
 * 
 * @param {number} backgroundColor The background colour
 * @returns {number} The text colour
 */
export default function GetTextColourForBackground(backgroundColor: number): number {
    // bit shift the background colour into seperate rgb values
    const r = (backgroundColor >> 16) & 0xFF; // FF = 255
    const g = (backgroundColor >> 8) & 0xFF;
    const b = backgroundColor & 0xFF;

    // calculate the brightness (yiq) of the background colour
    const yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000;

    // if the brightness is greater than 128, return black, otherwise return white
    return (yiq >= 128) ? 0x000000 : 0xFFFFFF;
}
