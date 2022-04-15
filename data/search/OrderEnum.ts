export enum OrderEnum {
    SEARCH = "SEARCH", // order by levenshtein distance
    NAME = "NAME", // alphabetically
    DATE = "DATE" // order by 'creation' date
}

export default OrderEnum;
