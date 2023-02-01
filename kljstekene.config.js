import {CardMedia} from "@mui/material";
import FacebookOutlined from "@mui/icons-material/FacebookOutlined";
import Instagram from "@mui/icons-material/Instagram";

export const companyInfo = {
    name:        "KLJ Stekene", socialMedia: [{
        icon: <FacebookOutlined/>, href: "https://facebook.com/KljStekene",
    }, {
        icon: <Instagram/>, href: "https://instagram.com/kljstekene",
    }], aboutUs: [{
        title:    "Wat is KLJ Stekene?",
        text:     "KLJ Stekene is een jeugdbeweging voor iedereen vanaf 16 jaar. Elke vrijdagavond komen we samen in ons lokaal voor een leuke activiteit zoals een basspel, quiz, dropping, flodderdag, ruige spelen of zwemmen. Bovendien is er elk jaar een fantastisch kamp en een weekend. In de zomermaanden zitten we ook niet stil! Dan neemt onze KLJ deel aan wekelijkse sportfeesten en houden we een heus feestweekend met barbeque en fuif.",
        gridSize: {xs: 1, sm: 2, md: 3},
        buttons:  [],
        media:    undefined,
    }, {
        title:    "Wie is KLJ Stekene?",
        text:     "We tellen momenteel ongeveer 80 leden in de +16 werking. Daarnaast hebben we een 20+ werking. Dit wil zeggen dat al onze leden ouder dan 16 jaar zijn. Aangezien we dus met zo een leeftijdsverschillen zitten proberen we een grote waaier van activiteiten aan te bieden.",
        gridSize: {xs: 1, sm: 1, md: 1},
        buttons:  [],
        media:    undefined,
    }, {
        title:    "Waar is KLJ Stekene?",
        text:     "Ons lokaal is terug te vinden op Sparrenhofdreef 25A, 9190 Stekene. De oprit van ons terrein is te herkennen aan de grijze ijzeren oort en een uithangende KLJ vlag. Verder op deze oprit is een \"fietsenstalling\" en een parking voor wagens.",
        gridSize: {xs: 1, sm: 1, md: 1},
        buttons:  [],
        media:    undefined,
    }, {
        title:    "Wanneer is KLJ Stekene?",
        text:     "Op vrijdagavond wordt er meestal 's avonds vanaf 20 uur een activiteit georganiseerd. In Juli en augustus zijn er geen activiteiten, maar worden er andere evenementen georganiseerd. Op zondagen in de vakantie nemen we ook deel aan sportfeesten. Hiervoor oefenen we een hele zomer lang.",
        gridSize: {xs: 1, sm: 1, md: 1},
        buttons:  [],
        media:    undefined,
    }, {
        title:     "Locatie", text: undefined, gridSize: {xs: 1, sm: 2, md: 3}, buttons: [{
            text: "Openen in kaarten",
            href: "https://maps.apple.com/?address=Sparrenhofdreef%2025,%209190%20Stekene,%20Belgi%C3%AB&auid=222689036273232173&ll=51.205967,4.036770&lsp=9902&q=KLJ%20Stekene&_ext=CisKBAgEEFcKBAgFEAMKBQgGEN8BCgQIChAACgQIUhADCgQIVRAPCgQIWRACEiYp6Fsw88mZSUAx+8/1rk8eEEA5ZjFWT/CaSUBBTwF6Vf4sEEBQBA%3D%3D&t=h",
        }], media: <CardMedia component={"iframe"}
                              loading={"lazy"}
                              allowFullScreen
                              sx={{
                                  border: 0, height: "45vh",
                              }}
                              src={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2499.7166528421994!2d4.035102815937717!3d51.20587254052515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c38612daa95979%3A0x6ea12edb2df41fc1!2sKLJ%20Stekene!5e0!3m2!1snl!2sbe!4v1663328740969!5m2!1snl!2sbe"}/>,
    }, {
        title:    "Weekend",
        text:     "Weekend is een 3-daagse die meestal rond de krokusvakantie valt. We vertrekken vrijdagavond vol vreugde en komen zondagavond moe terug. De prijs van dit weekend bedraagt 40 euro voor overnachting, maaltijden en een tal van activiteiten.",
        gridSize: {xs: 1, sm: 1, md: 1},
        buttons:  [],
        media:    undefined,
    }, {
        title:    "Kamp",
        text:     "Het kamp gaat elk jaar door van 11 tot 21 juli. Gedurende die 10 dagen wordt er steeds een ochtend-, namiddag- en avondactiviteit voorzien. De prijs is hier €140 voor overnachting, maaltijden en activiteiten. De drank is hier echter zelf te betalen.",
        gridSize: {xs: 1, sm: 1, md: 1},
        buttons:  [],
        media:    undefined,
    }, {
        title:    "Andere activiteiten",
        text:     "Voor andere activiteiten moet je op de startpagina kijken om mee te zijn met het laatste nieuws. Heb je nog vragen over de KLJ? Aarzel dan niet een mailtje te sturen naar één van onze bestuursleden.",
        gridSize: {xs: 1, sm: 1, md: 1},
        buttons:  [],
        media:    undefined,
    }, {
        title:    "Zin in KLJ?",
        text:     "Je kan ons een berichtje sturen via de pagina Bestuur, of gewoon verschijnen op een van onze klj-dagen. Onze klj gaat elke vrijdag door, je kan er dan één van onze bestuursleden aanspreken. Hiermee ga je akkoord met het inschrijvingsgeld van 25 euro. Je krijg daarna een formulier waarin je alle informatie moet ingeven die we nodig hebben om je als lid te aanvaarden.",
        gridSize: {xs: 1, sm: 2, md: 3},
        buttons:  [],
        media:    undefined,
    }], boardMembers: [{
        firstname: "Jarno", lastname: "Schepens", mail: "jarno.schepens@kljstekene.be", avatar: {
            src: "/assets/img/boardmember/jarnoschepens/face2022.JPG", alt: "Portret",
        }, tasks:  ["Hoofdbestuur", "Jeugdraadslid", "Bestuursanimatieverantwoordelijke"],
    }, {
        firstname: "Nina", lastname: "Selis", mail: "nina.selis@kljstekene.be", avatar: {
            src: "/assets/img/boardmember/ninaselis/face2022.JPG", alt: "Portret",
        }, tasks:  ["Hoofdbestuur", "Jeugdraadslid", "Bestuursanimatieverantwoordelijke"],
    }, {
        firstname: "Amber",
        lastname:  "Van Moeseke",
        mail:      "amber.van.moeseke@kljstekene.be",
        avatar:    {
            src: "/assets/img/boardmember/ambervanmoeseke/face2022.JPG", alt: "Portret",
        },
        tasks:     ["Sportfeestverantwoordelijke", "Kamp- en weekendverantwoordelijke", "Verjaardag- en prikbordverantwoordelijke"],
    }, {
        firstname: "Anouk",
        lastname:  "Laureys",
        mail:      "anouk.laureys@kljstekene.be",
        avatar:    {
            src: "/assets/img/boardmember/anouklaureys/face2022.JPG", alt: "Portret",
        },
        tasks:     ["Kassier", "Sportfeestverantwoordelijke", "EHBO-verantwoordelijke", "Bestuursanimatieverantwoordelijke"],
    }, {
        firstname: "Ewald", lastname: "Tindemans", mail: "ewald.tindemans@kljstekene.be", avatar: {
            src: "/assets/img/boardmember/ewaldtindemans/face2022.JPG", alt: "Portret",
        }, tasks:  ["Gewestraadslid", "Sportfeestverantwoordelijke"],
    }, {
        firstname: "Febe",
        lastname:  "Meerschaert",
        mail:      "febe.meerschaert@kljstekene.be",
        avatar:    {
            src: "/assets/img/boardmember/febemeerschaert/face2022.JPG", alt: "Portret",
        },
        tasks:     ["PR-verantwoordelijke", "Sportfeestverantwoordelijke", "Foto-verantwoordelijke", "Verjaardag- en prikbordverantwoordelijke"],
    }, {
        firstname: "Feniks", lastname: "Van Vooren", mail: "feniks.van.vooren@kljstekene.be", avatar: {
            src: "/assets/img/boardmember/feniksvanvooren/face2022.JPG", alt: "Portret",
        }, tasks:  ["Gewestraadslid", "Sportfeestverantwoordelijke", "GEM", "Kamp- en weekendverantwoordelijke"],
    }, {
        firstname: "Jasmijn", lastname: "Schelfhout", mail: "jasmijn.schelfhout@kljstekene.be", avatar: {
            src: "/assets/img/boardmember/jasmijnschelfhout/face2022.JPG", alt: "Portret",
        }, tasks:  ["Kassier", "EHBO-verantwoordelijke"],
    }, {
        firstname: "Jens", lastname: "Penneman", mail: "jens.penneman@kljstekene.be", avatar: {
            src: "/assets/img/boardmember/jenspenneman/face2022.JPG", alt: "Portret",
        }, tasks:  ["Drankverantwoordelijke", "WEB", "Foto-verantwoordelijke", "Archivaris & dropboxverantwoordelijke"],
    }, {
        firstname: "Lotte",
        lastname:  "Jacobs",
        mail:      "lotte.jacobs@kljstekene.be",
        avatar:    {
            src: "/assets/img/boardmember/lottejacobs/face2022.JPG", alt: "Portret",
        },
        tasks:     ["Secretaris", "PR-verantwoordelijke", "Sportfeestverantwoordelijke", "Kledijverantwoordelijke", "K-verantwoordelijke"],
    }, {
        firstname: "Maarten", lastname: "Van Goey", mail: "maarten.van.goey@kljstekene.be", avatar: {
            src: "/assets/img/boardmember/maartenvangoey/face2022.JPG", alt: "Portret",
        }, tasks:  ["Technische dienst", "Drankverantwoordelijke"],
    }, {
        firstname: "Onno", lastname: "Van Aken", mail: "onno.van.aken@kljstekene.be", avatar: {
            src: "/assets/img/boardmember/onnovanaken/face2022.JPG", alt: "Portret",
        }, tasks:  ["GEM", "Bestuursanimatieverantwoordelijke"],
    }, {
        firstname: "Robin", lastname: "Meerschaert", mail: "robin.meerschaert@kljstekene.be", avatar: {
            src: "/assets/img/boardmember/robinmeerschaert/face2022.JPG", alt: "Portret",
        }, tasks:  ["Jeugdraadslid", "Technische dienst", "Cramme-verantwoordelijke"],
    }, {
        firstname: "Yoran",
        lastname:  "Selis",
        mail:      "yoran.selis@kljstekene.be",
        avatar:    {
            src: "/assets/img/boardmember/yoranselis/face2022.JPG", alt: "Portret",
        },
        tasks:     ["Secretaris", "Sportfeestverantwoordelijke", "Drankverantwoordelijke", "Lokaalverhuurverantwoordelijke"],
    }, {
        firstname: "+20", lastname: "bestuur", mail: "plus20@kljstekene.be",
    }],
};

export const globalNavigation = [{
    displayText: "Startpagina", link: "/", links: undefined,
}, {
    displayText: "Over ons", link: "/overons", links: undefined,
}, {
    displayText: "Bestuur", link: "/bestuur", links: undefined,
},
//    {
//        displayText: "Sponsors", link: "/sponsors", links: undefined,
//    },
];

export const pageContent = {
    index: {
        title:        "De beste jeugdbeweging, ook in Stekene!",
        subtitle:     "Ja ja... dure woorden, maar kom eens kijken en geloof met je eigen ogen!",
        bannerImage:  {src: "/assets/img/events/2022Weekend.JPEG", alt: "groepsfoto van het weekend van 2022"},
        errorMessage: undefined,
    }, overons: {
        title: "Over ons",
    }, bestuur: {
        title:       "Bestuur",
        bannerImage: {src: "/assets/img/boardmember/bestuur2022.JPG", alt: "groepsfoto van het bestuur van 2022"},
    },
};