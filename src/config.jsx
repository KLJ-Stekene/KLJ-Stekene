import IceIceBaby2022 from "./img/events/ice ice baby.png";
import MauricesLiefdesLeven from "./img/gemakske/2022-02-14-maurice.png";
import MauriceOpPasen from "./img/gemakske/2021-04-17-maurice.png";
import {
	Add,
	CalendarToday,
	Directions,
	Facebook,
	Favorite,
	HouseSiding,
	Instagram,
	LocationOn,
	People,
	QuestionMark,
} from "@mui/icons-material";
import {blue, deepOrange, red} from "@mui/material/colors";
import {CardMedia} from "@mui/material";

const links       = [{
	tekst:    "startpagina",
	url:      "/",
	disabled: false,
	color:    "inherit",
}, {
	tekst:    "Over ons",
	url:      "/overons",
	disabled: false,
	color:    "inherit",
}, {
	tekst:    "Bestuur",
	url:      "/bestuur",
	disabled: false,
	color:    "inherit",
}, {
	url:      "/sponsors",
	disabled: false,
	icon:     <Favorite />,
	color:    red.A400,
}];
const socialMedia = [{
	name:     "Facebook",
	icon:     <Facebook />,
	color:    blue.A700,
	disabled: false,
	href:     "https://www.facebook.com/KljStekene/?utm_source=kljstekene.be&utm_medium=Referral",
}, {
	name:     "Instagram",
	icon:     <Instagram />,
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
		name:          "Facebook event",
		displayedText: "",
		href:          "https://fb.me/e/1Ab5M00O8",
		disabled:      false,
	}],
	size:               {
		xs: 1,
		sm: 2,
		md: 3,
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
		xs: 1,
		sm: 2,
		md: 2,
	},
}, {
	startDate:          new Date("2022-04-17"),
	endDate:            new Date("2022-06-01"),
	displayedEventDate: "Pasen '22",
	title:              "Het leven van Maurice: Pasen",
	text:               "",
	image:              MauriceOpPasen,
	size:               {
		xs: 1,
		sm: 2,
		md: 2,
	},
}];


const infoAboutUs = [
	{
		title: "Wat is KLJ Stekene?",
		text:  "KLJ Stekene is een jeugdbeweging voor iedereen vanaf 16 jaar. Elke vrijdagavond komen we samen in ons" +
			   " lokaal voor een leuke activiteit zoals een basspel, quiz, dropping, flodderdag, ruige spelen of" +
			   " zwemmen. Bovendien is er elk jaar een fantastisch kamp en een weekend. In de zomermaanden zitten we" +
			   " ook niet stil! Dan neemt onze KLJ deel aan wekelijkse sportfeesten en houden we een heus" +
			   " feestweekend met barbeque en fuif.",
		icon:  <QuestionMark />,
		size:  {
			xs: 1,
			sm: 2,
			md: 3,
		},
	},
	{
		title: "Wie is KLJ Stekene?",
		text:  "We tellen momenteel ongeveer 80 leden in de +16 werking. Daarnaast hebben we een 20+" +
			   " werking. Dit wil zeggen dat al onze leden ouder dan 16 jaar zijn. Aangezien we dus met zo" +
			   " een leeftijdsverschillen zitten proberen we een grote waaier van activiteiten aan te bieden.",
		icon:  <People />,
		size:  {
			xs: 1,
			sm: 1,
			md: 1,
		},
	},
	{
		title: "Waar is KLJ Stekene?",
		text:  "Ons lokaal is terug te vinden op Sparrenhofdreef 25A, 9190 Stekene. De oprit van ons" +
			   " terrein is te herkennen aan de grijze ijzeren oort en een uithangende KLJ vlag." +
			   " Verder op deze oprit is een \"fietsenstalling\" en een parking voor wagens.",
		icon:  <LocationOn />,
		size:  {
			xs: 1,
			sm: 1,
			md: 1,
		},
	},
	{
		title: "Wanneer is KLJ Stekene?",
		text:  "Op vrijdagavond wordt er meestal 's avonds vanaf 20 uur een activiteit georganiseerd. " +
			   "In Juli en augustus zijn er geen activiteiten, maar worden er andere evenementen" +
			   " georganiseerd. Op zondagen in de vakantie nemen we ook deel aan sportfeesten. Hiervoor" +
			   " oefenen we een hele zomer lang.",
		icon:  <CalendarToday />,
		size:  {
			xs: 1,
			sm: 1,
			md: 1,
		},
	},
	{
		title:          "Locatie",
		icon:           <Directions />,
		buttons:        [
			{
				displayText: "Openen in kaarten",
				href:        "https://maps.apple.com/?address=Sparrenhofdreef%2025,%209190%20Stekene,%20Belgi%C3%AB&auid=222689036273232173&ll=51.205967,4.036770&lsp=9902&q=KLJ%20Stekene&_ext=CisKBAgEEFcKBAgFEAMKBQgGEN8BCgQIChAACgQIUhADCgQIVRAPCgQIWRACEiYp6Fsw88mZSUAx+8/1rk8eEEA5ZjFWT/CaSUBBTwF6Vf4sEEBQBA%3D%3D&t=h",
				disabled:    false,
			},
		],
		size:           {
			xs: 1,
			sm: 2,
			md: 3,
		},
		specialContent: <CardMedia component={"iframe"}
								   loading={"lazy"}
								   allowfullscreen
								   sx={{
									   border: 0,
									   height: "45vh",
								   }}
								   src={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2499.716652842191!2d4.035102815977919!3d51.205872540525306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c38612daa95979%3A0x6ea12edb2df41fc1!2sKLJ%20Stekene!5e0!3m2!1snl!2sbe!4v1632578998903!5m2!1snl!2sbe"} />,
	},
	{
		title: "Weekend",
		text:  "Weekend is een 3-daagse die meestal rond de krokusvakantie valt. We vertrekken vrijdagavond" +
			   " vol vreugde en komen zondagavond moe terug. De prijs van dit weekend bedraagt 40 euro voor" +
			   " overnachting, maaltijden en een tal van activiteiten.",
		icon:  <HouseSiding />,
		size:  {
			xs: 1,
			sm: 1,
			md: 1,
		},
	},
	{
		title: "Kamp",
		text:  "Het kamp gaat elk jaar door van 11 tot 21 juli. Gedurende die 10 dagen wordt er steeds een ochtend-," +
			   " namiddag- en avondactiviteit voorzien. De prijs is hier €140 voor overnachting, maaltijden en" +
			   " activiteiten. De drank is hier echter zelf te betalen.",
		icon:  <HouseSiding />,
		size:  {
			xs: 1,
			sm: 1,
			md: 1,
		},
	},
	{
		title: "Andere activiteiten",
		text:  "Voor andere activiteiten moet je op de startpagina kijken om mee te zijn met het laatste nieuws. " +
			   "Heb je nog vragen over de KLJ? Aarzel dan niet een mailtje te sturen naar één van onze bestuursleden.",
		icon:  <Add />,
		size:  {
			xs: 1,
			sm: 1,
			md: 1,
		},
	},
	{
		title: "Zin in KLJ?",
		text:  "Je kan ons een berichtje sturen via de pagina Bestuur, of gewoon verschijnen op een van onze" +
			   " klj-dagen. Onze klj gaat elke vrijdag door, je kan er dan één van onze bestuursleden aanspreken." +
			   " Hiermee ga je akkoord met het inschrijvingsgeld van 25 euro. Je krijg daarna een formulier waarin" +
			   " je alle informatie moet ingeven die we nodig hebben om je als lid te aanvaarden.",
		size:  {
			xs: 1,
			sm: 2,
			md: 3,
		},
	},
];

export {links, socialMedia, nieuws, gemakske, infoAboutUs};