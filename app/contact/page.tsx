import {Metadata} from "next";
import siteConfig from "@/site.config"
import Boardmember from "@/components/contact/boardmember";
import BoardmembersGroup from "@/components/contact/boardmembers-group";

export const metadata: Metadata = {
    title: "Contact",
    description: "Wil je ons bereiken? Alle contact media is te vinden op deze pagina!",

    alternates: {
        canonical: "/contact",
    },
    openGraph: {
        title: "Contact",
        description: "Wil je ons bereiken? Alle contact media is te vinden op deze pagina!",
        siteName: "KLJ Stekene",
        url: "https://www.kljstekene.be/contact",
        type: "website",
        locale: "nl-BE",
        images: [
            {
                alt: "KLJ Stekene's bestuur",
                url: "/assets/img/boardmember/2022/groepsfoto.jpg",
                width: 5581,
                height: 3139,
                type: "image/jpeg",
            },
        ],
    },
    twitter: {
        title: "Contact",
        description: "Wil je ons bereiken? Alle contact media is te vinden op deze pagina!",
        creator: "@JensPenneman",
        creatorId: "3372038091",
        card: "summary_large_image",
        images: ["/assets/img/boardmember/2022/groepsfoto.jpg"],
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

export default async function page() {
    return <main className={"min-h-[calc(100svh-72px-56px)] print:min-h[100svh] flex flex-col gap-2"}>
        <section className={"container mx-auto px-2"}>
            <BoardmembersGroup name={"Het volledige bestuur"} email={"allebestuur@kljstekene.be"} avatar={"/assets/img/boardmember/2023/groepsfoto.jpg"}/>
        </section>
        <section className={"container mx-auto grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 print:grid-cols-3 gap-2 px-2"}>
            {
                siteConfig.bestuur.leden
                    .map((bestuurslid, index) => <Boardmember key={index} {...bestuurslid}/>)
            }
        </section>
    </main>
}