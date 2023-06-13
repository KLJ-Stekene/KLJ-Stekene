import {Metadata} from "next";
import siteConfig from "@/site.config";
import {notFound} from "next/navigation";
import Image from "next/image";
import Link from "next/link";

type Props = {
    params: { event: string }
}

export async function generateMetadata({params}: Props): Promise<Metadata> {
    const eventURL = params.event;
    const event = siteConfig.evenementen.find((event) => event.URL === eventURL);
    if (event === undefined) notFound();

    return {
        title: event.name,
        description: event.description,

        openGraph: {
            title: event.name,
            description: event.description,
            siteName: "KLJ Stekene",
            url: "https://www.kljstekene.be/evenementen/" + event.URL,
            type: "website",
            locale: "nl-BE",
            images: [
                {
                    alt: "Teaser",
                    url: event.images.teaser,
                    type: "image/png",
                },
            ],
        },
        twitter: {
            title: event.name,
            description: event.description,
            creator: "@JensPenneman",
            creatorId: "3372038091",
            card: "summary_large_image",
            images: [event.images.banner],
        },
        //TODO Apple tags toevoegen: https://nextjs.org/docs/app/api-reference/functions/generate-metadata#applewebapp
        //TODO Icons toevoegen: https://nextjs.org/docs/app/api-reference/functions/generate-metadata#icons
        robots: {
            index: true,
            follow: true,
            nocache: true,
            noarchive: true,
            googleBot: {
                index: true,
                follow: true,
                noimageindex: true,
                notranslate: true,
                noarchive: true,
                "max-video-preview": -1,
                "max-image-preview": "large",
                "max-snippet": -1,
            },
        },
    };
}

export default function EvenementenNL({params}: Props) {
    const eventURL = params.event;
    const event = siteConfig.evenementen.find((event) => event.URL === eventURL);
    if (event === undefined) notFound();

    return <main className={"min-h-[calc(100svh-72px-56px)] print:min-h[100svh] flex flex-col gap-2"}>
        <section className={"container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 print:grid-cols-3 gap-2 px-2"}>
            <Image className={"w-full min-h-[35svh] object-cover sm:col-span-2 lg:col-span-3 print:col-span-3 rounded-lg"} priority src={event.images.banner} alt={"Event's image"} width={1900} height={400}/>
            <div className={"flex flex-col gap-1"}>
                <h3 className={"bg-gray-100 dark:bg-gray-900 rounded-sm rounded-t-lg text-xl font-semibold p-2"}>Tickets</h3>
                <div className={"bg-gray-100 dark:bg-gray-900 rounded-sm p-2"}>
                    <p>Prijs VVK: €{event.tickets.prijsVVK}</p>
                    <p>Prijs ADK: €{event.tickets.prijsADK}</p>
                </div>
                <Link className={"bg-gray-100 dark:bg-gray-900 hover:bg-gray-200 dark:hover:bg-gray-800 rounded-b-lg rounded-sm p-2"} href={event.tickets.onlineURL} target={"_blank"}>Koop tickets</Link>
            </div>
            <div className={"flex flex-col gap-1"}>
                <h3 className={"bg-gray-100 dark:bg-gray-900 rounded-sm rounded-t-lg text-xl font-semibold p-2"}>Aanvang &amp; einde</h3>
                <div className={"bg-gray-100 dark:bg-gray-900 rounded-sm p-2"}>
                    <p>Aanvang: {event.start.toLocaleString("nl-BE", {dateStyle: "long", timeStyle: "short"})}</p>
                    <p>Einde: {event.end.toLocaleString("nl-BE", {dateStyle: "long", timeStyle: "short"})}</p>
                </div>
                <p className={"bg-gray-100 dark:bg-gray-900 rounded-b-lg rounded-sm uppercase p-2"} lang={"en-US"}>In = in / out = out</p>
            </div>
            <div className={"flex flex-col gap-1"}>
                <h3 className={"bg-gray-100 dark:bg-gray-900 rounded-sm rounded-t-lg text-xl font-semibold p-2"}>Locatie</h3>
                <div className={"bg-gray-100 dark:bg-gray-900 rounded-b-lg rounded-sm flex-grow p-2"}>
                    <p>{event.location.name}</p>
                    <p>{event.entry.adres.streetAndNum},</p>
                    <p>{event.entry.adres.postalCode} {event.entry.adres.City}</p>
                </div>
            </div>
        </section>
    </main>;
}