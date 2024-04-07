'use client'

import TaskContent from "./task.mdx"
import React, {useEffect} from "react";
import Header from "@/app/components/Header/header"
import Main, {MainProps} from "@/app/components/Main/main"
import highlight from "@/app/utils/highlighting"

import "./main"

export default function Index(): React.JSX.Element {
    const contentStack: MainProps["content"] = [
        TaskContent({}),
    ]
    const p = new MainProps(
        "task 4",
        contentStack,
        "article",
    )

    useEffect(() => {
        highlight();
    }, []);

    return (
        <div id={"root"}>
            <Header/>
            <Main title={p.title} content={p.content} sectionOrArticle={p.sectionOrArticle}/>
        </div>
    );
}