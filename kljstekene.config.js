import JarnoSchepens from "./public/img/bestuur/jarnoschepens/face2022.jpg";
import NinaSelis from "./public/img/bestuur/ninaselis/face2022.jpg";
import AmberVanMoeseke from "./public/img/bestuur/ambervanmoeseke/face2022.jpg";
import AnoukLaureys from "./public/img/bestuur/anouklaureys/face2022.jpg";
import EwaldTindemans from "./public/img/bestuur/ewaldtindemans/face2022.jpg";
import FebeMeerschaert from "./public/img/bestuur/febemeerschaert/face2022.jpg";
import FeniksVanVooren from "./public/img/bestuur/feniksvanvooren/face2022.jpg";
import JasmijnSchelfhout from "./public/img/bestuur/jasmijnschelfhout/face2022.jpg";
import JensPenneman from "./public/img/bestuur/jenspenneman/face2022.jpg";
import LotteJacobs from "./public/img/bestuur/lottejacobs/face2022.jpg";
import MaartenVanGoey from "./public/img/bestuur/maartenvangoey/face2022.jpg";
import OnnoVanAken from "./public/img/bestuur/onnovanaken/face2022.jpg";
import RobinMeerschaert from "./public/img/bestuur/robinmeerschaert/face2022.jpg";
import YoranSelis from "./public/img/bestuur/yoranselis/face2022.jpg";

import Sportfeest21Foto from "./public/img/events/2021Sportfeest.jpg";
import Sportfeest19Foto from "./public/img/events/2019Sportfeest.jpg";
import WeekendGroepsfoto2022 from "./public/img/events/2022Weekend.JPEG";

import hastaBanana2022Profile from "./public/img/events/2022HastaBananaProfile.png";
import hastaBanana2022SmallBanner from "./public/img/events/2022HastaBanana.jpg";
import hastaBanana2022LargeBanner from "./public/img/events/2022HastaBananaFlyer.png";
import dessertquiz2022Profile from "./public/img/events/2022DessertquizProfile.jpeg";
import dessertquiz2022LargeBanner from "./public/img/events/2022Dessertquiz.jpeg";


import {FacebookOutlined, Instagram} from "@mui/icons-material";
import {CardMedia} from "@mui/material";

const splashPhotos = [{
    photo: Sportfeest21Foto, alt: "Een groepsfoto van het sportfeest 2021",
}, {
    photo: Sportfeest19Foto, alt: "Een groepsfoto van het sportfeest 2021",
}, {
    photo: WeekendGroepsfoto2022, alt: "Een groepsfoto van het weekend 2022",
}];

const bestuurstaken = {
    HB:      {
        name: "Hoofdbestuur",
    }, JR:   {
        name: "Jeugdraadslid",
    }, FV:   {
        name: "Foto-verantwoordelijke",
    }, SFV:  {
        name: "Sportfeestverantwoordelijke",
    }, VEP:  {
        name: "Verjaardag- en prikbordverantwoordelijke",
    }, EHBO: {
        name: "EHBO-verantwoordelijke",
    }, KAS:  {
        name: "Kassier",
    }, GR:   {
        name: "Gewestraadslid",
    }, GEM:  {
        name: "Redactie 't Gemakske",
    }, WEB:  {
        name: "Websiteverantwoordelijke",
    }, AED:  {
        name: "Archivaris & dropboxverantwoordelijke",
    }, KEW:  {
        name: "Kamp- en weekendverantwoordelijke",
    }, BAV:  {
        name: "Bestuursanimatieverantwoordelijke",
    }, KLV:  {
        name: "Kledijverantwoordelijke",
    }, KV:   {
        name: "K-verantwoordelijke",
    }, TD:   {
        name: "Technische dienst",
    }, PR:   {
        name: "PR-verantwoordelijke",
    }, DV:   {
        name: "Drankverantwoordelijke",
    }, ST:   {
        name: "Secretaris",
    }, MV:   {
        name: "Materiaalverantwoordelijke",
    }, LVV:  {
        name: "Lokaalverhuurverantwoordelijke",
    }, CRM:  {
        name: "Cramme-verantwoordelijke",
    },
};

const bestuur = [{
    firstName:   "Jarno",
    lastName:    "Schepens",
    mail:        "jarno.schepens@kljstekene.be",
    tasks:       [bestuurstaken.HB, bestuurstaken.JR, bestuurstaken.BAV],
    startDate:   new Date("2020-09-01T00:00:00+0200"),
    avatar:      {
        src: JarnoSchepens, alt: "Portret van Jarno",
    },
    socialMedia: [{
        icon: <FacebookOutlined/>, href: "https://www.facebook.com/profile.php?id=100009181375563",
    }, {
        icon: <Instagram/>, href: "https://www.instagram.com/jarnoschepens/",
    }],
}, {
    firstName:   "Nina",
    lastName:    "Selis",
    mail:        "nina.selis@kljstekene.be",
    tasks:       [bestuurstaken.HB, bestuurstaken.JR, bestuurstaken.CRM],
    startDate:   new Date("2020-09-01T00:00:00+0200"),
    avatar:      {
        src: NinaSelis, alt: "Portret van Nina",
    },
    socialMedia: [{
        icon: <FacebookOutlined/>, href: "https://www.facebook.com/nina.selis",
    }, {
        icon: <Instagram/>, href: "https://www.instagram.com/ninaselis/",
    }],
}, {
    firstName:   "Amber",
    lastName:    "Van Moeseke",
    mail:        "amber.van.moeseke@kljstekene.be",
    tasks:       [bestuurstaken.SFV, bestuurstaken.KEW, bestuurstaken.VEP],
    startDate:   new Date("2021-09-12T00:00:00+0200"),
    avatar:      {
        src: AmberVanMoeseke, alt: "Portret van Amber",
    },
    socialMedia: [{
        icon: <FacebookOutlined/>, href: "https://www.facebook.com/amber.vanmoeseke",
    }, {
        icon: <Instagram/>, href: "https://www.instagram.com/amber_vm_/",
    }],
}, {
    firstName:   "Anouk",
    lastName:    "Laureys",
    mail:        "anouk.laureys@kljstekene.be",
    tasks:       [bestuurstaken.KAS, bestuurstaken.SFV, bestuurstaken.EHBO, bestuurstaken.BAV],
    startDate:   new Date("2020-09-01T00:00:00+0200"),
    avatar:      {
        src: AnoukLaureys, alt: "Portret van Anouk",
    },
    socialMedia: [{
        icon: <FacebookOutlined/>, href: "https://www.facebook.com/anouk.laureys",
    }, {
        icon: <Instagram/>, href: "https://www.instagram.com/anouk_laureys/",
    }],
}, {
    firstName:   "Ewald",
    lastName:    "Tindemans",
    mail:        "ewald.tindemans@kljstekene.be",
    tasks:       [bestuurstaken.GR, bestuurstaken.SFV],
    startDate:   new Date("2020-09-01T00:00:00+0200"),
    avatar:      {
        src: EwaldTindemans, alt: "Portret van Ewald",
    },
    socialMedia: [{
        icon: <FacebookOutlined/>, href: "https://www.facebook.com/ewald.tindemans",
    }, {
        icon: <Instagram/>, href: "https://www.instagram.com/ewaldtindemans/",
    }],
}, {
    firstName:   "Febe",
    lastName:    "Meerschaert",
    mail:        "febe.meerschaert@kljstekene.be",
    tasks:       [bestuurstaken.PR, bestuurstaken.SFV, bestuurstaken.FV, bestuurstaken.VEP],
    startDate:   new Date("2022-09-11T00:00:00+0200"),
    avatar:      {
        src: FebeMeerschaert, alt: "Portret van Febe",
    },
    socialMedia: [{
        icon: <FacebookOutlined/>, href: "https://www.facebook.com/profile.php?id=100009415370035",
    }, {
        icon: <Instagram/>, href: "https://www.instagram.com/febe_meerschaert/",
    }],
}, {
    firstName:   "Feniks",
    lastName:    "Van Vooren",
    mail:        "feniks.van.vooren@kljstekene.be",
    tasks:       [bestuurstaken.GR, bestuurstaken.SFV, bestuurstaken.GEM, bestuurstaken.KEW],
    startDate:   new Date("2021-10-01T00:00:00+0200"),
    avatar:      {
        src: FeniksVanVooren, alt: "Portret van Feniks",
    },
    socialMedia: [{
        icon: <FacebookOutlined/>, href: "https://www.facebook.com/feniks.vanvooren.940",
    }, {
        icon: <Instagram/>, href: "https://www.instagram.com/feniks_v_v/",
    }],
}, {
    firstName:   "Jasmijn",
    lastName:    "Schelfhout",
    mail:        "jasmijn.schelfhout@kljstekene.be",
    tasks:       [bestuurstaken.KAS, bestuurstaken.EHBO],
    startDate:   new Date("2020-09-01T00:00:00+0200"),
    avatar:      {
        src: JasmijnSchelfhout, alt: "Portret van Jasmijn",
    },
    socialMedia: [{
        icon: <FacebookOutlined/>, href: "https://www.facebook.com/jasmijn.schelfhout",
    }, {
        icon: <Instagram/>, href: "https://www.instagram.com/jasmijn.sch/",
    }],
}, {
    firstName:   "Jens",
    lastName:    "Penneman",
    mail:        "jens.penneman@kljstekene.be",
    tasks:       [bestuurstaken.DV, bestuurstaken.WEB, bestuurstaken.FV, bestuurstaken.AED],
    startDate:   new Date("2020-09-01T00:00:00+0200"),
    avatar:      {
        src: JensPenneman, alt: "Portret van Jens",
    },
    socialMedia: [{
        icon: <FacebookOutlined/>, href: "https://www.facebook.com/PennemanJens",
    }, {
        icon: <Instagram/>, href: "https://www.instagram.com/jens.penneman/",
    }],
}, {
    firstName:   "Lotte",
    lastName:    "Jacobs",
    mail:        "lotte.jacobs@kljstekene.be",
    tasks:       [bestuurstaken.ST, bestuurstaken.PR, bestuurstaken.SFV, bestuurstaken.KLV, bestuurstaken.KV],
    startDate:   new Date("2021-09-12T00:00:00+0200"),
    avatar:      {
        src: LotteJacobs, alt: "Portret van Lotte",
    },
    socialMedia: [{
        icon: <FacebookOutlined/>, href: "https://www.facebook.com/lotte.jacobs.982",
    }, {
        icon: <Instagram/>, href: "https://www.instagram.com/lotteke.jacobs/",
    }],
}, {
    firstName:   "Maarten",
    lastName:    "Van Goey",
    mail:        "maarten.van.goey@kljstekene.be",
    tasks:       [bestuurstaken.TD, bestuurstaken.DV],
    startDate:   new Date("2020-09-01T00:00:00+0200"),
    avatar:      {
        src: MaartenVanGoey, alt: "Portret van Maarten",
    },
    socialMedia: [{
        icon: <FacebookOutlined/>, href: "https://www.facebook.com/maarten.vangoey.5",
    }, {
        icon: <Instagram/>, href: "https://www.instagram.com/maarten__vg/",
    }],
}, {
    firstName:   "Onno",
    lastName:    "Van Aken",
    mail:        "onno.van.aken@kljstekene.be",
    tasks:       [bestuurstaken.GEM, bestuurstaken.BAV],
    startDate:   new Date("2020-09-01T00:00:00+0200"),
    avatar:      {
        src: OnnoVanAken, alt: "Portret van Onno",
    },
    socialMedia: [{
        icon: <FacebookOutlined/>, href: "https://www.facebook.com/profile.php?id=100006627735364",
    }, {
        icon: <Instagram/>, href: "https://www.instagram.com/onno.van.aken/",
    }],
}, {
    firstName:   "Robin",
    lastName:    "Meerschaert",
    mail:        "robin.meerschaert@kljstekene.be",
    tasks:       [bestuurstaken.JR, bestuurstaken.TD, bestuurstaken.CRM],
    startDate:   new Date("2022-09-11T00:00:00+0200"),
    avatar:      {
        src: RobinMeerschaert, alt: "Portret van Robin",
    },
    socialMedia: [{
        icon: <FacebookOutlined/>, href: "https://www.facebook.com/robin.meerschaert.5",
    }, {
        icon: <Instagram/>, href: "https://www.instagram.com/robinmeerschaert21/",
    }],
}, {
    firstName:   "Yoran",
    lastName:    "Selis",
    mail:        "yoran.selis@kljstekene.be",
    tasks:       [bestuurstaken.ST, bestuurstaken.SFV, bestuurstaken.DV, bestuurstaken.LVV],
    startDate:   new Date("2020-09-01T00:00:00+0200"),
    avatar:      {
        src: YoranSelis, alt: "Portret van Yoran",
    },
    socialMedia: [{
        icon: <FacebookOutlined/>, href: "https://www.facebook.com/profile.php?id=100008256488127",
    }, {
        icon: <Instagram/>, href: "https://www.instagram.com/yoranselis/",
    }],
}, {
    firstName: "+20",
    lastName:  "bestuur",
    mail:      "plus20@kljstekene.be",
    tasks:     [],
    startDate: new Date("2022-09-11T00:00:00+0200"),
    avatar:    {
        src: undefined, alt: "Foto van Ewald, Onno en Jonas",
    },
}];

const locations = {
    kljStekene:             {
        name:        "KLJ Stekene",
        description: "Oprit van KLJ Stekene",
        adres:       "Sparrenhofdreef 25A, 9190 Stekene",
        parkingSize: "small",
        maps:        {
            href:      "https://goo.gl/maps/MDHJN651ha82qznt8",
            iFrameURL: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2499.7166528421953!2d4.0351028159523725!3d51.20587254052523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c38612daa95979%3A0x6ea12edb2df41fc1!2sKLJ%20Stekene!5e0!3m2!1snl!2sbe!4v1662993975488!5m2!1snl!2sbe",
        },
    }, gildenhuisStekene:   {
        name:        "Gildenhuis",
        description: "Ingang Gildenhuis",
        adres:       "Dorpsstraat 42, 9190 Stekene",
        parkingSize: "small",
        maps:        {
            href:      "https://goo.gl/maps/DD7AX6kex9PtSkVW9",
            iFrameURL: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2499.7738301108407!2d4.037073415952312!3d51.20481904060201!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3861263547e69%3A0x8b01b3b1555ab494!2sGildenhuis!5e0!3m2!1snl!2sbe!4v1659168230744!5m2!1snl!2sbe",
        },
    }, toermalijnOnderbouw: {
        name:        "Toermalijn",
        description: "De onderbouw van Toermalijn",
        adres:       "Kerkstraat 12, 9190 Stekene",
        parkingSize: "medium",
        maps:        {
            href:      "https://goo.gl/maps/gex33EuNEmMorj2t9",
            iFrameURL: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2499.622945720477!2d4.03487147028379!3d51.20759907491005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c386130cdd6f13%3A0x672cf9fc0dd1bcfc!2sToermalijn%20Onderbouw!5e0!3m2!1snl!2sbe!4v1664721098701!5m2!1snl!2sbe",
        },
    },
};

const events = [{
    name:           "Hasta Bañana",
    url:            "hastabanana2022",
    entrance:       locations.gildenhuisStekene,
    location:       locations.kljStekene,
    eventDurations: [{
        startDateTime: new Date("2022-08-06T21:00:00+0200"), endDateTime: new Date("2022-08-07T04:00:00+0200"),
    }],
    tickets:        {
        priceADK:           10,
        availableADK:       true,
        priceVVK:           8,
        availableLedenVVK:  true,
        availableOnlineVVK: true,
        hrefVVK:            "https://shop.kljstekene.be/Tickets/",
        eventbriteID:       undefined,
        startDateVVK:       new Date("2022-07-01T00:00:00+0200"),
        endDateVVK:         new Date("2022-08-06T00:00:00+0200"),
    },
    images:         {
        profile:     hastaBanana2022Profile,
        smallBanner: hastaBanana2022SmallBanner,
        largeBanner: hastaBanana2022LargeBanner,
    },
    socialMedia:    {
        facebook: "https://fb.me/e/1nzCN8mTy", instagram: undefined,
    },
}, {
    name:           "Dessertquiz",
    url:            "dessertquiz2022",
    entrance:       locations.toermalijnOnderbouw,
    location:       locations.toermalijnOnderbouw,
    eventDurations: [{
        startDateTime: new Date("2022-11-12T19:30:00+0100"), endDateTime: new Date("2022-11-12T23:59:00+0100"),
    }],
    tickets:        {
        priceADK:           15,
        availableADK:       false,
        priceVVK:           15,
        availableLedenVVK:  false,
        availableOnlineVVK: true,
        hrefVVK:            "https://shop.kljstekene.be/Tickets",
        eventbriteID:       undefined,
        startDateVVK:       new Date("2022-10-04T00:00:00+0100"),
        endDateVVK:         new Date("2022-11-01T00:00:00+0100"),
    },
    images:         {
        profile: dessertquiz2022Profile, smallBanner: undefined, largeBanner: dessertquiz2022LargeBanner,
    },
    socialMedia:    {
        facebook: undefined, instagram: undefined,
    },
}];

const upcomingEvents = events
    .filter((event) => event
        .eventDurations
        .filter((eventDuration) => eventDuration.startDateTime > new Date()).length > 0);
const activeEvents = events
    .filter((event) => event
        .eventDurations
        .filter((eventDuration) => (eventDuration.startDateTime < new Date() && eventDuration.endDateTime > new Date())).length > 0);
const pastEvents = events
    .filter((event) => event
        .eventDurations
        .filter((eventDuration) => eventDuration.endDateTime < new Date()).length > 0);


const infoAboutKLJStekene = [{
    title:        "Wat is KLJ Stekene?",
    text:         "KLJ Stekene is een jeugdbeweging voor iedereen vanaf 16 jaar. Elke vrijdagavond komen we samen in ons lokaal voor een leuke activiteit zoals een basspel, quiz, dropping, flodderdag, ruige spelen of zwemmen. Bovendien is er elk jaar een fantastisch kamp en een weekend. In de zomermaanden zitten we ook niet stil! Dan neemt onze KLJ deel aan wekelijkse sportfeesten en houden we een heus feestweekend met barbeque en fuif.",
    gridSize:     {xs: 1, sm: 2, md: 3},
    buttons:      [],
    specialMedia: undefined,
}, {
    title:        "Wie is KLJ Stekene?",
    text:         "We tellen momenteel ongeveer 80 leden in de +16 werking. Daarnaast hebben we een 20+ werking. Dit wil zeggen dat al onze leden ouder dan 16 jaar zijn. Aangezien we dus met zo een leeftijdsverschillen zitten proberen we een grote waaier van activiteiten aan te bieden.",
    gridSize:     {xs: 1, sm: 1, md: 1},
    buttons:      [],
    specialMedia: undefined,
}, {
    title:        "Waar is KLJ Stekene?",
    text:         "Ons lokaal is terug te vinden op Sparrenhofdreef 25A, 9190 Stekene. De oprit van ons terrein is te herkennen aan de grijze ijzeren oort en een uithangende KLJ vlag. Verder op deze oprit is een \"fietsenstalling\" en een parking voor wagens.",
    gridSize:     {xs: 1, sm: 1, md: 1},
    buttons:      [],
    specialMedia: undefined,
}, {
    title:        "Wanneer is KLJ Stekene?",
    text:         "Op vrijdagavond wordt er meestal 's avonds vanaf 20 uur een activiteit georganiseerd. In Juli en augustus zijn er geen activiteiten, maar worden er andere evenementen georganiseerd. Op zondagen in de vakantie nemen we ook deel aan sportfeesten. Hiervoor oefenen we een hele zomer lang.",
    gridSize:     {xs: 1, sm: 1, md: 1},
    buttons:      [],
    specialMedia: undefined,
}, {
    title:            "Locatie", text: undefined, gridSize: {xs: 1, sm: 2, md: 3}, buttons: [{
        text: "Openen in kaarten",
        href: "https://maps.apple.com/?address=Sparrenhofdreef%2025,%209190%20Stekene,%20Belgi%C3%AB&auid=222689036273232173&ll=51.205967,4.036770&lsp=9902&q=KLJ%20Stekene&_ext=CisKBAgEEFcKBAgFEAMKBQgGEN8BCgQIChAACgQIUhADCgQIVRAPCgQIWRACEiYp6Fsw88mZSUAx+8/1rk8eEEA5ZjFWT/CaSUBBTwF6Vf4sEEBQBA%3D%3D&t=h",
    }], specialMedia: <CardMedia component={"iframe"}
                                 loading={"lazy"}
                                 allowFullScreen
                                 sx={{
                                     border: 0, height: "45vh",
                                 }}
                                 src={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2499.7166528421994!2d4.035102815937717!3d51.20587254052515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c38612daa95979%3A0x6ea12edb2df41fc1!2sKLJ%20Stekene!5e0!3m2!1snl!2sbe!4v1663328740969!5m2!1snl!2sbe"}/>,
}, {
    title:        "Weekend",
    text:         "Weekend is een 3-daagse die meestal rond de krokusvakantie valt. We vertrekken vrijdagavond vol vreugde en komen zondagavond moe terug. De prijs van dit weekend bedraagt 40 euro voor overnachting, maaltijden en een tal van activiteiten.",
    gridSize:     {xs: 1, sm: 1, md: 1},
    buttons:      [],
    specialMedia: undefined,
}, {
    title:        "Kamp",
    text:         "Het kamp gaat elk jaar door van 11 tot 21 juli. Gedurende die 10 dagen wordt er steeds een ochtend-, namiddag- en avondactiviteit voorzien. De prijs is hier €140 voor overnachting, maaltijden en activiteiten. De drank is hier echter zelf te betalen.",
    gridSize:     {xs: 1, sm: 1, md: 1},
    buttons:      [],
    specialMedia: undefined,
}, {
    title:        "Andere activiteiten",
    text:         "Voor andere activiteiten moet je op de startpagina kijken om mee te zijn met het laatste nieuws. Heb je nog vragen over de KLJ? Aarzel dan niet een mailtje te sturen naar één van onze bestuursleden.",
    gridSize:     {xs: 1, sm: 1, md: 1},
    buttons:      [],
    specialMedia: undefined,
}, {
    title:        "Zin in KLJ?",
    text:         "Je kan ons een berichtje sturen via de pagina Bestuur, of gewoon verschijnen op een van onze klj-dagen. Onze klj gaat elke vrijdag door, je kan er dan één van onze bestuursleden aanspreken. Hiermee ga je akkoord met het inschrijvingsgeld van 25 euro. Je krijg daarna een formulier waarin je alle informatie moet ingeven die we nodig hebben om je als lid te aanvaarden.",
    gridSize:     {xs: 1, sm: 2, md: 3},
    buttons:      [],
    specialMedia: undefined,
}];


export {splashPhotos, events, upcomingEvents, activeEvents, pastEvents, infoAboutKLJStekene, bestuur, bestuurstaken};