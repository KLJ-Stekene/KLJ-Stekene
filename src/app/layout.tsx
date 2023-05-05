import "./globals.css";
import {Inter} from "next/font/google";
import Image from "next/image";
import React from "react";
import Link from "next/link";

const inter = Inter({subsets: ["latin"]});

export const metadata = {
    title: {
        template: "%s | KLJ Stekene",
        default: "KLJ Stekene",
    },
    description: "De beste jeugdbeweging, ook in Stekene!",
    generator: "Next.js",
    applicationName: "KLJ Stekene",
    referrer: "strict-origin-when-cross-origin",
    authors: [{name: "Jens Penneman", url: "https://jenspenneman.com"}],
    colorScheme: "light dark",
    creator: "Jens Penneman",
    publisher: "WEB4YOU",
    formatDetection: {
        telephone: false,
        email: false,
        date: false,
        address: false,
    },
    metadataBase: new URL("https://www.kljstekene.be"),
    alternates: {
        canonical: "/",
        languages: {
            "nl-BE": "/nl-BE",
        },
    },
    themeColor: [
        {media: "(prefers-color-scheme: light)", color: "white"},
        {media: "(prefers-color-scheme: dark)", color: "black"},
    ],
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="nl">
        <body className={inter.className}>
        <header className={"sticky top-0 w-full container mx-auto flex flex-row p-2 gap-1 print:hidden"}>
            <Link href={"/"} className={"bg-gray-100 dark:bg-gray-900 hover:bg-gray-200 dark:hover:bg-gray-800 flex-grow-0 flex-shrink-0 rounded-s-lg rounded-e-sm h-14 p-2 aspect-square"}>
                <Image src={"/KLJ.svg"} alt={"Het KLJ logo"} width={1} height={1} className={"w-full h-full"}/>
            </Link>
            <div className={"bg-gray-100 dark:bg-gray-900 flex-grow flex-shrink rounded-sm overflow-x-auto no-scrollbar p-2 flex gap-1"}>
                <Link href={"/contact"} className={"hover:bg-gray-200 dark:hover:bg-gray-800 rounded-s-lg rounded-e-sm px-4 py-2 uppercase"}>Contact</Link>
                <Link href={"/evenementen"} className={"hover:bg-gray-200 dark:hover:bg-gray-800 rounded-sm px-4 py-2 uppercase"}>Evenementen</Link>
                <Link href={"/sponsors"} className={"hover:bg-gray-200 dark:hover:bg-gray-800 rounded-s-sm rounded-e-lg px-4 py-2 uppercase"}>Sponsors</Link>
            </div>
            <Link href={"mailto:allebestuur@kljstekene.be"} className={"bg-gray-100 dark:bg-gray-900 hover:bg-gray-200 dark:hover:bg-gray-800 flex-grow-0 flex-shrink-0 rounded-s-sm rounded-e-lg h-14 flex items-center px-4 py-2 uppercase"}>Mail</Link>
        </header>
        {children}
        </body>
        </html>
    );
}
