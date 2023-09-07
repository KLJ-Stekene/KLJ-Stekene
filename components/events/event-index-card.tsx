import Link from "next/link";
import {UrlObject} from "url";
import {StaticImport} from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

type Url = string | UrlObject;

interface EventIndexCardProps {
    name: string;
    eventUrl: Url;
    teaserImage: string | StaticImport;
}

export default async function EventIndexCard({name, eventUrl, teaserImage}: EventIndexCardProps) {
    return <Link href={"evenementen/" + eventUrl} className={"group flex flex-col gap-1 rounded-lg"}>
        <h3 className={"bg-gray-100 dark:bg-gray-900 group-hover:bg-gray-200 dark:group-hover:bg-gray-800 transition-all duration-300 rounded-sm first:rounded-t-lg p-2 text-xl font-semibold"}>{name}</h3>
        <Image src={teaserImage} alt={name + "'s teaser"} width={381} height={380}
               className={"brightness-100 group-hover:brightness-75 transition-all duration-300 w-full object-cover aspect-square rounded-sm last:rounded-b-lg"}/>
    </Link>
}