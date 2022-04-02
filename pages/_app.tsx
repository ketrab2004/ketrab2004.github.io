import "../styles/globals.css";
import type { AppProps } from "next/app";

import * as Components from "@components";

function MyApp({ Component, pageProps }: AppProps) {
    console.log(pageProps, Component.displayName);
    

    return <>
        <Components.Navbar />

        <Component {...pageProps} />
    </>
}

export default MyApp
