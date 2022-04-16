/**
 * get the values of a react-select component as a string[]
 *
 * @param input the react-select
 * @returns the values
 */
export default function getValuesOfReactSelect(input: HTMLInputElement | RadioNodeList): string[] {
    if (input instanceof HTMLInputElement) {
        if (input.value === '') return []; // if value is empty, return empty array

        return [input.value];
    }
    else if (input instanceof RadioNodeList) {
        return [...input as any].map(x => x.value);
    }
    return [];
}
