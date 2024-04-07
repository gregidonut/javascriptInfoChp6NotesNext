'use client'

import NoteContent from "./note.mdx"
import React from "react";
import Header from "../../../../../../components/Header/header"
import Main, {MainProps} from "../../../../../../components/Main/main"
import "./main"

export default function Index(): React.JSX.Element {
    const contentStack: MainProps["content"] = [
        NoteContent({}),
    ]
    const p = new MainProps(
        "note 2",
        contentStack,
        "article",
    )

    return (
        <div id={"root"}>
            <Header/>
            <Main title={p.title} content={p.content} sectionOrArticle={p.sectionOrArticle}/>
        </div>
    );
}