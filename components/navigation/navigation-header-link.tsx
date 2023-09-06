import Link from "next/link";
import React, {HTMLAttributeAnchorTarget} from "react";
import {UrlObject} from "url";

type Url = string | UrlObject;

interface NavigationHeaderLinkProps {
    href: Url;
    target?: HTMLAttributeAnchorTarget;
    children?: React.ReactNode;
}

export default async function NavigationHeaderLink({href, target, children}: NavigationHeaderLinkProps) {
    return <Link href={href} target={target}
                 className={"bg-blue-100 dark:bg-blue-900 hover:bg-blue-200 dark:hover:bg-blue-800 transition-all duration-300 rounded-sm p-4 uppercase"}>
        {children}
    </Link>
}