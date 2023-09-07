import siteConfig from "@/site.config"
import EventIndexCard from "@/components/events/event-index-card";

export const metadata = {
    title: "Evenementen",
    description: "Een lijst van evenementen van KLJ Stekene.",

    alternates: {
        canonical: "/evenementen",
    },
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

export default async function page() {
    return <main className={"min-h-[calc(100svh-72px-56px)] print:min-h[100svh] flex flex-col gap-2"}>
        <section className={"container mx-auto grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 print:grid-cols-3 gap-2 px-2"}>
            {siteConfig.evenementen
                .map((event, index) => <EventIndexCard key={index} name={event.name} eventUrl={event.URL} teaserImage={event.images.teaser}/>)}
        </section>
    </main>
}