"use client";

import FrontPageContent from "./FrontPageContent.mdx";
import React from "react";
import Header from "./components/Header/header";
import Main, { MainProps } from "./components/Main/main";

export default function Index() {
    return (
        <div id={"root"}>
            <Header />
            <Main
                prop={
                    new MainProps("Table of contents", [
                        FrontPageContent({}),
                    ])
                }
            />
        </div>
    );
}
