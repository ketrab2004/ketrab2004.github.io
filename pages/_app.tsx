import "@styles/globals.css";
import Script from "next/script";
import type { AppProps } from "next/app";

import * as Components from "@components";
import { DefaultSeo, SocialProfileJsonLd } from "next-seo";

function MyApp({ Component, pageProps }: AppProps) {
    return <>
        <DefaultSeo 
            titleTemplate="%s | Bartek Oskam portfolio"
            defaultTitle="Bartek Oskam portfolio"
            description="A portfolio website for Bartek Oskam"

            robotsProps={{
                maxSnippet: 128,
                maxImagePreview: "standard",
                maxVideoPreview: 15, // seconds
                unavailableAfter: "2104-04-07T12:00:00+0100",
            }}
            additionalLinkTags={[
                {
                    rel: 'icon',
                    href: '/favicon.ico',
                },
                {
                    rel: 'manifest',
                    href: '/manifest.json'
                }
            ]}

            twitter={{
                cardType: "summary"
            }}
            openGraph={{
                site_name: "Bartek Oskam portfolio",
                title: "Bartek Oskam portfolio",
                type: "website",
                description: "A portfolio website for Bartek Oskam",

            }}
        />
        <SocialProfileJsonLd 
            type="Person"
            name="Bartek Oskam"
            url="https://ketrab2004.github.io/"
            sameAs={[
                "https://www.linkedin.com/in/BartekOskam/",
                "https://github.com/ketrab2004"
            ]}
            scriptId="social-profile-json-ld"
        />

        <Components.Navbar />

        <Component {...pageProps} />

        {/* Google Analytics - Global site tag (gtag.js) */}
        <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-9XK6W489R3" />
        <Script id="google analytics" strategy="afterInteractive"
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
