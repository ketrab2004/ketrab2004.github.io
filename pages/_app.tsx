import "../styles/globals.css";
import Script from "next/script";
import type { AppProps } from "next/app";

import * as Components from "@components";

function MyApp({ Component, pageProps }: AppProps) {
    return <>
        <Components.Navbar />

        <Component {...pageProps} />

        {/* Google Analytics - Global site tag (gtag.js) */}
        <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-9XK6W489R3" />
        <Script strategy="afterInteractive"
            dangerouslySetInnerHTML={{
                __html: [
                "window.dataLayer = window.dataLayer || [];",
                "function gtag(){dataLayer.push(arguments);}",
                "gtag('js', new Date());",

                "gtag('config', 'G-9XK6W489R3');"
                ].join("\n")
            }} />
    </>
}

export default MyApp
