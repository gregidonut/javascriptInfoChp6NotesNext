'use client'

import React, {useEffect} from "react";
import Header from "@/app/components/Header/header"
import Main, {MainProps} from "@/app/components/Main/main"
import main from "./main";


export default function Index() {
    useEffect(() => {
        main();
    }, []);

    return (
        <div id={"root"}>
            <Header/>
            <Main prop={
                new MainProps(
                    "Global Object",
                )
            }/>
        </div>
    );
}
