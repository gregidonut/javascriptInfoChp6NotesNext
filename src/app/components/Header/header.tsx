import styles from "./header.module.css";
import type {Metadata} from "next";

export default function Header() {
    return (
        <header className={styles.header}>
            <h1><a href="/">Chapter 6: functions</a></h1>
        </header>
    );
}
