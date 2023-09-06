import {UrlObject} from "url";
import React, {HTMLAttributeAnchorTarget} from "react";
import Link from "next/link";

type Url = string | UrlObject;

interface NavigationFooterLinkProps {
    href: Url;
    target?: HTMLAttributeAnchorTarget;
    children?: React.ReactNode;
}

export default async function NavigationFooterLink({href, target, children}: NavigationFooterLinkProps) {
    return <Link href={href} target={target}
                 className={"bg-gray-100 dark:bg-gray-900 hover:bg-gray-200 dark:hover:bg-gray-800 rounded-sm only-of-type:bg-transparent only-of-type:-ml-2 only-of-type:hover:ml-0 transition-all duration-300 last:flex-grow first:rounded-t-lg first:md:rounded-tl-sm first:md:rounded-r-lg last:rounded-b-lg last:md:rounded-br-sm last:md:rounded-l-lg p-2"}>
        {children}
    </Link>
}