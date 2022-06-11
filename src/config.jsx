import IceIceBaby2022 from "./img/events/ice ice baby.png";
import HastaBanana2022 from "./img/events/2022HastaBanana.jpg";
import MauricesLiefdesLeven from "./img/gemakske/2022-02-14-maurice.png";
import MauriceOpPasen from "./img/gemakske/2021-04-17-maurice.png";
import {Add, CalendarToday, Directions, Facebook, Favorite, HouseSiding, Instagram, LocationOn, People, QuestionMark} from "@mui/icons-material";
import {blue, deepOrange, red} from "@mui/material/colors";
import {CardMedia} from "@mui/material";
import AmberVanMoeseke from "./img/bestuur/ambervanmoeseke/face.jpeg";
import AnoukLaureys from "./img/bestuur/anouklaureys/face.jpeg";
import EwaldTindemans from "./img/bestuur/ewaldtindemans/face.jpeg";
import FeniksVanVooren from "./img/bestuur/feniksvanvooren/face.jpeg";
import JarnoSchepens from "./img/bestuur/jarnoschepens/face.jpeg";
import JasmijnSchelfhout from "./img/bestuur/jasmijnschelfhout/face.jpeg";
import JensPenneman from "./img/bestuur/jenspenneman/face.jpeg";
import KatoSelis from "./img/bestuur/katoselis/face.jpeg";
import LotteJacobs from "./img/bestuur/lottejacobs/face.jpeg";
import MaartenVanGoey from "./img/bestuur/maartenvangoey/face.jpg";
import MerelVanWiele from "./img/bestuur/merelvanwiele/face.jpeg";
import NinaSelis from "./img/bestuur/ninaselis/face.jpeg";
import OnnoVanAken from "./img/bestuur/onnovanaken/face.jpeg";
import RubenStuer from "./img/bestuur/rubenstuer/face.jpeg";
import YenteDeVuyst from "./img/bestuur/yentedevuyst/face.jpeg";
import YoranSelis from "./img/bestuur/yoranselis/face.jpeg";
import Plus20Bestuur from "./img/bestuur/plus20/JonasJarno.jpeg";
import Sportfeest19Foto from "./img/events/2019Sportfeest.jpg";
import Sportfeest21Foto from "./img/events/2021Sportfeest.jpg";
import Bestuursfoto2021 from "./img/events/2021Bestuursweekend.jpg";
import WeekendGroepsfoto2022 from "./img/events/2022Weekend.JPEG";

const startpaginaFotos = [{
    image: Sportfeest19Foto, alt: "Sportfeest 2019",
}, {
    image: Sportfeest21Foto, alt: "Sportfeest 2021",
}, {
    image: Bestuursfoto2021, alt: "Bestuur 2021",
}, {
    image: WeekendGroepsfoto2022, alt: "Weekend 2022",
}];

const links = [{
    tekst: "startpagina", url: "/", disabled: false, color: "inherit",
}, {
    tekst: "Over ons", url: "/overons", disabled: false, color: "inherit",
}, {
    tekst: "Bestuur", url: "/bestuur", disabled: false, color: "inherit",
}, {
    url: "/sponsors", disabled: false, icon: <Favorite/>, color: red.A400,
}];
const socialMedia = [{
    name:     "Facebook",
    icon:     <Facebook/>,
    color:    blue.A700,
    disabled: false,
    href:     "https://www.facebook.com/KljStekene/?utm_source=kljstekene.be&utm_medium=Referral",
}, {
    name:     "Instagram",
    icon:     <Instagram/>,
    color:    deepOrange.A400,
    disabled: false,
    href:     "https://instagram.com/kljstekene?utm_source=kljstekene.be&utm_medium=Referral",
}];


const nieuws = [{
    startDate:          new Date("2022-01-01"),
    endDate:            new Date("2022-04-23"),
    displayedEventDate: "",
    title:              "",
    text:               "",
    image:              IceIceBaby2022,
    links:              [{
        name: "Facebook event", displayedText: "", href: "https://fb.me/e/1Ab5M00O8", disabled: false,
    }],
    size:               {
        xs: 1, sm: 2, md: 3,
    },
}, {
    startDate:          new Date("2022-06-13"),
    endDate:            new Date("2022-08-06"),
    displayedEventDate: "",
    title:              "",
    text:               "",
    image:              HastaBanana2022,
    links:              [{
        name: "Ticket pagina", displayedText: "Tickets", href: "https://shop.kljstekene.be/Tickets/", disabled: false,
    }, {
        name: "Facebook event", displayedText: "Facebook", href: "https://fb.me/e/1nzCN8mTy", disabled: false,
    }],
    size:               {
        xs: 1, sm: 2, md: 3,
    },
}];

const gemakske = [{
    startDate:          new Date("2022-02-14"),
    endDate:            new Date("2022-04-14"),
    displayedEventDate: "Valentijn '22",
    title:              "Maurice's liefdesleven",
    text:               "",
    image:              MauricesLiefdesLeven,
    size:               {
        xs: 1, sm: 2, md: 2,
    },
}, {
    startDate:          new Date("2022-04-17"),
    endDate:            new Date("2022-06-01"),
    displayedEventDate: "Pasen '22",
    title:              "Het leven van Maurice: Pasen",
    text:               "",
    image:              MauriceOpPasen,
    size:               {
        xs: 1, sm: 2, md: 2,
    },
}];


const infoAboutUs = [{
    title: "Wat is KLJ Stekene?",
    text:  "KLJ Stekene is een jeugdbeweging voor iedereen vanaf 16 jaar. Elke vrijdagavond komen we samen in ons lokaal voor een leuke activiteit zoals een basspel, quiz, dropping, flodderdag, ruige spelen of zwemmen. Bovendien is er elk jaar een fantastisch kamp en een weekend. In de zomermaanden zitten we ook niet stil! Dan neemt onze KLJ deel aan wekelijkse sportfeesten en houden we een heus feestweekend met barbeque en fuif.",
    icon:  <QuestionMark/>,
    size:  {
        xs: 1, sm: 2, md: 3,
    },
}, {
    title: "Wie is KLJ Stekene?",
    text:  "We tellen momenteel ongeveer 80 leden in de +16 werking. Daarnaast hebben we een 20+ werking. Dit wil zeggen dat al onze leden ouder dan 16 jaar zijn. Aangezien we dus met zo een leeftijdsverschillen zitten proberen we een grote waaier van activiteiten aan te bieden.",
    icon:  <People/>,
    size:  {
        xs: 1, sm: 1, md: 1,
    },
}, {
    title: "Waar is KLJ Stekene?",
    text:  "Ons lokaal is terug te vinden op Sparrenhofdreef 25A, 9190 Stekene. De oprit van ons terrein is te herkennen aan de grijze ijzeren oort en een uithangende KLJ vlag. Verder op deze oprit is een \"fietsenstalling\" en een parking voor wagens.",
    icon:  <LocationOn/>,
    size:  {
        xs: 1, sm: 1, md: 1,
    },
}, {
    title: "Wanneer is KLJ Stekene?",
    text:  "Op vrijdagavond wordt er meestal 's avonds vanaf 20 uur een activiteit georganiseerd. In Juli en augustus zijn er geen activiteiten, maar worden er andere evenementen georganiseerd. Op zondagen in de vakantie nemen we ook deel aan sportfeesten. Hiervoor oefenen we een hele zomer lang.",
    icon:  <CalendarToday/>,
    size:  {
        xs: 1, sm: 1, md: 1,
    },
}, {
    title:             "Locatie", icon: <Directions/>, buttons: [{
        displayText: "Openen in kaarten",
        href:        "https://maps.apple.com/?address=Sparrenhofdreef%2025,%209190%20Stekene,%20Belgi%C3%AB&auid=222689036273232173&ll=51.205967,4.036770&lsp=9902&q=KLJ%20Stekene&_ext=CisKBAgEEFcKBAgFEAMKBQgGEN8BCgQIChAACgQIUhADCgQIVRAPCgQIWRACEiYp6Fsw88mZSUAx+8/1rk8eEEA5ZjFWT/CaSUBBTwF6Vf4sEEBQBA%3D%3D&t=h",
        disabled:    false,
    }], size:          {
        xs: 1, sm: 2, md: 3,
    }, specialContent: <CardMedia component={"iframe"}
                                  loading={"lazy"}
                                  allowFullScreen
                                  sx={{
                                      border: 0, height: "45vh",
                                  }}
                                  src={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2499.716652842191!2d4.035102815977919!3d51.205872540525306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c38612daa95979%3A0x6ea12edb2df41fc1!2sKLJ%20Stekene!5e0!3m2!1snl!2sbe!4v1632578998903!5m2!1snl!2sbe"}/>,
}, {
    title: "Weekend",
    text:  "Weekend is een 3-daagse die meestal rond de krokusvakantie valt. We vertrekken vrijdagavond vol vreugde en komen zondagavond moe terug. De prijs van dit weekend bedraagt 40 euro voor overnachting, maaltijden en een tal van activiteiten.",
    icon:  <HouseSiding/>,
    size:  {
        xs: 1, sm: 1, md: 1,
    },
}, {
    title: "Kamp",
    text:  "Het kamp gaat elk jaar door van 11 tot 21 juli. Gedurende die 10 dagen wordt er steeds een ochtend-, namiddag- en avondactiviteit voorzien. De prijs is hier €140 voor overnachting, maaltijden en activiteiten. De drank is hier echter zelf te betalen.",
    icon:  <HouseSiding/>,
    size:  {
        xs: 1, sm: 1, md: 1,
    },
}, {
    title: "Andere activiteiten",
    text:  "Voor andere activiteiten moet je op de startpagina kijken om mee te zijn met het laatste nieuws. Heb je nog vragen over de KLJ? Aarzel dan niet een mailtje te sturen naar één van onze bestuursleden.",
    icon:  <Add/>,
    size:  {
        xs: 1, sm: 1, md: 1,
    },
}, {
    title: "Zin in KLJ?",
    text:  "Je kan ons een berichtje sturen via de pagina Bestuur, of gewoon verschijnen op een van onze klj-dagen. Onze klj gaat elke vrijdag door, je kan er dan één van onze bestuursleden aanspreken. Hiermee ga je akkoord met het inschrijvingsgeld van 25 euro. Je krijg daarna een formulier waarin je alle informatie moet ingeven die we nodig hebben om je als lid te aanvaarden.",
    size:  {
        xs: 1, sm: 2, md: 3,
    },
}];


const bestuurstaken = [{//0
    name: "Jeugdraadslid",
}, {//1
    name: "Foto-verantwoordelijke",
}, {//2
    name: "Sportfeestverantwoordelijke",
}, {//3
    name: "Verjaardags- en prikbordverantwoordelijke",
}, {//4
    name: "EHBO-verantwoordelijke",
}, {//5
    name: "kassier",
}, {//6
    name: "Gewestraadslid",
}, {//7
    name: "Redactie 't Gemakske",
}, {//8
    name: "Websiteverantwoordelijke",
}, {//9
    name: "Archivaris & dropboxverantwoordelijke",
}, {//10
    name: "Kamp- en weekendverantwoordelijke",
}, {//11
    name: "Bestuursanimatieverantwoordelijke",
}, {//12
    name: "Kledijverantwoordelijke",
}, {//13
    name: "K-verantwoordelijke",
}, {//14
    name: "Technische dienst",
}, {//15
    name: "PR-verantwoordelijke",
}, {//16
    name: "Drankverantwoordelijke",
}, {//17
    name: "Secretaris",
}, {//18
    name: "Materiaalverantwoordelijke",
}, {//19
    name: "Lokaalverhuurverantwoordelijke",
}];

const bestuur = [{
    firstName:      "Jarno",
    lastName:       "Schepens",
    img:            {
        image: JarnoSchepens, alt: "Portret van Jarno",
    },
    isHoofdbestuur: true,
    isNew:          false,
    taken:          [bestuurstaken[0].name, bestuurstaken[1].name],
    mail:           "jarno.schepens@kljstekene.be",
    socialMedia:    [{
        name: "Facebook", icon: <Facebook/>, href: "https://www.facebook.com/profile.php?id=100009181375563",
    }, {
        name: "Instagram", icon: <Instagram/>, href: "https://www.instagram.com/jarnoschepens/",
    }],
}, {
    firstName:      "Nina",
    lastName:       "Selis",
    img:            {
        image: NinaSelis, alt: "Portret van Nina",
    },
    isHoofdbestuur: true,
    isNew:          false,
    taken:          [bestuurstaken[0].name],
    mail:           "nina.selis@kljstekene.be",
    socialMedia:    [{
        name: "Facebook", icon: <Facebook/>, href: "https://www.facebook.com/nina.selis",
    }, {
        name: "Instagram", icon: <Instagram/>, href: "https://www.instagram.com/ninaselis/",
    }],
}, {
    firstName:      "Amber",
    lastName:       "Van Moeseke",
    img:            {
        image: AmberVanMoeseke, alt: "Portret van Amber",
    },
    isHoofdbestuur: false,
    isNew:          true,
    taken:          [bestuurstaken[2].name, bestuurstaken[3].name],
    mail:           "amber.van.moeseke@kljstekene.be",
    socialMedia:    [{
        name: "Facebook", icon: <Facebook/>, href: "https://www.facebook.com/amber.vanmoeseke",
    }, {
        name: "Instagram", icon: <Instagram/>, href: "https://www.instagram.com/amber_vm_/",
    }],
}, {
    firstName:      "Anouk",
    lastName:       "Laureys",
    img:            {
        image: AnoukLaureys, alt: "Portret van Anouk",
    },
    isHoofdbestuur: false,
    isNew:          false,
    taken:          [bestuurstaken[2].name, bestuurstaken[4].name, bestuurstaken[5].name],
    mail:           "anouk.laureys@kljstekene.be",
    socialMedia:    [{
        name: "Facebook", icon: <Facebook/>, href: "https://www.facebook.com/anouk.laureys",
    }, {
        name: "Instagram", icon: <Instagram/>, href: "https://www.instagram.com/anouk_laureys/",
    }],
}, {
    firstName:      "Ewald",
    lastName:       "Tindemans",
    img:            {
        image: EwaldTindemans, alt: "Portret van Ewald",
    },
    isHoofdbestuur: false,
    isNew:          false,
    taken:          [bestuurstaken[2].name, bestuurstaken[6].name],
    mail:           "ewald.tindemans@kljstekene.be",
    socialMedia:    [{
        name: "Facebook", icon: <Facebook/>, href: "https://www.facebook.com/ewald.tindemans",
    }, {
        name: "Instagram", icon: <Instagram/>, href: "https://www.instagram.com/ewaldtindemans/",
    }],
}, {
    firstName:      "Feniks",
    lastName:       "Van Vooren",
    img:            {
        image: FeniksVanVooren, alt: "Portret van Feniks",
    },
    isHoofdbestuur: false,
    isNew:          true,
    taken:          [bestuurstaken[2].name, bestuurstaken[6].name, bestuurstaken[7].name],
    mail:           "feniks.van.vooren@kljstekene.be",
    socialMedia:    [{
        name: "Facebook", icon: <Facebook/>, href: "https://www.facebook.com/feniks.vanvooren.940",
    }, {
        name: "Instagram", icon: <Instagram/>, href: "https://www.instagram.com/feniks_v_v/",
    }],
}, {
    firstName:      "Jasmijn",
    lastName:       "Schelfhout",
    img:            {
        image: JasmijnSchelfhout, alt: "Portret van Jasmijn",
    },
    isHoofdbestuur: false,
    isNew:          false,
    taken:          [bestuurstaken[4].name, bestuurstaken[5].name],
    mail:           "jasmijn.schelfhout@kljstekene.be",
    socialMedia:    [{
        name: "Facebook", icon: <Facebook/>, href: "https://www.facebook.com/jasmijn.schelfhout",
    }, {
        name: "Instagram", icon: <Instagram/>, href: "https://www.instagram.com/jasmijn.sch/",
    }],
}, {
    firstName:      "Jens",
    lastName:       "Penneman",
    img:            {
        image: JensPenneman, alt: "Portret van Jens",
    },
    isHoofdbestuur: false,
    isNew:          false,
    taken:          [bestuurstaken[8].name, bestuurstaken[9].name, bestuurstaken[1].name],
    mail:           "jens.penneman@kljstekene.be",
    socialMedia:    [{
        name: "Facebook", icon: <Facebook/>, href: "https://www.facebook.com/PennemanJens",
    }, {
        name: "Instagram", icon: <Instagram/>, href: "https://www.instagram.com/jens.penneman/",
    }],
}, {
    firstName:      "Kato",
    lastName:       "Selis",
    img:            {
        image: KatoSelis, alt: "Portret van Kato",
    },
    isHoofdbestuur: false,
    isNew:          false,
    taken:          [bestuurstaken[10].name, bestuurstaken[11].name],
    mail:           "kato.selis@kljstekene.be",
}, {
    firstName:      "Lotte",
    lastName:       "Jacobs",
    img:            {
        image: LotteJacobs, alt: "Portret van Lotte",
    },
    isHoofdbestuur: false,
    isNew:          true,
    taken:          [bestuurstaken[2].name, bestuurstaken[12].name, bestuurstaken[13].name],
    mail:           "lotte.jacobs@kljstekene.be",
    socialMedia:    [{
        name: "Facebook", icon: <Facebook/>, href: "https://www.facebook.com/lotte.jacobs.982",
    }, {
        name: "Instagram", icon: <Instagram/>, href: "https://www.instagram.com/lotteke.jacobs/",
    }],
}, {
    firstName:      "Maarten",
    lastName:       "Van Goey",
    img:            {
        image: MaartenVanGoey, alt: "Portret van Maarten",
    },
    isHoofdbestuur: false,
    isNew:          false,
    taken:          [bestuurstaken[14].name, bestuurstaken[15].name, bestuurstaken[16].name],
    mail:           "maarten.van.goey@kljstekene.be",
    socialMedia:    [{
        name: "Facebook", icon: <Facebook/>, href: "https://www.facebook.com/maarten.vangoey.5",
    }, {
        name: "Instagram", icon: <Instagram/>, href: "https://www.instagram.com/maarten__vg/",
    }],
}, {
    firstName:      "Merel",
    lastName:       "Van Wiele",
    img:            {
        image: MerelVanWiele, alt: "Portret van Merel",
    },
    isHoofdbestuur: false,
    isNew:          false,
    taken:          [bestuurstaken[3].name, bestuurstaken[15].name],
    mail:           "merel.van.wiele@kljstekene.be",
    socialMedia:    [{
        name: "Facebook", icon: <Facebook/>, href: "https://www.facebook.com/merel.vanwiele",
    }, {
        name: "Instagram", icon: <Instagram/>, href: "https://www.instagram.com/merel_van_wiele/",
    }],
}, {
    firstName:      "Onno",
    lastName:       "Van Aken",
    img:            {
        image: OnnoVanAken, alt: "Portret van Onno",
    },
    isHoofdbestuur: false,
    isNew:          false,
    taken:          [bestuurstaken[7].name, bestuurstaken[11].name],
    mail:           "onno.van.aken@kljstekene.be",
    socialMedia:    [{
        name: "Facebook", icon: <Facebook/>, href: "https://www.facebook.com/profile.php?id=100006627735364",
    }, {
        name: "Instagram", icon: <Instagram/>, href: "https://www.instagram.com/onno.van.aken/",
    }],
}, {
    firstName:      "Ruben",
    lastName:       "Stuer",
    img:            {
        image: RubenStuer, alt: "Portret van Ruben",
    },
    isHoofdbestuur: false,
    isNew:          false,
    taken:          [bestuurstaken[2].name, bestuurstaken[14].name],
    mail:           "ruben.stuer@kljstekene.be",
    socialMedia:    [{
        name: "Facebook", icon: <Facebook/>, href: "https://www.facebook.com/profile.php?id=100009367214327",
    }, {
        name: "Instagram", icon: <Instagram/>, href: "https://www.instagram.com/stuerruben/",
    }],
}, {
    firstName:      "Yente",
    lastName:       "De Vuyst",
    img:            {
        image: YenteDeVuyst, alt: "Portret van Yente",
    },
    isHoofdbestuur: false,
    isNew:          false,
    taken:          [bestuurstaken[10].name, bestuurstaken[11].name, bestuurstaken[17].name],
    mail:           "yente.de.vuyst@kljstekene.be",
    socialMedia:    [{
        name: "Facebook", icon: <Facebook/>, href: "https://www.facebook.com/yente.devuyst",
    }, {
        name: "Instagram", icon: <Instagram/>, href: "https://www.instagram.com/yentedevuyst/",
    }],
}, {
    firstName:      "Yoran",
    lastName:       "Selis",
    img:            {
        image: YoranSelis, alt: "Portret van Yoran",
    },
    isHoofdbestuur: false,
    isNew:          false,
    taken:          [bestuurstaken[2].name, bestuurstaken[16].name, bestuurstaken[18].name, bestuurstaken[19].name],
    mail:           "yoran.selis@kljstekene.be",
    socialMedia:    [{
        name: "Facebook", icon: <Facebook/>, href: "https://www.facebook.com/profile.php?id=100008256488127",
    }, {
        name: "Instagram", icon: <Instagram/>, href: "https://www.instagram.com/yoranselis/",
    }],
}, {
    firstName:         "+20", lastName: "bestuur", img: {
        image: Plus20Bestuur, alt: "Foto van Jarno en Jonas",
    }, isHoofdbestuur: false, isNew: false, mail: "plus20@kljstekene.be",
}];

export {startpaginaFotos, links, socialMedia, nieuws, gemakske, infoAboutUs, bestuur};