import Image from "next/image";
import Link from "next/link";

export const metadata = {
    title: "Contact",
};

export default function ContactNL() {
    return <main className={"min-h-[calc(100svh-72px-56px)] print:min-h[100svh] flex flex-col gap-2"}>
        <section className={"container mx-auto grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 print:grid-cols-3 gap-2 px-2"}>
            <div className={"flex flex-col gap-1"}>
                <Image priority className={"first:rounded-t-lg rounded-sm w-full"} src={"/assets/img/boardmember/2022/ambervanmoeseke.jpg"} alt={"Amber's gezicht"} width={380} height={380}/>
                <h3 className={"bg-gray-100 dark:bg-gray-900 first:rounded-t-lg rounded-sm p-2 text-xl font-semibold"}>Amber Van Moeseke</h3>
                <ul className={"bg-gray-100 dark:bg-gray-900 rounded-sm flex flex-col flex-grow gap-1"}>
                    <li className={"border-b-2 last:border-b-0 dark:border-gray-800 p-2 print:truncate"}>Sportfeestverantwoordelijke</li>
                    <li className={"border-b-2 last:border-b-0 dark:border-gray-800 p-2 print:truncate"}>Kamp- en weekendverantwoordelijke</li>
                    <li className={"border-b-2 last:border-b-0 dark:border-gray-800 p-2 print:truncate"}>Verjaardag- en prikbordverantwoordelijke</li>
                </ul>
                <nav className={"flex flex-row gap-1"}>
                    <Link className={"bg-gray-100 dark:bg-gray-900 hover:bg-gray-200 dark:hover:bg-gray-800 first:rounded-bl-lg rounded-sm last:rounded-br-lg last:flex-grow last:print:truncate p-2"} href={"https://www.facebook.com/amber.vanmoeseke"} target={"_blank"}>Facebook</Link>
                    <Link className={"bg-gray-100 dark:bg-gray-900 hover:bg-gray-200 dark:hover:bg-gray-800 first:rounded-bl-lg rounded-sm last:rounded-br-lg last:flex-grow last:print:truncate p-2"} href={"https://www.instagram.com/amber_vm_/"} target={"_blank"}>Instagram</Link>
                    <Link className={"bg-gray-100 dark:bg-gray-900 hover:bg-gray-200 dark:hover:bg-gray-800 first:rounded-bl-lg rounded-sm last:rounded-br-lg last:flex-grow last:print:truncate p-2"} href={"mailto:amber.van.moeseke@kljstekene.be"} target={"_blank"}>Email me</Link>
                </nav>
            </div>
            <div className={"flex flex-col gap-1"}>
                <Image priority className={"first:rounded-t-lg rounded-sm w-full"} src={"/assets/img/boardmember/2022/anouklaureys.jpg"} alt={"Anouk's gezicht"} width={380} height={380}/>
                <h3 className={"bg-gray-100 dark:bg-gray-900 first:rounded-t-lg rounded-sm p-2 text-xl font-semibold"}>Anouk Laureys</h3>
                <ul className={"bg-gray-100 dark:bg-gray-900 rounded-sm flex flex-col flex-grow gap-1"}>
                    <li className={"border-b-2 last:border-b-0 dark:border-gray-800 p-2 print:truncate"}>Kassier</li>
                    <li className={"border-b-2 last:border-b-0 dark:border-gray-800 p-2 print:truncate"}>Sportfeestverantwoordelijke</li>
                    <li className={"border-b-2 last:border-b-0 dark:border-gray-800 p-2 print:truncate"}>EHBO-verantwoordelijke</li>
                    <li className={"border-b-2 last:border-b-0 dark:border-gray-800 p-2 print:truncate"}>Bestuursanimatieverantwoordelijke</li>
                </ul>
                <nav className={"flex flex-row gap-1"}>
                    <Link className={"bg-gray-100 dark:bg-gray-900 hover:bg-gray-200 dark:hover:bg-gray-800 first:rounded-bl-lg rounded-sm last:rounded-br-lg last:flex-grow last:print:truncate p-2"} href={"https://www.facebook.com/anouk.laureys"} target={"_blank"}>Facebook</Link>
                    <Link className={"bg-gray-100 dark:bg-gray-900 hover:bg-gray-200 dark:hover:bg-gray-800 first:rounded-bl-lg rounded-sm last:rounded-br-lg last:flex-grow last:print:truncate p-2"} href={"https://www.instagram.com/anouk_laureys/"} target={"_blank"}>Instagram</Link>
                    <Link className={"bg-gray-100 dark:bg-gray-900 hover:bg-gray-200 dark:hover:bg-gray-800 first:rounded-bl-lg rounded-sm last:rounded-br-lg last:flex-grow last:print:truncate p-2"} href={"mailto:anouk.laureys@kljstekene.be"} target={"_blank"}>Email me</Link>
                </nav>
            </div>
            <div className={"flex flex-col gap-1"}>
                <Image priority className={"first:rounded-t-lg rounded-sm w-full"} src={"/assets/img/boardmember/2022/ewaldtindemans.jpg"} alt={"Ewald's gezicht"} width={380} height={380}/>
                <h3 className={"bg-gray-100 dark:bg-gray-900 first:rounded-t-lg rounded-sm p-2 text-xl font-semibold"}>Ewald Tindemans</h3>
                <ul className={"bg-gray-100 dark:bg-gray-900 rounded-sm flex flex-col flex-grow gap-1"}>
                    <li className={"border-b-2 last:border-b-0 dark:border-gray-800 p-2 print:truncate"}>Gewestraadslid</li>
                    <li className={"border-b-2 last:border-b-0 dark:border-gray-800 p-2 print:truncate"}>Sportfeestverantwoordelijke</li>
                </ul>
                <nav className={"flex flex-row gap-1"}>
                    <Link className={"bg-gray-100 dark:bg-gray-900 hover:bg-gray-200 dark:hover:bg-gray-800 first:rounded-bl-lg rounded-sm last:rounded-br-lg last:flex-grow last:print:truncate p-2"} href={"https://www.facebook.com/ewald.tindemans"} target={"_blank"}>Facebook</Link>
                    <Link className={"bg-gray-100 dark:bg-gray-900 hover:bg-gray-200 dark:hover:bg-gray-800 first:rounded-bl-lg rounded-sm last:rounded-br-lg last:flex-grow last:print:truncate p-2"} href={"https://www.instagram.com/ewaldtindemans/"} target={"_blank"}>Instagram</Link>
                    <Link className={"bg-gray-100 dark:bg-gray-900 hover:bg-gray-200 dark:hover:bg-gray-800 first:rounded-bl-lg rounded-sm last:rounded-br-lg last:flex-grow last:print:truncate p-2"} href={"mailto:ewald.tindemans@kljstekene.be"} target={"_blank"}>Email me</Link>
                </nav>
            </div>
            <div className={"flex flex-col gap-1"}>
                <Image priority className={"first:rounded-t-lg rounded-sm w-full"} src={"/assets/img/boardmember/2022/febemeerschaert.jpg"} alt={"Febe's gezicht"} width={380} height={380}/>
                <h3 className={"bg-gray-100 dark:bg-gray-900 first:rounded-t-lg rounded-sm p-2 text-xl font-semibold"}>Febe Meerschaert</h3>
                <ul className={"bg-gray-100 dark:bg-gray-900 rounded-sm flex flex-col flex-grow gap-1"}>
                    <li className={"border-b-2 last:border-b-0 dark:border-gray-800 p-2 print:truncate"}>PR-verantwoordelijke</li>
                    <li className={"border-b-2 last:border-b-0 dark:border-gray-800 p-2 print:truncate"}>Sportfeestverantwoordelijke</li>
                    <li className={"border-b-2 last:border-b-0 dark:border-gray-800 p-2 print:truncate"}>Foto-verantwoordelijke</li>
                    <li className={"border-b-2 last:border-b-0 dark:border-gray-800 p-2 print:truncate"}>Verjaardag- en prikbordverantwoordelijke</li>
                </ul>
                <nav className={"flex flex-row gap-1"}>
                    <Link className={"bg-gray-100 dark:bg-gray-900 hover:bg-gray-200 dark:hover:bg-gray-800 first:rounded-bl-lg rounded-sm last:rounded-br-lg last:flex-grow last:print:truncate p-2"} href={"https://www.facebook.com/profile.php?id=100009415370035"} target={"_blank"}>Facebook</Link>
                    <Link className={"bg-gray-100 dark:bg-gray-900 hover:bg-gray-200 dark:hover:bg-gray-800 first:rounded-bl-lg rounded-sm last:rounded-br-lg last:flex-grow last:print:truncate p-2"} href={"https://www.instagram.com/febe_meerschaert/"} target={"_blank"}>Instagram</Link>
                    <Link className={"bg-gray-100 dark:bg-gray-900 hover:bg-gray-200 dark:hover:bg-gray-800 first:rounded-bl-lg rounded-sm last:rounded-br-lg last:flex-grow last:print:truncate p-2"} href={"mailto:febe.meerschaert@kljstekene.be"} target={"_blank"}>Email me</Link>
                </nav>
            </div>
            <div className={"flex flex-col gap-1"}>
                <Image className={"first:rounded-t-lg rounded-sm w-full"} src={"/assets/img/boardmember/2022/feniksvanvooren.jpg"} alt={"Feniks' gezicht"} width={380} height={380}/>
                <h3 className={"bg-gray-100 dark:bg-gray-900 first:rounded-t-lg rounded-sm p-2 text-xl font-semibold"}>Feniks Van Vooren</h3>
                <ul className={"bg-gray-100 dark:bg-gray-900 rounded-sm flex flex-col flex-grow gap-1"}>
                    <li className={"border-b-2 last:border-b-0 dark:border-gray-800 p-2 print:truncate"}>Gewestraadslid</li>
                    <li className={"border-b-2 last:border-b-0 dark:border-gray-800 p-2 print:truncate"}>Sportfeestverantwoordelijke</li>
                    <li className={"border-b-2 last:border-b-0 dark:border-gray-800 p-2 print:truncate"}>Redactie &apos;t Gemakske</li>
                    <li className={"border-b-2 last:border-b-0 dark:border-gray-800 p-2 print:truncate"}>Kamp- en weekendverantwoordelijke</li>
                </ul>
                <nav className={"flex flex-row gap-1"}>
                    <Link className={"bg-gray-100 dark:bg-gray-900 hover:bg-gray-200 dark:hover:bg-gray-800 first:rounded-bl-lg rounded-sm last:rounded-br-lg last:flex-grow last:print:truncate p-2"} href={"https://www.facebook.com/feniks.vanvooren.940"} target={"_blank"}>Facebook</Link>
                    <Link className={"bg-gray-100 dark:bg-gray-900 hover:bg-gray-200 dark:hover:bg-gray-800 first:rounded-bl-lg rounded-sm last:rounded-br-lg last:flex-grow last:print:truncate p-2"} href={"https://www.instagram.com/feniks_v_v/"} target={"_blank"}>Instagram</Link>
                    <Link className={"bg-gray-100 dark:bg-gray-900 hover:bg-gray-200 dark:hover:bg-gray-800 first:rounded-bl-lg rounded-sm last:rounded-br-lg last:flex-grow last:print:truncate p-2"} href={"mailto:feniks.van.vooren@kljstekene.be"} target={"_blank"}>Email me</Link>
                </nav>
            </div>
            <div className={"flex flex-col gap-1"}>
                <Image className={"first:rounded-t-lg rounded-sm w-full"} src={"/assets/img/boardmember/2022/jarnoschepens.jpg"} alt={"Jarno's gezicht"} width={380} height={380}/>
                <h3 className={"bg-gray-100 dark:bg-gray-900 first:rounded-t-lg rounded-sm p-2 text-xl font-semibold"}>Jarno Schepens</h3>
                <ul className={"bg-gray-100 dark:bg-gray-900 rounded-sm flex flex-col flex-grow gap-1"}>
                    <li className={"border-b-2 last:border-b-0 dark:border-gray-800 p-2 print:truncate"}>Hoofdbestuur</li>
                    <li className={"border-b-2 last:border-b-0 dark:border-gray-800 p-2 print:truncate"}>Jeugdraadslid</li>
                    <li className={"border-b-2 last:border-b-0 dark:border-gray-800 p-2 print:truncate"}>Bestuursanimatieverantwoordelijke</li>
                </ul>
                <nav className={"flex flex-row gap-1"}>
                    <Link className={"bg-gray-100 dark:bg-gray-900 hover:bg-gray-200 dark:hover:bg-gray-800 first:rounded-bl-lg rounded-sm last:rounded-br-lg last:flex-grow last:print:truncate p-2"} href={"https://www.facebook.com/profile.php?id=100009181375563"} target={"_blank"}>Facebook</Link>
                    <Link className={"bg-gray-100 dark:bg-gray-900 hover:bg-gray-200 dark:hover:bg-gray-800 first:rounded-bl-lg rounded-sm last:rounded-br-lg last:flex-grow last:print:truncate p-2"} href={"https://www.instagram.com/jarnoschepens/"} target={"_blank"}>Instagram</Link>
                    <Link className={"bg-gray-100 dark:bg-gray-900 hover:bg-gray-200 dark:hover:bg-gray-800 first:rounded-bl-lg rounded-sm last:rounded-br-lg last:flex-grow last:print:truncate p-2"} href={"mailto:jarno.schepens@kljstekene.be"} target={"_blank"}>Email me</Link>
                </nav>
            </div>
            <div className={"flex flex-col gap-1"}>
                <Image className={"first:rounded-t-lg rounded-sm w-full"} src={"/assets/img/boardmember/2022/jasmijnschelfhout.jpg"} alt={"Jasmijn's gezicht"} width={380} height={380}/>
                <h3 className={"bg-gray-100 dark:bg-gray-900 first:rounded-t-lg rounded-sm p-2 text-xl font-semibold"}>Jasmijn Schelfhout</h3>
                <ul className={"bg-gray-100 dark:bg-gray-900 rounded-sm flex flex-col flex-grow gap-1"}>
                    <li className={"border-b-2 last:border-b-0 dark:border-gray-800 p-2 print:truncate"}>Kassier</li>
                    <li className={"border-b-2 last:border-b-0 dark:border-gray-800 p-2 print:truncate"}>EHBO-verantwoordelijke</li>
                </ul>
                <nav className={"flex flex-row gap-1"}>
                    <Link className={"bg-gray-100 dark:bg-gray-900 hover:bg-gray-200 dark:hover:bg-gray-800 first:rounded-bl-lg rounded-sm last:rounded-br-lg last:flex-grow last:print:truncate p-2"} href={"https://www.facebook.com/jasmijn.schelfhout"} target={"_blank"}>Facebook</Link>
                    <Link className={"bg-gray-100 dark:bg-gray-900 hover:bg-gray-200 dark:hover:bg-gray-800 first:rounded-bl-lg rounded-sm last:rounded-br-lg last:flex-grow last:print:truncate p-2"} href={"https://www.instagram.com/jasmijn.sch/"} target={"_blank"}>Instagram</Link>
                    <Link className={"bg-gray-100 dark:bg-gray-900 hover:bg-gray-200 dark:hover:bg-gray-800 first:rounded-bl-lg rounded-sm last:rounded-br-lg last:flex-grow last:print:truncate p-2"} href={"mailto:jasmijn.schelfhout@kljstekene.be"} target={"_blank"}>Email me</Link>
                </nav>
            </div>
            <div className={"flex flex-col gap-1"}>
                <Image className={"first:rounded-t-lg rounded-sm w-full"} src={"/assets/img/boardmember/2022/jenspenneman.jpg"} alt={"Jens' gezicht"} width={380} height={380}/>
                <h3 className={"bg-gray-100 dark:bg-gray-900 first:rounded-t-lg rounded-sm p-2 text-xl font-semibold"}>Jens Penneman</h3>
                <ul className={"bg-gray-100 dark:bg-gray-900 rounded-sm flex flex-col flex-grow gap-1"}>
                    <li className={"border-b-2 last:border-b-0 dark:border-gray-800 p-2 print:truncate"}>Drankverantwoordelijke</li>
                    <li className={"border-b-2 last:border-b-0 dark:border-gray-800 p-2 print:truncate"}>Website-verantwoordelijke</li>
                    <li className={"border-b-2 last:border-b-0 dark:border-gray-800 p-2 print:truncate"}>Foto-verantwoordelijke</li>
                    <li className={"border-b-2 last:border-b-0 dark:border-gray-800 p-2 print:truncate"}>Archivaris</li>
                </ul>
                <nav className={"flex flex-row gap-1"}>
                    <Link className={"bg-gray-100 dark:bg-gray-900 hover:bg-gray-200 dark:hover:bg-gray-800 first:rounded-bl-lg rounded-sm last:rounded-br-lg last:flex-grow last:print:truncate p-2"} href={"https://www.facebook.com/PennemanJens"} target={"_blank"}>Facebook</Link>
                    <Link className={"bg-gray-100 dark:bg-gray-900 hover:bg-gray-200 dark:hover:bg-gray-800 first:rounded-bl-lg rounded-sm last:rounded-br-lg last:flex-grow last:print:truncate p-2"} href={"https://www.instagram.com/jens.penneman/"} target={"_blank"}>Instagram</Link>
                    <Link className={"bg-gray-100 dark:bg-gray-900 hover:bg-gray-200 dark:hover:bg-gray-800 first:rounded-bl-lg rounded-sm last:rounded-br-lg last:flex-grow last:print:truncate p-2"} href={"mailto:jens.penneman@kljstekene.be"} target={"_blank"}>Email me</Link>
                </nav>
            </div>
            <div className={"flex flex-col gap-1"}>
                <Image className={"first:rounded-t-lg rounded-sm w-full"} src={"/assets/img/boardmember/2022/lottejacobs.jpg"} alt={"Lotte's gezicht"} width={380} height={380}/>
                <h3 className={"bg-gray-100 dark:bg-gray-900 first:rounded-t-lg rounded-sm p-2 text-xl font-semibold"}>Lotte Jacobs</h3>
                <ul className={"bg-gray-100 dark:bg-gray-900 rounded-sm flex flex-col flex-grow gap-1"}>
                    <li className={"border-b-2 last:border-b-0 dark:border-gray-800 p-2 print:truncate"}>Secretaris</li>
                    <li className={"border-b-2 last:border-b-0 dark:border-gray-800 p-2 print:truncate"}>PR-verantwoordelijke</li>
                    <li className={"border-b-2 last:border-b-0 dark:border-gray-800 p-2 print:truncate"}>Sportfeestverantwoordelijke</li>
                    <li className={"border-b-2 last:border-b-0 dark:border-gray-800 p-2 print:truncate"}>Kledijverantwoordelijke</li>
                    <li className={"border-b-2 last:border-b-0 dark:border-gray-800 p-2 print:truncate"}>K-verantwoordelijke</li>
                </ul>
                <nav className={"flex flex-row gap-1"}>
                    <Link className={"bg-gray-100 dark:bg-gray-900 hover:bg-gray-200 dark:hover:bg-gray-800 first:rounded-bl-lg rounded-sm last:rounded-br-lg last:flex-grow last:print:truncate p-2"} href={"https://www.facebook.com/lotte.jacobs.982"} target={"_blank"}>Facebook</Link>
                    <Link className={"bg-gray-100 dark:bg-gray-900 hover:bg-gray-200 dark:hover:bg-gray-800 first:rounded-bl-lg rounded-sm last:rounded-br-lg last:flex-grow last:print:truncate p-2"} href={"https://www.instagram.com/lotteke.jacobs/"} target={"_blank"}>Instagram</Link>
                    <Link className={"bg-gray-100 dark:bg-gray-900 hover:bg-gray-200 dark:hover:bg-gray-800 first:rounded-bl-lg rounded-sm last:rounded-br-lg last:flex-grow last:print:truncate p-2"} href={"mailto:lotte.jacobs@kljstekene.be"} target={"_blank"}>Email me</Link>
                </nav>
            </div>
            <div className={"flex flex-col gap-1"}>
                <Image className={"first:rounded-t-lg rounded-sm w-full"} src={"/assets/img/boardmember/2022/maartenvangoey.jpg"} alt={"Maarten's gezicht"} width={380} height={380}/>
                <h3 className={"bg-gray-100 dark:bg-gray-900 first:rounded-t-lg rounded-sm p-2 text-xl font-semibold"}>Maarten Van Goey</h3>
                <ul className={"bg-gray-100 dark:bg-gray-900 rounded-sm flex flex-col flex-grow gap-1"}>
                    <li className={"border-b-2 last:border-b-0 dark:border-gray-800 p-2 print:truncate"}>Technische dienst</li>
                    <li className={"border-b-2 last:border-b-0 dark:border-gray-800 p-2 print:truncate"}>Drankverantwoordelijke</li>
                </ul>
                <nav className={"flex flex-row gap-1"}>
                    <Link className={"bg-gray-100 dark:bg-gray-900 hover:bg-gray-200 dark:hover:bg-gray-800 first:rounded-bl-lg rounded-sm last:rounded-br-lg last:flex-grow last:print:truncate p-2"} href={"https://www.facebook.com/maarten.vangoey.5"} target={"_blank"}>Facebook</Link>
                    <Link className={"bg-gray-100 dark:bg-gray-900 hover:bg-gray-200 dark:hover:bg-gray-800 first:rounded-bl-lg rounded-sm last:rounded-br-lg last:flex-grow last:print:truncate p-2"} href={"https://www.instagram.com/maarten__vg/"} target={"_blank"}>Instagram</Link>
                    <Link className={"bg-gray-100 dark:bg-gray-900 hover:bg-gray-200 dark:hover:bg-gray-800 first:rounded-bl-lg rounded-sm last:rounded-br-lg last:flex-grow last:print:truncate p-2"} href={"mailto:maarten.van.goey@kljstekene.be"} target={"_blank"}>Email me</Link>
                </nav>
            </div>
            <div className={"flex flex-col gap-1"}>
                <Image className={"first:rounded-t-lg rounded-sm w-full"} src={"/assets/img/boardmember/2022/ninaselis.jpg"} alt={"Nina's gezicht"} width={380} height={380}/>
                <h3 className={"bg-gray-100 dark:bg-gray-900 first:rounded-t-lg rounded-sm p-2 text-xl font-semibold"}>Nina Selis</h3>
                <ul className={"bg-gray-100 dark:bg-gray-900 rounded-sm flex flex-col flex-grow gap-1"}>
                    <li className={"border-b-2 last:border-b-0 dark:border-gray-800 p-2 print:truncate"}>Hoofdbestuur</li>
                    <li className={"border-b-2 last:border-b-0 dark:border-gray-800 p-2 print:truncate"}>Jeugdraadslid</li>
                    <li className={"border-b-2 last:border-b-0 dark:border-gray-800 p-2 print:truncate"}>Bestuursanimatieverantwoordelijke</li>
                </ul>
                <nav className={"flex flex-row gap-1"}>
                    <Link className={"bg-gray-100 dark:bg-gray-900 hover:bg-gray-200 dark:hover:bg-gray-800 first:rounded-bl-lg rounded-sm last:rounded-br-lg last:flex-grow last:print:truncate p-2"} href={"https://www.facebook.com/nina.selis"} target={"_blank"}>Facebook</Link>
                    <Link className={"bg-gray-100 dark:bg-gray-900 hover:bg-gray-200 dark:hover:bg-gray-800 first:rounded-bl-lg rounded-sm last:rounded-br-lg last:flex-grow last:print:truncate p-2"} href={"https://www.instagram.com/ninaselis/"} target={"_blank"}>Instagram</Link>
                    <Link className={"bg-gray-100 dark:bg-gray-900 hover:bg-gray-200 dark:hover:bg-gray-800 first:rounded-bl-lg rounded-sm last:rounded-br-lg last:flex-grow last:print:truncate p-2"} href={"mailto:nina.selis@kljstekene.be"} target={"_blank"}>Email me</Link>
                </nav>
            </div>
            <div className={"flex flex-col gap-1"}>
                <Image className={"first:rounded-t-lg rounded-sm w-full"} src={"/assets/img/boardmember/2022/onnovanaken.jpg"} alt={"Onno's gezicht"} width={380} height={380}/>
                <h3 className={"bg-gray-100 dark:bg-gray-900 first:rounded-t-lg rounded-sm p-2 text-xl font-semibold"}>Onno Van Aken</h3>
                <ul className={"bg-gray-100 dark:bg-gray-900 rounded-sm flex flex-col flex-grow gap-1"}>
                    <li className={"border-b-2 last:border-b-0 dark:border-gray-800 p-2 print:truncate"}>Redactie &apos;t Gemakske</li>
                    <li className={"border-b-2 last:border-b-0 dark:border-gray-800 p-2 print:truncate"}>Bestuursanimatieverantwoordelijke</li>
                </ul>
                <nav className={"flex flex-row gap-1"}>
                    <Link className={"bg-gray-100 dark:bg-gray-900 hover:bg-gray-200 dark:hover:bg-gray-800 first:rounded-bl-lg rounded-sm last:rounded-br-lg last:flex-grow last:print:truncate p-2"} href={"https://www.facebook.com/profile.php?id=100006627735364"} target={"_blank"}>Facebook</Link>
                    <Link className={"bg-gray-100 dark:bg-gray-900 hover:bg-gray-200 dark:hover:bg-gray-800 first:rounded-bl-lg rounded-sm last:rounded-br-lg last:flex-grow last:print:truncate p-2"} href={"https://www.instagram.com/onno.van.aken/"} target={"_blank"}>Instagram</Link>
                    <Link className={"bg-gray-100 dark:bg-gray-900 hover:bg-gray-200 dark:hover:bg-gray-800 first:rounded-bl-lg rounded-sm last:rounded-br-lg last:flex-grow last:print:truncate p-2"} href={"mailto:onno.van.aken@kljstekene.be"} target={"_blank"}>Email me</Link>
                </nav>
            </div>
            <div className={"flex flex-col gap-1"}>
                <Image className={"first:rounded-t-lg rounded-sm w-full"} src={"/assets/img/boardmember/2022/robinmeerschaert.jpg"} alt={"Robin's gezicht"} width={380} height={380}/>
                <h3 className={"bg-gray-100 dark:bg-gray-900 first:rounded-t-lg rounded-sm p-2 text-xl font-semibold"}>Robin Meerschaert</h3>
                <ul className={"bg-gray-100 dark:bg-gray-900 rounded-sm flex flex-col flex-grow gap-1"}>
                    <li className={"border-b-2 last:border-b-0 dark:border-gray-800 p-2 print:truncate"}>Jeugdraadslid</li>
                    <li className={"border-b-2 last:border-b-0 dark:border-gray-800 p-2 print:truncate"}>Technische dienst</li>
                    <li className={"border-b-2 last:border-b-0 dark:border-gray-800 p-2 print:truncate"}>Cramme-verantwoordelijke</li>
                </ul>
                <nav className={"flex flex-row gap-1"}>
                    <Link className={"bg-gray-100 dark:bg-gray-900 hover:bg-gray-200 dark:hover:bg-gray-800 first:rounded-bl-lg rounded-sm last:rounded-br-lg last:flex-grow last:print:truncate p-2"} href={"https://www.facebook.com/robin.meerschaert.5"} target={"_blank"}>Facebook</Link>
                    <Link className={"bg-gray-100 dark:bg-gray-900 hover:bg-gray-200 dark:hover:bg-gray-800 first:rounded-bl-lg rounded-sm last:rounded-br-lg last:flex-grow last:print:truncate p-2"} href={"https://www.instagram.com/robinmeerschaert/"} target={"_blank"}>Instagram</Link>
                    <Link className={"bg-gray-100 dark:bg-gray-900 hover:bg-gray-200 dark:hover:bg-gray-800 first:rounded-bl-lg rounded-sm last:rounded-br-lg last:flex-grow last:print:truncate p-2"} href={"mailto:robin.meerschaert@kljstekene.be"} target={"_blank"}>Email me</Link>
                </nav>
            </div>
            <div className={"flex flex-col gap-1"}>
                <Image className={"first:rounded-t-lg rounded-sm w-full"} src={"/assets/img/boardmember/2022/yoranselis.jpg"} alt={"Yoran's gezicht"} width={380} height={380}/>
                <h3 className={"bg-gray-100 dark:bg-gray-900 first:rounded-t-lg rounded-sm p-2 text-xl font-semibold"}>Yoran Selis</h3>
                <ul className={"bg-gray-100 dark:bg-gray-900 rounded-sm flex flex-col flex-grow gap-1"}>
                    <li className={"border-b-2 last:border-b-0 dark:border-gray-800 p-2 print:truncate"}>Sportfeestverantwoordelijke</li>
                    <li className={"border-b-2 last:border-b-0 dark:border-gray-800 p-2 print:truncate"}>Drankverantwoordelijke</li>
                    <li className={"border-b-2 last:border-b-0 dark:border-gray-800 p-2 print:truncate"}>Lokaalverhuurverantwoordelijke</li>
                </ul>
                <nav className={"flex flex-row gap-1"}>
                    <Link className={"bg-gray-100 dark:bg-gray-900 hover:bg-gray-200 dark:hover:bg-gray-800 first:rounded-bl-lg rounded-sm last:rounded-br-lg last:flex-grow last:print:truncate p-2"} href={"https://www.facebook.com/profile.php?id=100008256488127"} target={"_blank"}>Facebook</Link>
                    <Link className={"bg-gray-100 dark:bg-gray-900 hover:bg-gray-200 dark:hover:bg-gray-800 first:rounded-bl-lg rounded-sm last:rounded-br-lg last:flex-grow last:print:truncate p-2"} href={"https://www.instagram.com/yoranselis/"} target={"_blank"}>Instagram</Link>
                    <Link className={"bg-gray-100 dark:bg-gray-900 hover:bg-gray-200 dark:hover:bg-gray-800 first:rounded-bl-lg rounded-sm last:rounded-br-lg last:flex-grow last:print:truncate p-2"} href={"mailto:yoran.selis@kljstekene.be"} target={"_blank"}>Email me</Link>
                </nav>
            </div>
        </section>
    </main>;
}