"use client";

import styles from "./main.module.css";
import React from "react";
import "./main";

export class MainProps {
    constructor(
        public title: string,
        public contentStack: React.JSX.Element[] = [],
        public sectionOrArticle: "section" | "article" = "section",
    ) {}
}

export default function Main(props: {
    prop: MainProps;
}): React.JSX.Element {
    if (!props.prop.contentStack) {
        return (
            <main className={styles.main}>
                <h2>{props.prop.title}</h2>
            </main>
        );
    }
    return (
        <main className={styles.main}>
            <h2>{props.prop.title}</h2>
            {props.prop.sectionOrArticle !== "article"
                ? props.prop.contentStack.map((item) => (
                      <section
                          key={props.prop.contentStack!.indexOf(item)}
                      >
                          {item}
                      </section>
                  ))
                : props.prop.contentStack.map((item) => (
                      <article
                          key={props.prop.contentStack!.indexOf(item)}
                      >
                          {item}
                      </article>
                  ))}
        </main>
    );
}
