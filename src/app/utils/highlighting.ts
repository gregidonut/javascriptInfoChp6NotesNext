import hljs from "highlight.js/lib/core";
import "./dracula.css";
import javascript from "highlight.js/lib/languages/javascript";
import typescript from "highlight.js/lib/languages/typescript";
export default function preTagHighlighting() {
    hljs.registerLanguage("javascript", javascript);
    hljs.registerLanguage("typescript", typescript);
    hljs.initHighlighting();
}
