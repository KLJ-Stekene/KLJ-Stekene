import {GlobalNavigation} from "../components/navigation/globalNavigation";

export default function RootLayout({children}) {
    return <html>
    <head/>
    <body>
    <GlobalNavigation/>
    {children}
    </body>
    </html>;
}
