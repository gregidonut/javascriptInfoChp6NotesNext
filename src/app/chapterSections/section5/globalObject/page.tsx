'use client'

// import SectionPageContent from "./tasks.mdx"
import React, {useEffect} from "react";
import Header from "../../../components/Header/header"
import Main, {MainProps} from "../../../components/Main/main"
import main from "./main";


export default function Index() {
    // const contentStack: MainProps["content"] = [
    //     SectionPageContent({}),
    // ]

    const p = new MainProps(
        "Global Object",
    )

    useEffect(() => {
        main();
    }, []);

    return (
        <div id={"root"}>
            <Header/>
            <Main title={p.title} content={p.content} sectionOrArticle={p.sectionOrArticle}/>
        </div>
    );
}