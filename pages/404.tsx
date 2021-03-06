import React from "react";
import type { NextPage } from "next";

import { NextSeo } from "next-seo";

export const Error404: NextPage = () => {
    return <>
        <NextSeo
            title="404"
            description="Page not found"
            
            robotsProps={{ noarchive: true }} // don't let google archive this page for search results
            noindex={ true } // don't let google index this page for search results
        />

        <main>
            <h1 className="text-3xl mb-2">404</h1>
            <p>
                This page doesn&apos;t exist
            </p>
        </main>
    </>;
}

export default Error404;
