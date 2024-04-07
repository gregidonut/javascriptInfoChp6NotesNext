'use client'

// import SectionPageContent from "./tasks.mdx"
import React from "react";
import Header from "../../../components/Header/header"
import Main, {MainProps} from "../../../components/Main/main"
import "./main"

export default function Index() {
    // const contentStack: MainProps["content"] = [
    //     SectionPageContent({}),
    // ]

    const p = new MainProps(
        "Global Object",
    )

    return (
        <div id={"root"}>
            <Header/>
            <Main title={p.title} content={p.content} sectionOrArticle={p.sectionOrArticle}/>
        </div>
    );
}