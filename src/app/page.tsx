import Image from "next/image";

export const metadata = {
    title: "KLJ Stekene",
    description: "De beste jeugdbeweging, ook in Stekene!",
    openGraph: {
        title: "KLJ Stekene",
        description: "De beste jeugdbeweging, ook in Stekene!",
        url: "https://www.kljstekene.be",
        siteName: "KLJ Stekene",
        locale: "nl-BE",
        type: "website",
        //TODO Foto's toevoegen: https://nextjs.org/docs/app/api-reference/functions/generate-metadata#opengraph
    },
    twitter: {
        card: "summary_large_image",
        title: "KLJ Stekene",
        description: "De beste jeugdbeweging, ook in Stekene!",
        creator: "@JensPenneman",
        creatorId: "3372038091",
        //TODO Foto's toevoegen: https://nextjs.org/docs/app/api-reference/functions/generate-metadata#twitter
    },
    //TODO Apple tags toevoegen: https://nextjs.org/docs/app/api-reference/functions/generate-metadata#applewebapp
    //TODO Icons toevoegen: https://nextjs.org/docs/app/api-reference/functions/generate-metadata#icons
    robots: {
        index: false,
        follow: true,
        nocache: true,
        googleBot: {
            index: true,
            follow: false,
            noimageindex: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
};

export default function IndexNL() {
    return <main className={"min-h-[calc(100vh-72px-56px)] flex flex-col gap-2"}>
        <section className={"container mx-auto h-[calc(100vh-72px)] last:h-[calc(100vh-72px-56px)] relative px-2"}>
            <Image className={"h-full object-cover rounded-lg"} src={"/assets/img/events/2022Weekend.JPEG"} alt={""} width={1669} height={938}/>
            <div className={"absolute sm:w-1/2 w-2/3 text-white transform-gpu top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-2 rounded-lg backdrop-blur-sm lg:backdrop-blur"}>
                <svg className={"w-full"} viewBox={"0 0 100 15"}>
                    <text textAnchor={"middle"} x={"50%"} dominantBaseline={"middle"} y={"61%"} fill={"white"} fontSize={17}>KLJ Stekene</text>
                </svg>
            </div>
        </section>
        <section className={"container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 px-2"}>
            <div className={"flex flex-col gap-1 md:col-span-2 lg:col-span-1"}>
                <h2 className={"bg-gray-100 dark:bg-gray-900 first:rounded-t-lg rounded-sm flex-grow-0 p-2"}>Wat?</h2>
                <p className={"bg-gray-100 dark:bg-gray-900 last:rounded-b-lg rounded-sm flex-grow p-2"}>KLJ Stekene is een jeugdbeweging waar jongeren samen plezier maken, avonturen beleven en vriendschappen opbouwen. We bieden een divers scala aan activiteiten en zorgen voor een positive en warme omgeving waarin iedereen welkom is.</p>
            </div>
            <div className={"flex flex-col gap-1"}>
                <h2 className={"bg-gray-100 dark:bg-gray-900 first:rounded-t-lg rounded-sm flex-grow-0 p-2"}>Wie?</h2>
                <p className={"bg-gray-100 dark:bg-gray-900 last:rounded-b-lg rounded-sm flex-grow p-2"}>Bij KLJ Stekene zijn niet alleen jongeren van 16 jaar en ouder welkom, maar we hebben ook een aparte werking voor mensen van 20 jaar en ouder. We streven ernaar om activiteiten aan te bieden die aansluiten bij de verschillende leeftijdsgroepen, zodat
                    iedereen kan genieten van leuke en uitdagende ervaringen.</p>
            </div>
            <div className={"flex flex-col gap-1"}>
                <h2 className={"bg-gray-100 dark:bg-gray-900 first:rounded-t-lg rounded-sm flex-grow-0 p-2"}>Waar?</h2>
                <p className={"bg-gray-100 dark:bg-gray-900 last:rounded-b-lg rounded-sm flex-grow p-2"}>Ons adres is Sparrenhofdreef 25A, 9190 Stekene. Je kunt ons herkennen aan onze KLJ-vlag, en er is een fietsenstalling en parkeergelegenheid beschikbaar voor auto&apos;s. We kijken ernaar uit je daar te verwelkomen!</p>
            </div>
            <iframe className={"bg-gray-100 dark:bg-gray-900 rounded-lg md:col-span-2 lg:col-span-3 h-[40vh]"} width={"100%"} height={"100%"}
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2499.71665326768!2d4.034716576970252!3d51.20587253268567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c38612daa95979%3A0x6ea12edb2df41fc1!2sKLJ%20Stekene!5e0!3m2!1snl!2sbe!4v1684787228928!5m2!1snl!2sbe" allowFullScreen loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"/>
            <div className={"flex flex-col gap-1 md:col-span-2 lg:col-span-1"}>
                <h2 className={"bg-gray-100 dark:bg-gray-900 first:rounded-t-lg rounded-sm flex-grow-0 p-2"}>Wanneer?</h2>
                <p className={"bg-gray-100 dark:bg-gray-900 last:rounded-b-lg rounded-sm flex-grow p-2"}>We komen elke vrijdagavond om 20:00 uur samen. Gedurende de zomer organiseren we ook sportevenementen, een kamp en een weekend vol avontuur. Vergeet ook niet onze speciale evenementen, zoals de dessertquiz en de grote fuif in het eerste weekend van
                    augustus. Kom en doe mee!</p>
            </div>
            <div className={"flex flex-col gap-1"}>
                <h2 className={"bg-gray-100 dark:bg-gray-900 first:rounded-t-lg rounded-sm flex-grow-0 p-2"}>Kamp</h2>
                <p className={"bg-gray-100 dark:bg-gray-900 last:rounded-b-lg rounded-sm flex-grow p-2"}>Ons kamp vindt plaats van 11 tot 21 juli. Voor slechts 145 euro krijg je elke dag een ochtend-, middag- en avondactiviteit, evenals maaltijden en accommodatie. Drankjes zijn exclusief. We hebben ook een spannende daguitstap en een dorpspel gepland. Je
                    kunt met de fiets komen of gebruikmaken van het openbaar vervoer.</p>
            </div>
            <div className={"flex flex-col gap-1"}>
                <h2 className={"bg-gray-100 dark:bg-gray-900 first:rounded-t-lg rounded-sm flex-grow-0 p-2"}>Weekend</h2>
                <p className={"bg-gray-100 dark:bg-gray-900 last:rounded-b-lg rounded-sm flex-grow p-2"}>Ons weekend is een geweldige 3-daagse ervaring die plaatsvindt rond de krokusvakantie. We vertrekken op vrijdagavond en komen op zondagavond terug. Voor slechts 45 euro kun je deelnemen aan alle activiteiten, inclusief vervoer met de auto. Net als bij het
                    kamp is alles voorzien, behalve drankjes. Mis deze leuke trip niet!</p>
            </div>
        </section>
    </main>;
}
