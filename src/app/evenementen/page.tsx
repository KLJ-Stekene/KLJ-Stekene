import siteConfig from "@/site.config";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
    title: "Evenementen",
    description: "Een lijst van evenementen van KLJ Stekene.",
    openGraph: {
        title: "Evenementen",
        description: "Een lijst van evenementen van KLJ Stekene.",
        url: "https://www.kljstekene.be/evenementen/",
        siteName: "KLJ Stekene",
        locale: "nl-BE",
        type: "website",
        //TODO Foto's toevoegen: https://nextjs.org/docs/app/api-reference/functions/generate-metadata#opengraph
    },
    twitter: {
        card: "summary_large_image",
        title: "Evenementen",
        description: "Een lijst van evenementen van KLJ Stekene.",
        creator: "@JensPenneman",
        creatorId: "3372038091",
        //TODO Foto's toevoegen: https://nextjs.org/docs/app/api-reference/functions/generate-metadata#twitter
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
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
};

export default function EvenementenNL() {
    return <main className={"min-h-[calc(100svh-72px-56px)] print:min-h[100svh] flex flex-col gap-2"}>
        <section className={"container mx-auto grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 print:grid-cols-3 gap-2 px-2"}>
            {siteConfig.evenementen
                .map((event, index) =>
                    <div key={index} className={"flex flex-col gap-1"}>
                        <div className={"flex flex-row gap-1"}>
                            <div className={"h-full aspect-square relative"}>
                                <Image className={"object-fit rounded-tl-lg rounded-sm"} src={event.images.logo} alt={event.name + "'s logo"} fill/>
                            </div>
                            <h3 className={"flex-grow bg-gray-100 dark:bg-gray-900 last:rounded-tr-lg rounded-sm p-2 text-xl font-semibold"}>{event.name}</h3>
                        </div>
                        <Image className={"rounded-sm w-full"} src={event.images.teaser} alt={event.name + "'s teaser"} width={381} height={380}/>
                        <div className={"flex flex-row gap-1"}>
                            <Link key={index} className={"bg-gray-100 dark:bg-gray-900 hover:bg-gray-200 dark:hover:bg-gray-800 first:rounded-bl-lg rounded-sm last:rounded-br-lg last:flex-grow last:print:truncate p-2"} href={event.tickets.onlineURL} target={"_blank"}>Tickets</Link>
                            <Link key={index} className={"bg-gray-100 dark:bg-gray-900 hover:bg-gray-200 dark:hover:bg-gray-800 first:rounded-bl-lg rounded-sm last:rounded-br-lg last:flex-grow last:print:truncate p-2"} href={"evenementen/" + event.URL}>Meer info</Link>
                        </div>
                    </div>,
                )
            }
        </section>
    </main>;
}