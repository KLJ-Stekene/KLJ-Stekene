import React from "react";

interface NavigationFooterTextProps {
    children?: React.ReactNode;
}

export default async function NavigationFooterText({children}: NavigationFooterTextProps) {
    return <span
        className={"bg-gray-100 dark:bg-gray-900 rounded-sm last:flex-grow first:rounded-t-lg first:md:rounded-tl-sm first:md:rounded-r-lg last:rounded-b-lg last:md:rounded-br-sm last:md:rounded-l-lg p-2"}>
        {children}
    </span>
}