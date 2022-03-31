/**
 * Simple Fast Counter 32-bit
 * 
 * @see https://stackoverflow.com/a/47593316
 * 
 * @param {number} a seed 1
 * @param {number} b seed 2
 * @param {number} c seed 3
 * @param {number} d seed 4
 * @returns {()=> number} seeded generator function
 */
export default function sfc32(a: number, b: number, c: number, d: number): ()=> number {
    return function(): number {
        a >>>= 0; b >>>= 0; c >>>= 0; d >>>= 0; 
        var t = (a + b) | 0;
        a = b ^ b >>> 9;
        b = c + (c << 3) | 0;
        c = (c << 21 | c >>> 11);
        d = d + 1 | 0;
        t = t + d | 0;
        c = c + t | 0;
        return (t >>> 0) / 4294967296;
    }
}