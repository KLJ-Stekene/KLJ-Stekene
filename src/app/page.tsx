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
    return <main>
    </main>;
}
