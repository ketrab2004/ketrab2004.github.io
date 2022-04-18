import React from "react";
import type { NextPage } from "next";

import { NextSeo, SocialProfileJsonLd  } from "next-seo";

// import { useTranslation } from "react-i18next";
import { II18nProp, getStaticPaths, makeStaticProps } from "~/functions/getStaticLocales";

export {getStaticPaths}
export function getStaticProps(props: II18nProp) {
    return makeStaticProps(["common"])(props);
}

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
        <SocialProfileJsonLd 
            type="Person"
            name="Bartek Oskam"
            url="https://ketrab2004.github.io/"
            sameAs={[
                "https://www.linkedin.com/in/BartekOskam/",
                "https://github.com/ketrab2004"
            ]}
            scriptId="social-profile-json-ld"
            key="JsonLd"
        />

        <main>
            <h1 className="text-3xl mb-2">Contact me</h1>
        </main>
    </>;
}

export default Contact;
