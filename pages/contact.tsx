import React from "react";
import type { NextPage } from "next";

import { NextSeo } from "next-seo";

export const Contact: NextPage = () => {
    return <>
        <NextSeo
            title="Contact"
            description="Contact info for Bartek Oskam"

            openGraph={{
                type: "profile",
                title: "Bartek Oskam contact page",
                description: "Contact info for Bartek Oskam",
                profile: {
                    firstName: "Bartek",
                    lastName: "Oskam",
                    username: "ketrab2004",
                    gender: "male"
                }
            }}
        />
        {/* Use the default SocialProfileJsonLd defined in _app */}

        <main>
            <h1 className="text-3xl mb-2">Contact me</h1>
        </main>
    </>;
}

export default Contact;
