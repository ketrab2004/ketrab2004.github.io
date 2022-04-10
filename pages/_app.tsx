import "@styles/globals.css";
import Script from "next/script";

import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import type { AppProps } from "next/app";

type NextPageWithLayout = NextPage & {
    getLayout?: (page: ReactElement) => ReactNode
}
type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout
}

import * as Components from "@components";
import { DefaultSeo } from "next-seo";

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
    const getLayout = Component.getLayout ?? ((page: ReactElement) => <>
        <Components.Navbar />
        {page}
        {/* navbar */}
    </>);

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
                type: "website",
                site_name: "Bartek Oskam portfolio",
                title: "Bartek Oskam portfolio",
                description: "A portfolio website for Bartek Oskam"
            }}
        />

        { getLayout( <Component {...pageProps} /> ) }

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
