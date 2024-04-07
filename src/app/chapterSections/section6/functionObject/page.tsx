'use client'

import TaskList from "./tasks.mdx"
import NotesList from "./notes.mdx"
import React from "react";
import Header from "@/app/components/Header/header"
import Main, {MainProps} from "@/app/components/Main/main"
import "./main"

export default function Index() {
    const contentStack: MainProps["content"] = [
        NotesList({}),
        TaskList({}),
    ]

    const p = new MainProps(
        "Function object, NFE",
        contentStack,
    )

    return (
        <div id={"root"}>
            <Header/>
            <Main title={p.title} content={p.content} sectionOrArticle={p.sectionOrArticle}/>
        </div>
    );
}