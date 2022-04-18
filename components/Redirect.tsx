import { ReactElement, useEffect } from "react";
import { useRouter } from "next/router";
import { getLanguageDetector } from "@functions";

const languageDetector = getLanguageDetector();

// https://locize.com/blog/next-i18n-static/
export function useRedirect({to}: {to?: string}) {
    const router = useRouter()
    let path = to ?? router.asPath;

    // language detection
    useEffect(() => {
        const detectedLng = languageDetector.detect();

        if (path.startsWith('/' + detectedLng) && router.route === "/404") { // prevent endless loop
            router.replace('/' + detectedLng + "/404");
            return;
        }

        if (languageDetector.cache !== undefined) languageDetector.cache(detectedLng ?? '');
        router.replace('/' + detectedLng + path);
    });

    return <></>;
};

function Redirect({to}: {to?: string}) {
    useRedirect({to});
    return <></>;
}
Redirect.getLayout = (page: ReactElement) => page; // no layout

export {Redirect};
