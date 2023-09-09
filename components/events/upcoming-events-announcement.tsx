import Link from "next/link";
import siteConfig from "@/site.config"
import {UrlObject} from "url";

export default async function UpcomingEventsAnnouncement() {
    const upcomingEvents = siteConfig.evenementen.filter((event) => event.start > new Date())

    if (upcomingEvents.length === 0) return undefined

    return <div className={"sticky top-[72px] z-40 flex container mx-auto px-2 pb-2"}>
        {
            upcomingEvents.length === 1
                ? <SingleUpcomingEvent name={upcomingEvents[0].name} eventUrl={upcomingEvents[0].URL}/>
                : <MultipleUpcomingEvents/>
        }
    </div>
}


type Url = string | UrlObject;

interface SingleUpcomingEventProps {
    name: string;
    eventUrl: Url;
}

async function SingleUpcomingEvent({name, eventUrl}: SingleUpcomingEventProps) {
    return <Link href={`/evenementen/${eventUrl}/`} className={"bg-red-100 dark:bg-red-900 hover:bg-red-200 dark:hover:bg-red-800 rounded-lg transition-all duration-300 p-2 flex-grow"}>
        Binnenkort is het {name}! Meer info -{">"}
    </Link>
}

async function MultipleUpcomingEvents() {
    return <Link href={"/evenementen"} className={"bg-red-100 dark:bg-red-900 hover:bg-red-200 dark:hover:bg-red-800 rounded-lg transition-all duration-300 p-2 flex-grow"}>
        Binnenkort komen er meerdere evenementen aan! Meer info -{">"}
    </Link>
}