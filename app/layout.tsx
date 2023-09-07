import '@/styles/globals.css'
import type {Metadata} from 'next'
import {inter} from "@/styles/fonts";
import NavigationHeader from "@/components/navigation/navigation-header";
import NavigationHeaderLink from "@/components/navigation/navigation-header-link";
import NavigationFooter from "@/components/navigation/navigation-footer";
import NavigationFooterLink from "@/components/navigation/navigation-footer-link";
import NavigationFooterText from "@/components/navigation/navigation-footer-text";

export const metadata: Metadata = {
    title: {
        template: "%s | KLJ Stekene",
        default: "KLJ Stekene",
    },
    description: "De beste jeugdbeweging, ook in Stekene!",
    generator: "Next.js",
    applicationName: "KLJ Stekene",
    referrer: "strict-origin-when-cross-origin",
    authors: [{name: "Jens Penneman", url: "https://jenspenneman.com"}],
    colorScheme: "light dark",
    creator: "Jens Penneman",
    publisher: "WEB4YOU",
    formatDetection: {
        telephone: false,
        email: false,
        date: false,
        address: false,
    },
    metadataBase: new URL("https://www.kljstekene.be"),
    alternates: {
        canonical: "/",
    },
    themeColor: [
        {media: "(prefers-color-scheme: light)", color: "white"},
        {media: "(prefers-color-scheme: dark)", color: "black"},
    ],
};

export default function RootLayout({children,}: { children: React.ReactNode }) {
    return <html lang="nl-BE">
    <body className={inter.className}>
    <NavigationHeader>
        <NavigationHeaderLink href={"/contact"}>Contact</NavigationHeaderLink>
        <NavigationHeaderLink href={"/evenementen"}>Evenementen</NavigationHeaderLink>
    </NavigationHeader>
    {children}
    <NavigationFooter>
        <NavigationFooterLink href={"https://www.facebook.com/KljStekene"} target={"_blank"}>Facebook</NavigationFooterLink>
        <NavigationFooterLink href={"https://www.instagram.com/kljstekene/"} target={"_blank"}>Instagram</NavigationFooterLink>
        <NavigationFooterText>Created by <NavigationFooterLink href={"https://www.web-4-you.be"}>WEB4YOU</NavigationFooterLink></NavigationFooterText>
    </NavigationFooter>
    </body>
    </html>
}
