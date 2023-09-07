import React from "react";

interface NavigationFooterProps {
    children: React.ReactNode
}

export default async function NavigationFooter({children}: NavigationFooterProps) {
    return <footer className={"w-full container mx-auto flex flex-col md:flex-row-reverse gap-1 p-2 print:hidden"}>
        {children}
    </footer>
}