"use client";

import NoteContent from "./note.mdx";
import React, { useEffect } from "react";
import Header from "@/app/components/Header/header";
import Main, { MainProps } from "@/app/components/Main/main";
import main from "./main";

export default function Index(): React.JSX.Element {
    useEffect(() => {
        main();
    }, []);

    return (
        <div id={"root"}>
            <Header />
            <Main
                prop={
                    new MainProps(
                        "note 1",
                        [NoteContent({})],
                        "article",
                    )
                }
            />
        </div>
    );
}
