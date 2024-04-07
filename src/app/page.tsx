'use client'

import FrontPageContent from "./FrontPageContent.mdx"
import React from "react";
import Header from "./components/Header/header"
import Main, {MainProps} from "./components/Main/main"

export default function Index() {
    const contentStack: MainProps["content"] = [
        FrontPageContent({}),
    ]

    const p = new MainProps(
        "Table of contents",
        contentStack,
    )

    return (
        <div id={"root"}>
            <Header/>
            <Main title={p.title} content={p.content} sectionOrArticle={p.sectionOrArticle}/>
        </div>
    );
}