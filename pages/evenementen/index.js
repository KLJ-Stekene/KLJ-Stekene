import {Fragment, memo, useCallback} from "react";
import {Avatar, Card, CardActionArea, CardHeader, Container, Divider, Stack, Typography} from "@mui/material";
import Head from "next/head";
import {activeEvents, pastEvents, upcomingEvents} from "../../kljstekene.config";
import Image from "next/image";
import {useRouter} from "next/router";


const Page = memo(() => {
    return <Container>
        <Head>
            <meta charSet="UTF-8"/>
            <meta
                content="width=device-width, user-scalable=yes, initial-scale=1.0, maximum-scale=5.0, minimum-scale=1.0"
                name="viewport"/>
            <meta content="ie=edge" httpEquiv="X-UA-Compatible"/>
            <link href="https://kljstekene.be/evenementen/" rel="canonical"/>

            <title>Evenementen</title>
            <meta content="Wij zijn een grote groep jongeren en volwassenen die ieder jaar plezier maken"
                  name="description"/>
            <meta content="nl-BE" name="language"/>
            <meta content="all,noarchive,noimageindex" name="robots"/>
            <meta content="KLJ, Stekene, Jeugdbeweging" name="keywords"/>
            <meta content="#1876d1" media="(prefers-color-scheme: light)" name="theme-color"/>
            <meta content="#272727" media="(prefers-color-scheme: dark)" name="theme-color"/>


            <meta content="KLJ Stekene" name="apple-mobile-web-app-title"/>
            <meta content="no" name="apple-mobile-web-app-capable"/>
            <meta content="default"
                  name="apple-mobile-web-app-status-bar-style"/>
            <meta content="telephone=no" name="format-detection"/>
            <meta content="date=no" name="format-detection"/>

            <link href="https://kljstekene.be/img/branding/apple-touch/apple-touch-startup-image.png"
                  rel="apple-touch-startup-image"
                  sizes="320x460"
                  type="image/png"/>
            <link href="https://kljstekene.be/img/branding/apple-touch/apple-touch-icon-iphone.png"
                  rel="apple-touch-icon"
                  sizes="80x80"
                  type="image/png"/>
            <link href="https://kljstekene.be/img/branding/apple-touch/apple-touch-icon-ipad.png"
                  rel="apple-touch-icon"
                  sizes="152x152"
                  type="image/png"/>
            <link
                href="https://kljstekene.be/img/branding/apple-touch/apple-touch-icon-iphone-retina.png"
                rel="apple-touch-icon"
                sizes="180x180"
                type="image/png"/>
            <link
                href="https://kljstekene.be/img/branding/apple-touch/apple-touch-icon-ipad-retina.png"
                rel="apple-touch-icon"
                sizes="167x167"
                type="image/png"/>
            <link href="https://kljstekene.be/img/branding/apple-touch/apple-touch-icon.png"
                  rel="apple-touch-icon"
                  sizes="any"
                  type="image/png"/>


            <meta content="KLJ Stekene" name="application-name"/>
            <meta content="Open KLJ Stekene's app" name="msapplication-tooltip"/>
            <meta content="https://kljstekene.be" name="msapplication-starturl"/>
            <meta content="width=800;height=600" name="msapplication-window"/>
            <meta content="dimgray" name="msapplication-navbutton-color"/>
            <link href="https://kljstekene.be/favicon.ico" rel="shortcut icon"
                  type="image/ico"/>
            <meta content="browserconfig.xml" name="msapplication-config"/>
            <link href="https://kljstekene.be/manifest.json" rel="manifest"/>


            <meta content="Evenementen" property="og:title"/>
            <meta
                content="Wij zijn een grote groep jongeren en volwassenen die ieder jaar plezier maken"
                property="og:description"/>
            <meta content="website" property="og:type"/>
            <meta content="https://kljstekene.be/bestuur" property="og:url"/>
            <meta content="nl_BE" property="og:locale"/>
            <meta content="KLJ Stekene" property="og:site_name"/>

            <meta content="https://kljstekene.be/img/branding/ogp/1920x1080.png"
                  property="og:image"/>
            <meta content="https://kljstekene.be/img/branding/ogp/1920x1080.png"
                  property="og:image:secure_url"/>
            <meta content="image/png" property="og:image:type"/>
            <meta content="1920" property="og:image:width"/>
            <meta content="1080" property="og:image:height"/>
            <meta content="KLJ Stekene's logo" property="og:image:alt"/>


            <meta content="summary" name="twitter:card"/>
            <meta content="@JensPenneman" name="twitter:site"/>
            <meta content="@JensPenneman" name="twitter:creator"/>
            <meta content="https://kljstekene.be/evenementen/" name="twitter:url"/>
            <meta content="KLJ Stekene" name="twitter:title"/>
            <meta
                content="Wij zijn een grote groep jongeren en volwassenen die ieder jaar plezier maken"
                name="twitter:description"/>
            <meta
                content="https://kljstekene.be/images/branding/twitter/1920.png"
                name="twitter:image"/>
            <meta content="KLJ Stekene's logo" name="twitter:image:alt"/>
        </Head>
        <Typography variant={"h3"} component={"h2"}>
            Evenementen
        </Typography>
        <Divider sx={{marginBottom: 2}}/>
        <EventList title={"Nu aan de gang..."} events={activeEvents}/>
        <EventList title={"Binnenkort"} events={upcomingEvents}/>
        <EventList title={"Afgelopen"} events={pastEvents}/>
    </Container>;
});

const EventList = memo(({title, events}) => {
    return <Fragment>
        <Typography variant={"h4"} component={"h3"}>
            {title}
        </Typography>
        {events.length !== 0 && <Stack spacing={2} sx={{marginBottom: 2}}>
            {events
                .map((event, index) => {
                    return <EvenementCard key={index} {...event}/>;
                })}
        </Stack>}
        {events.length === 0 &&
            <Typography variant={"body1"} sx={{marginBottom: 2}}>
                Geen evenementen.
            </Typography>
        }
    </Fragment>;
});

const EvenementCard = memo(({url, name, eventDurations, images}) => {
    const router = useRouter();
    const openEventpage = useCallback(() => {
        router.push("evenementen/" + url);
    }, [router, url]);

    return <Card variant={"outlined"}>
        <CardActionArea onClick={openEventpage} disabled={!url}>
            <CardHeader
                title={name}
                subheader={"Van " + eventDurations[0].startDateTime.toLocaleString("nl-BE", {
                    dateStyle: "long", timeStyle: "short",
                }) + " tot " + eventDurations[0].endDateTime.toLocaleString("nl-BE", {
                    dateStyle: "long", timeStyle: "short",
                })}
                avatar={
                    images?.profile &&
                    <Avatar>
                        <Image src={images.profile} alt={"afbeelding van fuif"} loading={"lazy"}/>
                    </Avatar>
                }
            />
        </CardActionArea>
    </Card>;
});

Page.displayName = "evenementenpagina";
EventList.displayName = "evenementenlijst";
EvenementCard.displayName = "evenement kaart";

export default Page;