# KLJ Stekene - The Website

The purpose of this website and project is to create a centralized platform where members, leaders, parents, sponsors, supporters, and others can find all relevant information. This platform is designed to eventually replace or supplement all existing channels of communication (currently it is intended to supplement until everything is fully functional).

## Local Development Setup

### Prerequisites

- [Fast Node Manager (FNM)](https://fnm.vercel.app) (Not yet required, but will be in the future)
- [NodeJS](https://nodejs.org/) (Check the `package.json` for the required version)
- [NPM](https://www.npmjs.com/) or an equivalent package manager (Check the `package.json` for the required versions)
- [Docker Desktop](https://docs.docker.com/desktop/)

### Initial Setup

```sh
npx supabase start
npm run dev
```

> [!WARNING]
> This setup process is subject to change. For example, it may change if the repository is converted to a turbo-repo.


## KLJ Stekene - URLs todo list

- [ ] / 		--> Homepage

- [ ] /[LANG]/		--> i18n-Taalselectie

- [ ] /account/		--> Leden/ouders/sympathisanten en meer: algemene info en instellingen.
- [ ] /account/authentication/	--> Login instellingen: email, wachtwoord, 2fa, passkey?
- [ ] /account/billing/		--> Waar moeten facturen, openstaande rekeningen of dergelijke naartoe?
- [ ] /account/invoices/		--> Openstaande en voorbije rekeningen/betalingen
- [ ] /account/memberships/		--> Ingeschreven groepen: leeftijdsgroepen, activiteiten, sponsors en meer

- [ ] /activities/		--> Een lijst van activiteiten voor leeftijdsgroepen (enkel zichtbaar voor leden, leiding en ouders)
- [ ] /activities/?filters	--> Filter op leeftijdsgroepen, tijdsperiodes en meer
- [ ] /activities/[UUID]/		--> Bekijk de details van een activiteit: MDX bericht, inschrijvingen, Leiding, gelinked aan evenement?, abnormale uren en meer

- [ ] /events/		--> Een lijst van alle evenementen die KLJ Stekene organiseert. Zowel privé als publiek. (Privé is dan enkel zichtbaar voor de aangeduide doelgroep)
- [ ] /events/?filters	--> filter de lijst van evenementen
- [ ] /events/[UUID]/			--> Dit zijn alle gegevens over een gegeven evenement + enkel zichtbare info voor bestuur + helpende handen inschrijvingen + etc.

- [ ] /sponsors/		--> Een lijst van alle sponsors
- [ ] /sponsors/?filters	--> Filter op: Pakket/bedrag, evenement, naam en meer
- [ ] /sponsors/[UUID]/		--> Toon de sponsors informatie, welke evenementen, en welke bedragen hij/zij/ze al bijgedragen heeft/hebben.

- [ ] /contact/		--> Een lijst van alle communicatievormen: Werkgroepen met een mail, Individueel bestuur, per evenement
- [ ] /contact/governance/		--> Een lijst van bestuursleden
- [ ] /contact/governance/?filters	--> Filter de lijst op basis van naam, werkgroep, evenement...
- [ ] /contact/governance/[UUID]/		--> Een specifiek bestuurslid: email, werkgroepen, evenementen, taken, leeftijdsgroepen
- [ ] /contact/commitees/		--> Een lijst van werkgroepen en taakgroepen binnenin KLJ Stekene en de evenementen
- [ ] /contact/commitees/?filters	--> Filter op basis van leiding, evenementen en meer


- [ ] /dashboard/		--> Een dashboard voor de leiding om alles te beheren. Deze startpagina bevat niets specifieks (select something message)

- [ ] /dashboard/people/		--> Een lijst van alle mensen verbonden met KLJ Stekene: Leden, Ouders, Sponsor-contacten en meer
- [ ] /dashboard/people/?filters	--> Filter op leden, activiteiten en meer
- [ ] /dashboard/people/[UUID]/		--> Toon een persoon zijn info, afhankelijk van de vorm van connectie wordt er hier een ander menu getoont
- [ ] /dashboard/people/[UUID]/edit/			--> Bewerk de informatie van een persoon

- [ ] /dashboard/activities/		--> Een lijst van activiteiten
- [ ] /dashboard/activities/?filters	--> Filter op basis van een leeftijdsgroep
- [ ] /dashboard/activities/[UUID]/		--> Toon alle informatie over een activiteit, maar direct bewerkbaar.

> [!NOTE]
> More to come!