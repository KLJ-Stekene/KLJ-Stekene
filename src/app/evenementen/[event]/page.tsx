import {Metadata} from "next";
import siteConfig from "@/site.config";
import {notFound} from "next/navigation";

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

export default function EvenementenNL() {
    return <main className={"min-h-[calc(100svh-72px-56px)] print:min-h[100svh] flex flex-col gap-2"}>
        <section className={"container mx-auto px-2"}>
            <p className={"bg-yellow-100 dark:bg-yellow-900 rounded-lg p-2"}>De website is nog niet klaar! Kom binnen enkele dagen terug voor het evenement!</p>
        </section>
    </main>;
}