import React from "react";
import Link from "next/link";
import Image from "next/image";

interface NavigationHeaderProps {
    children: React.ReactNode
}

export default async function NavigationHeader({children}: NavigationHeaderProps) {
    return <header className={"sticky top-0 z-40 w-full container mx-auto flex flex-row p-2 gap-1 print:hidden"}>
        <Link href={"/"}
              className={"bg-blue-100 dark:bg-blue-900 hover:bg-blue-200 dark:hover:bg-blue-800 transition-all duration-300 flex-grow-0 flex-shrink-0 rounded-s-lg rounded-e-sm h-14 p-2 aspect-square"}>
            <Image src={"/KLJ.svg"} alt={"Het KLJ logo"} width={1} height={1} className={"w-full h-full"}/>
        </Link>
        <div className={"bg-blue-100 dark:bg-blue-900 flex-grow flex-shrink rounded-sm overflow-x-auto no-scrollbar flex gap-1"}>
            {children}
        </div>
        <Link href={"mailto:allebestuur@kljstekene.be"} target={"_blank"}
              className={"bg-blue-100 dark:bg-blue-900 hover:bg-blue-200 dark:hover:bg-blue-800 transition-all duration-300 flex-grow-0 flex-shrink-0 rounded-s-sm rounded-e-lg h-14 flex items-center px-4 py-2 uppercase"}>Mail</Link>
    </header>
}