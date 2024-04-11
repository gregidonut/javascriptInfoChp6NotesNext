"use client";

import NoteContent from "./note.mdx";
import React from "react";
import Header from "@/app/components/Header/header";
import Main, { MainProps } from "@/app/components/Main/main";
import "./main";

export default function Index(): React.JSX.Element {
    return (
        <div id={"root"}>
            <Header />
            <Main
                prop={
                    new MainProps(
                        "note 2",
                        [NoteContent({})],
                        "article",
                    )
                }
            />
        </div>
    );
}
