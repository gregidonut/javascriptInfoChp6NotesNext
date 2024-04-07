'use client'

import styles from "./main.module.css";
import React from "react";
import "./main"


export class MainProps {
    constructor(
        public title: string,
        public content: React.JSX.Element[] = [],
        public sectionOrArticle: "section" | "article" = "section",
    ) {
    }
}

export default function Index(props: MainProps): React.JSX.Element {
    if (!props.content) {
        return (
            <main className={styles.main}>
                <h2>{props.title}</h2>
            </main>
        )
    }
    return (
        <main className={styles.main}>
            <h2>{props.title}</h2>
            {
                props.sectionOrArticle !== "article" ?
                    props.content.map((item) => (
                        <section key={props.content!.indexOf(item)}>
                            {item}
                        </section>
                    )) : props.content.map((item) => (
                        <article key={props.content!.indexOf(item)}>
                            {item}
                        </article>
                    ))
            }
        </main>
    )

}
