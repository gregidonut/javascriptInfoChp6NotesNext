'use client'

import React, {useEffect} from "react";
import Header from "@/app/components/Header/header"
import Main, {MainProps} from "@/app/components/Main/main"
import main from "./main";


export default function Index() {
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