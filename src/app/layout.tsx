import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "chapter 6: functions",
    description: "my notes on chapter 6 functions of javascript.info",
    icons: {
        icon: "/sword.svg",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
