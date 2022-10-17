import {Fragment} from "react";
import Navbar from "./navbar";
import Footer from "./footer";

export default function Layout({children}) {
    return <Fragment>
        <Navbar/>
        <main>{children}</main>
        <Footer/>
    </Fragment>;
}