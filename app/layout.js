import "./globals.css";
import {GlobalNavigation} from "../components/navigation/globalNavigation";
import {GlobalFooter} from "../components/navigation/globalFooter";

export default function RootLayout({children}) {
    return <html>
    <head/>
    <body>
    <GlobalNavigation/>
    {children}
    <GlobalFooter/>
    </body>
    </html>;
}
