import CapitalizeWords from "./CapitalizeWords";
import cyrb53 from "./cyrb53";
import sfc32 from "./sfc32";
import ColourFromString from "./ColourFromString";
import ColourFromNumber from "./ColourFromNumber";
import GetTextColourForBackground from "./GetTextColourForBackground";
import HSLToRGB from "./HSLToRGB";
import applySearch from "./applySearch";
import orderSearchHolders from "./orderSearchHolders";
import filterSearchHolders, { matchesTags } from "./filterSearchHolders";
import getValuesOfReactSelect from "./getValuesOfReactSelect";

// cannot be exported with the functions module,
// because it uses serverSideTranslations() which requires it to be ran on the server
// which can't be guaranteed if it's exported here (because this is imported everywhere)
// import { II18nProp, getI18nPaths, getI18nProps, getStaticPaths as getStaticI18nPaths, makeStaticProps as makeStaticI18nProps } from "./getStaticLocales";


export {
    CapitalizeWords,

    cyrb53,
    sfc32,

    ColourFromString,
    ColourFromNumber,
    GetTextColourForBackground,

    HSLToRGB,

    applySearch,
    orderSearchHolders,
    filterSearchHolders,
        matchesTags,

    getValuesOfReactSelect
};
