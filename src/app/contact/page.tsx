import Image from "next/image";
import Link from "next/link";
import siteConfig from "@/site.config";

export const metadata = {
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

export default function ContactNL() {
    return <main className={"min-h-[calc(100svh-72px-56px)] print:min-h[100svh] flex flex-col gap-2"}>
        <section className={"container mx-auto grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 print:grid-cols-3 gap-2 px-2"}>
            <div className={"flex flex-col sm:col-span-2 lg:col-span-3 xl:col-span-4 print:col-span-3 gap-1"}>
                <div className={"h-[45svh] relative"}>
                    <Image className={"object-cover rounded-t-lg rounded-sm"} src={"/assets/img/boardmember/2022/groepsfoto.jpg"} alt={"Groepsfoto van het bestuur"} fill/>
                </div>
                <h3 className={"bg-gray-100 dark:bg-gray-900 first:rounded-t-lg last:rounded-b-lg rounded-sm p-2 text-xl font-semibold text-center"}>Het volledige bestuur</h3>
                <Link className={"bg-gray-100 dark:bg-gray-900 hover:bg-gray-200 dark:hover:bg-gray-800 first:rounded-t-lg last:rounded-b-lg rounded-sm p-2 text-center"} href={"mailto:allebestuur@kljstekene.be"} target={"_blank"}>Mail ons</Link>
            </div>
            {siteConfig.bestuur.leden
                .map((bestuurslid, index) =>
                    <div key={index} className={"flex flex-col gap-1"}>
                        <Image className={"first:rounded-t-lg rounded-sm w-full"} src={bestuurslid.avatar} alt={bestuurslid.firstname + "'s gezicht"} width={380} height={380}/>
                        <h3 className={"bg-gray-100 dark:bg-gray-900 first:rounded-t-lg rounded-sm p-2 text-xl font-semibold"}>{bestuurslid.firstname} {bestuurslid.lastname}</h3>
                        <ul className={"bg-gray-100 dark:bg-gray-900 rounded-sm flex flex-col flex-grow gap-1"}>
                            {bestuurslid.tasklist
                                .map((task, index) =>
                                    <li key={index} className={"border-b-2 last:border-b-0 dark:border-gray-800 p-2 print:truncate"}>{task}</li>,
                                )
                            }
                        </ul>
                        <nav className={"flex flex-row gap-1"}>
                            {bestuurslid.socialMedia
                                .map((socialMedium, index) =>
                                    <Link key={index} className={"bg-gray-100 dark:bg-gray-900 hover:bg-gray-200 dark:hover:bg-gray-800 first:rounded-bl-lg rounded-sm last:rounded-br-lg last:flex-grow last:print:truncate p-2"} href={socialMedium.URL} target={"_blank"}>{socialMedium.text}</Link>,
                                )
                            }
                        </nav>
                    </div>,
                )
            }
        </section>
    </main>;
}