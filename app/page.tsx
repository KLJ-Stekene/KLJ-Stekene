import Image from "next/image";

export default function page() {
  return <main className={"min-h-[calc(100svh-72px-56px)] print:min-h[100svh] flex flex-col gap-2"}>
    <figure className={"container mx-auto transition-all duration-300 h-[calc(100svh-72px+0.5rem)] last:h-[calc(100svh-72px-56px+0.5rem)] print:h-[100svh] relative px-2"}>
      <Image priority className={"h-full object-cover rounded-lg"} src={"/assets/img/events/2022Weekend.JPEG"} alt={""} width={1669} height={938}/>
      <figcaption className={"absolute sm:w-1/2 w-2/3 text-white transform-gpu top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-2 rounded-lg backdrop-blur-sm lg:backdrop-blur font-extrabold"}>
        <svg className={"w-full"} viewBox={"0 0 100 15"}>
          <text textAnchor={"middle"} x={"50%"} dominantBaseline={"middle"} y={"61%"} fill={"white"} fontSize={16}>KLJ Stekene</text>
        </svg>
      </figcaption>
    </figure>
    <section className={"container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 px-2"}>
      <div className={"flex flex-col gap-1 md:col-span-2 lg:col-span-1"}>
        <h2 className={"bg-gray-100 dark:bg-gray-900 first:rounded-t-lg rounded-sm flex-grow-0 p-2 text-2xl font-bold"}>Wat is KLJ Stekene?</h2>
        <p className={"bg-gray-100 dark:bg-gray-900 last:rounded-b-lg rounded-sm flex-grow p-2"}>KLJ Stekene is een jeugdbeweging waar jongeren samen plezier maken, avonturen beleven en vriendschappen
          opbouwen. We bieden een divers scala aan activiteiten en zorgen voor een positive en warme omgeving waarin iedereen welkom is.</p>
      </div>
      <div className={"flex flex-col gap-1"}>
        <h2 className={"bg-gray-100 dark:bg-gray-900 first:rounded-t-lg rounded-sm flex-grow-0 p-2 text-2xl font-bold"}>Wie is KLJ Stekene?</h2>
        <p className={"bg-gray-100 dark:bg-gray-900 last:rounded-b-lg rounded-sm flex-grow p-2"}>Bij KLJ Stekene zijn niet alleen jongeren van 16 jaar en ouder welkom, maar we hebben ook een aparte
          werking voor mensen van 20 jaar en ouder. We streven ernaar om activiteiten aan te bieden die aansluiten bij de verschillende leeftijdsgroepen, zodat
          iedereen kan genieten van leuke en uitdagende ervaringen.</p>
      </div>
      <div className={"flex flex-col gap-1"}>
        <h2 className={"bg-gray-100 dark:bg-gray-900 first:rounded-t-lg rounded-sm flex-grow-0 p-2 text-2xl font-bold"}>Waar is KLJ Stekene?</h2>
        <p className={"bg-gray-100 dark:bg-gray-900 last:rounded-b-lg rounded-sm flex-grow p-2"}>Ons adres is Sparrenhofdreef 25A, 9190 Stekene. Je kunt ons herkennen aan onze KLJ-vlag, en er is een
          fietsenstalling en parkeergelegenheid beschikbaar voor auto&apos;s. We kijken ernaar uit je daar te verwelkomen!</p>
      </div>
      <iframe className={"bg-gray-100 dark:bg-gray-900 rounded-lg md:col-span-2 lg:col-span-3 h-[40vh] print:hidden"} width={"100%"} height={"100%"}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2499.71665326768!2d4.034716576970252!3d51.20587253268567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c38612daa95979%3A0x6ea12edb2df41fc1!2sKLJ%20Stekene!5e0!3m2!1snl!2sbe!4v1684787228928!5m2!1snl!2sbe"
              allowFullScreen loading="lazy"
              referrerPolicy="no-referrer-when-downgrade" title={"KLJ Stekene's Google Maps location"}/>
      <div className={"flex flex-col gap-1 md:col-span-2 lg:col-span-1"}>
        <h2 className={"bg-gray-100 dark:bg-gray-900 first:rounded-t-lg rounded-sm flex-grow-0 p-2 text-2xl font-bold"}>Wanneer is &apos;t KLJ Stekene?</h2>
        <p className={"bg-gray-100 dark:bg-gray-900 last:rounded-b-lg rounded-sm flex-grow p-2"}>We komen elke vrijdagavond om 20:00 uur samen. Gedurende de zomer organiseren we ook sportevenementen,
          een kamp en een weekend vol avontuur. Vergeet ook niet onze speciale evenementen, zoals de dessertquiz en de grote fuif in het eerste weekend van
          augustus. Kom en doe mee!</p>
      </div>
      <div className={"flex flex-col gap-1"}>
        <h2 className={"bg-gray-100 dark:bg-gray-900 first:rounded-t-lg rounded-sm flex-grow-0 p-2 text-2xl font-bold"}>Kamp</h2>
        <p className={"bg-gray-100 dark:bg-gray-900 last:rounded-b-lg rounded-sm flex-grow p-2"}>Ons kamp vindt plaats van 11 tot 21 juli. Voor slechts 145 euro krijg je elke dag een ochtend-, middag-
          en avondactiviteit, evenals maaltijden en accommodatie. Drankjes zijn exclusief. We hebben ook een spannende daguitstap en een dorpspel gepland. Je
          kunt met de fiets komen of gebruikmaken van het openbaar vervoer.</p>
      </div>
      <div className={"flex flex-col gap-1"}>
        <h2 className={"bg-gray-100 dark:bg-gray-900 first:rounded-t-lg rounded-sm flex-grow-0 p-2 text-2xl font-bold"}>Weekend</h2>
        <p className={"bg-gray-100 dark:bg-gray-900 last:rounded-b-lg rounded-sm flex-grow p-2"}>Ons weekend is een geweldige 3-daagse ervaring die plaatsvindt rond de krokusvakantie. We vertrekken op
          vrijdagavond en komen op zondagavond terug. Voor slechts 45 euro kun je deelnemen aan alle activiteiten, inclusief vervoer met de auto. Net als bij het
          kamp is alles voorzien, behalve drankjes. Mis deze leuke trip niet!</p>
      </div>
    </section>
  </main>
}
