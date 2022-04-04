import React from "react";
import type { NextPage } from "next";

export const Error404: NextPage = () => {
    return (
        <main>
            <h1 className="text-3xl mb-2">404</h1>
            <p>
                This page doesn&apos;t exist
            </p>
        </main>
    );
}

export default Error404;
