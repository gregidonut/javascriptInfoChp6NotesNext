'use client'

import SectionPageContent from "./section.mdx"
import React from "react";
import Header from "@/app/components/Header/header"
import Main, {MainProps} from "@/app/components/Main/main"
import "./main"

export default function Index() {
    return (
        <div id={"root"}>
            <Header/>
            <Main prop={
                new MainProps(
                    "Variable Scope, closure",
                    [
                        SectionPageContent({}),
                    ],
                )
            }/>
        </div>
    );
}
