import type { NextPage } from "next";

// import ExportedImage from "next-image-export-optimizer"; // no typescript definitions :(
// import skyCircle2 from "@images/other/SkyCircle2.png";

import { useTranslation } from "react-i18next";
import { II18nProp, getStaticPaths, makeStaticProps } from "~/functions/getStaticLocales";

export {getStaticPaths}
export function getStaticProps(props: II18nProp) {
    console.log(makeStaticProps(["common"])(props));
    
    return makeStaticProps(["common"])(props);
}

const Home: NextPage = () => {
    const { t } = useTranslation("common");

    return (
        <main>
            <h1 className="text-3xl mb-2">Homepage</h1>
            {/* <img src={ require(`../images${image}?webp`) } alt="cool" className="w-96" /> */}
            {/* <img src={multipleSizes.src} srcSet={ multipleSizes.srcSet } alt="cool" className="w-96" /> */}
            {/* <ExportedImage src="./other/SkyCircle2.png" className="w-96" alt="cool" />
            <ExportedImage src="./other/SkyCircle2.png" className="w-96" alt="cool" /> */}
            {/* <Picture src="./images/other/SkyCircle2.png" className="Home-logo animate-spin" alt="logo" /> */}
            <p>
                { t("test") }
            </p>
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
                Learn React
            </a>
        </main>
    )
}

export default Home
