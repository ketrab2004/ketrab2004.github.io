import cyrb53 from "./cyrb53"
import sfc32 from "./sfc32";
import HSLToRGB from "./HSLToRGB";

/**
 * Generate a colour from a string
 * 
 * @param {string} str The string to generate a colour from
 * @return {number} the generated colour in hex format
 */
export default function ColourFromString(str: string): number {
    const hash = cyrb53(str); // generate a hash from the input

    const generator = sfc32(hash, hash +69, hash +420, hash); // seed a generator with the hash

    const rgb = HSLToRGB(
        generator(), // hue 0-1 (0-1)
        generator() *.4 + .6, // saturation 0-1 (0.6-1)
        generator() *.2 + .4 // lightness 0-1 (0.4-0.6)
    );

    // return the rgb array bitshifted into a single number
    return (rgb[0] << 16) | (rgb[1] << 8) | rgb[2];
}
