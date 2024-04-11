"use client";

import TaskContent from "./task.mdx";
import React, { useEffect } from "react";
import Header from "@/app/components/Header/header";
import Main, { MainProps } from "@/app/components/Main/main";
import highlight from "@/app/utils/highlighting";
import "./main";

export default function Index(): React.JSX.Element {
    useEffect(() => {
        highlight();
    }, []);

    return (
        <div id={"root"}>
            <Header />
            <Main
                prop={
                    new MainProps(
                        "Sum all numbers till the given one",
                        [TaskContent({})],
                        "article",
                    )
                }
            />
        </div>
    );
}
