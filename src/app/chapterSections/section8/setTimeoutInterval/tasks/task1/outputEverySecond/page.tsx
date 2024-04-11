"use client";

import TaskContent from "./task.mdx";
import React from "react";
import Header from "../../../../../../components/Header/header";
import Main, {
    MainProps,
} from "../../../../../../components/Main/main";
import "./main";

export default function Index(): React.JSX.Element {
    return (
        <div id={"root"}>
            <Header />
            <Main
                prop={
                    new MainProps(
                        "Task 1",
                        [TaskContent({})],
                        "article",
                    )
                }
            />
        </div>
    );
}
