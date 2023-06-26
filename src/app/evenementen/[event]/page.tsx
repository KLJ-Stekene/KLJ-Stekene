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

        alternates: {
            canonical: "/evenementen/" + event.URL,
        },
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
            {!!event.images && !!event.images.banner &&
                <Image className={"w-full min-h-[35svh] max-h-[65svh] object-cover sm:col-span-2 lg:col-span-3 print:col-span-3 rounded-lg"} priority src={event.images.banner} alt={event.name + "'s banner"} width={1900} height={400}/>
            }
            <h1 className={"bg-gray-100 dark:bg-gray-900 rounded-lg sm:col-span-2 lg:col-span-3 print:col-span-3 text-3xl font-bold text-center p-2"}>{event.name}</h1>
            {!!event.tickets && (!!event.tickets.prijsVVK || !!event.tickets.prijsVVK) &&
                <div className={"flex flex-col gap-1"}>
                    <h3 className={"bg-gray-100 dark:bg-gray-900 rounded-sm rounded-t-lg text-xl font-semibold p-2"}>Tickets</h3>
                    <div className={"bg-gray-100 dark:bg-gray-900 rounded-sm p-2"}>
                        {!!event.tickets.prijsVVK && <p>Prijs voorverkoop: €{event.tickets.prijsVVK}</p>}
                        {!!event.tickets.prijsADK && <p>Prijs aan de kassa: €{event.tickets.prijsADK}</p>}
                    </div>
                    <Link className={"bg-blue-100 dark:bg-blue-900 hover:bg-blue-200 dark:hover:bg-blue-800 rounded-b-lg rounded-sm p-2"} href={event.tickets.onlineURL} target={"_blank"}>Koop tickets</Link>
                </div>
            }
            <div className={"flex flex-col gap-1"}>
                <h3 className={"bg-gray-100 dark:bg-gray-900 rounded-sm rounded-t-lg text-xl font-semibold p-2"}>Aanvang &amp; einde</h3>
                <div className={"bg-gray-100 dark:bg-gray-900 rounded-sm p-2"}>
                    {!!event.start && <p>Aanvang: {event.start.toLocaleString("nl-BE", {dateStyle: "long", timeStyle: "short"})}</p>}
                    {!!event.end && <p>Einde: {event.end.toLocaleString("nl-BE", {dateStyle: "long", timeStyle: "short"})}</p>}
                </div>
                <p className={"bg-gray-100 dark:bg-gray-900 rounded-b-lg rounded-sm uppercase p-2"} lang={"en-US"}>In = in / out = out</p>
            </div>
            <div className={"flex flex-col gap-1"}>
                <h3 className={"bg-gray-100 dark:bg-gray-900 rounded-sm rounded-t-lg text-xl font-semibold p-2"}>Locatie &amp; ingang</h3>
                <div className={"flex flex-col sm:flex-row flex-grow gap-1"}>
                    <div className={"bg-gray-100 dark:bg-gray-900 sm:rounded-bl-lg rounded-sm flex-grow p-2"}>
                        <p>{event.location.name}</p>
                        <p>{event.location.adres.streetAndNum},</p>
                        <p>{event.location.adres.postalCode} {event.location.adres.City}</p>
                    </div>
                    <div className={"bg-gray-100 dark:bg-gray-900 sm:rounded-br-lg rounded-sm flex-grow p-2"}>
                        <p>{event.entry.name}</p>
                        <p>{event.entry.adres.streetAndNum},</p>
                        <p>{event.entry.adres.postalCode} {event.entry.adres.City}</p>
                    </div>
                </div>
            </div>
            <iframe className={"bg-gray-100 dark:bg-gray-900 rounded-lg sm:col-span-2 lg:col-span-3 h-[40vh] print:hidden"} width={"100%"} height={"100%"}
                    src={event.entry.iFrameURL} allowFullScreen loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade" title={"KLJ Stekene's Google Maps location"}/>
        </section>
        {!!event.lineup && event.lineup.length !== 0 &&
            <section className={"container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 print:grid-cols-3 gap-2 px-2"}>
                <h2 className={"bg-gray-100 dark:bg-gray-900 rounded-lg sm:col-span-2 lg:col-span-3 print:col-span-3 text-2xl font-bold text-center p-2"}>Line-up</h2>
                {event.lineup
                    .filter((dj) => dj.TBA === false)
                    .map((dj, index) => <div key={index} className={"flex flex-col gap-1"}>
                            <Image className={"first:rounded-t-lg rounded-sm w-full"} src={dj.image} alt={dj.name + "'s gezicht"} width={380} height={380}/>
                            <h3 className={"bg-gray-100 dark:bg-gray-900 last:rounded-b-lg rounded-sm p-2 text-xl font-semibold"}>{dj.name}</h3>
                        </div>,
                    )
                }
                {event.lineup
                    .filter((dj) => dj.TBA === true)
                    .map((dj, index) => <div key={index} className={"flex flex-col gap-1 relative"}>
                            <div className={"rounded-t-lg rounded-sm w-full aspect-square backdrop-blur-3xl z-50"}/>
                            <Image className={"rounded-t-lg rounded-sm w-full aspect-square absolute z-40"} src={dj.image} alt={dj.name + "'s gezicht"} width={380} height={380}/>
                            <h3 className={"bg-gray-100 dark:bg-gray-900 last:rounded-b-lg rounded-sm p-2 text-xl font-semibold"}>Nog aan te kondigen!</h3>
                        </div>,
                    )
                }
            </section>
        }
    </main>;
}