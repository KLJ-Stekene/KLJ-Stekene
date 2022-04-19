import IceIceBaby2022 from "./img/events/ice ice baby.png";
import MauricesLiefdesLeven from "./img/gemakske/2022-02-14-maurice.png";
import MauriceOpPasen from "./img/gemakske/2021-04-17-maurice.png";
import {Facebook, Favorite, Instagram} from "@mui/icons-material";
import {blue, deepOrange, red} from "@mui/material/colors";

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

export {links, socialMedia, nieuws, gemakske};