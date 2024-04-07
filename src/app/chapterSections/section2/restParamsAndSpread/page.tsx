'use client'

// import SectionPageContent from "./tasks.mdx"
import React from "react";
import Header from "@/app/components/Header/header"
import Main, {MainProps} from "@/app/components/Main/main"
import "./main"

export default function Index() {
    // const contentStack: MainProps["content"] = [
    //     SectionPageContent({}),
    // ]
    //

    const p = new MainProps(
        "Rest parameters and spread syntax",
    )

    return (
        <div id={"root"}>
            <Header/>
            <Main title={p.title} content={p.content} sectionOrArticle={p.sectionOrArticle}/>
        </div>
    );
}