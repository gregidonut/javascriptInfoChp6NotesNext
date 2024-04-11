"use client";

import TaskContent from "./task.mdx";
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
                        "Task 3",
                        [TaskContent({})],
                        "article",
                    )
                }
            />
        </div>
    );
}
