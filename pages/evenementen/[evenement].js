import {Box, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Container, Divider, Grid, Typography} from "@mui/material";
import Head from "next/head";
import {useRouter} from "next/router";
import {Fragment, memo} from "react";
import {events} from "/kljstekene.config";
import Image from "next/image";
import {Directions, FacebookOutlined, Instagram, LocalActivity} from "@mui/icons-material";


const Page = memo(() => {
    const router = useRouter();
    const {evenement: evenementURL} = router.query;

    const evenement = events.find((event) => event.url === evenementURL);

    return evenement && <Container>
        <Head>
            <meta charSet="UTF-8"/>
            <meta
                content="width=device-width, user-scalable=yes, initial-scale=1.0, maximum-scale=5.0, minimum-scale=1.0"
                name="viewport"/>
            <meta content="ie=edge" httpEquiv="X-UA-Compatible"/>
            <link href={"https://kljstekene.be/" + evenement?.url + "/"} rel="canonical"/>

            <title>{evenement?.name}</title>
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


            <meta content={evenement?.name} property="og:title"/>
            <meta
                content="Wij zijn een grote groep jongeren en volwassenen die ieder jaar plezier maken"
                property="og:description"/>
            <meta content="website" property="og:type"/>
            <meta content={"https://kljstekene.be/" + evenement?.url + "/"} property="og:url"/>
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
            <meta content={"https://kljstekene.be/" + evenement?.url + "/"} name="twitter:url"/>
            <meta content={evenement?.name} name="twitter:title"/>
            <meta
                content="Wij zijn een grote groep jongeren en volwassenen die ieder jaar plezier maken"
                name="twitter:description"/>
            <meta
                content="https://kljstekene.be/images/branding/twitter/1920.png"
                name="twitter:image"/>
            <meta content="KLJ Stekene's logo" name="twitter:image:alt"/>
        </Head>
        <Typography variant={"h3"} component={"h2"}>
            {evenement?.name}
        </Typography>
        <Divider sx={{marginBottom: 2}}/>
        <Grid container
              spacing={2}
              columns={{xs: 1, md: 3}}>
            {
                evenement?.images?.largeBanner &&
                <Grid item xs={1} md={3}>
                    <Card>
                        <CardMedia>
                            <Box>
                                <Image
                                    src={evenement?.images.largeBanner}
                                    alt={"large info banner"}
                                    loading={"lazy"}
                                    style={{
                                        width:  "100%",
                                        height: "auto",
                                    }}/>
                            </Box>
                        </CardMedia>
                    </Card>
                </Grid>
            }
            <Grid item xs={1} md={1}>
                <Card>
                    <CardHeader
                        title={"Inkomprijs"}
                    />
                    <CardContent>
                        {
                            (evenement?.tickets.availableLedenVVK || evenement?.tickets.availableOnlineVVK) &&
                            <Typography>
                                Voorverkoopprijs: &euro;{evenement?.tickets.priceVVK}
                            </Typography>
                        }
                        {
                            evenement?.tickets.availableADK &&
                            <Typography>
                                Prijs aan de kassa: &euro;{evenement?.tickets.priceADK}
                                {!evenement?.tickets.availableOnlineVVK && " (enkel bij leden)"}
                                {!evenement?.tickets.availableLedenVVK && " (enkel online)"}
                            </Typography>
                        }
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={1} md={1}>
                <Card>
                    <CardHeader title={"Wanneer?"}/>
                    <CardContent>
                        <Typography component={"p"} variant={"body1"}>
                            Van {evenement.eventDurations[0]
                            .startDateTime
                            .toLocaleString("nl-BE", {
                                dateStyle: "long", timeStyle: "short",
                            })}
                        </Typography>
                        <Typography component={"p"} variant={"body1"}>
                            Tot {evenement.eventDurations[0]
                            .endDateTime
                            .toLocaleString("nl-BE", {
                                dateStyle: "long", timeStyle: "short",
                            })}
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={1} md={1}>
                <Card>
                    <CardHeader title={"Waar?"}/>
                    <CardContent>
                        {
                            !evenement.location &&
                            <Typography component={"p"} variant={"body1"}>
                                Ergens op deze planeet!
                            </Typography>
                        }
                        {
                            evenement.location &&
                            <Fragment>
                                <Typography component={"p"} variant={"body1"}>
                                    Plaats: {evenement.location.name}
                                </Typography>
                                <Typography component={"p"} variant={"body1"}>
                                    Beschrijving: {evenement.location.description}
                                </Typography>
                                <Typography component={"p"} variant={"body1"}>
                                    Adres: {evenement.location.adres}
                                </Typography>
                                <Typography component={"p"} variant={"body1"}>
                                    Parking: {evenement.location.parkingSize !== "large" ? evenement.location.parkingSize === "small" ? "klein" : "middelmatig" : "groot"}
                                </Typography>
                            </Fragment>
                        }
                    </CardContent>
                </Card>
            </Grid>
            {
                evenement?.location && evenement?.location.maps.iFrameURL &&
                <Grid item xs={1} md={3}>
                    <Card>
                        <CardMedia component={"iframe"}
                                   loading={"lazy"}
                                   allowFullScreen
                                   sx={{border: 0, height: "45vh"}}
                                   src={evenement.location.maps.iFrameURL}/>
                    </Card>
                </Grid>
            }
            <Grid item xs={1} md={3}>
                <Card>
                    <CardActions sx={{overflowX: "auto"}}>
                        {
                            evenement?.tickets && evenement?.tickets?.availableOnlineVVK &&
                            <EventButton text={"Tickets"} icon={<LocalActivity/>} href={evenement.tickets.hrefVVK}
                                         disabled={!(evenement.tickets.startDateVVK < new Date() && new Date() < evenement.tickets.endDateVVK)}/>
                        }
                        {
                            evenement?.location && evenement?.location?.maps?.href &&
                            <EventButton text={"Openen in kaarten"} icon={<Directions/>}
                                         href={evenement.location.maps.href}/>
                        }
                        {
                            evenement?.socialMedia && evenement?.socialMedia?.facebook &&
                            <EventButton text={"Facebook"} icon={<FacebookOutlined/>}
                                         href={evenement.socialMedia.facebook}/>
                        }
                        {
                            evenement?.socialMedia && evenement?.socialMedia?.instagram &&
                            <EventButton text={"Instagram"} icon={<Instagram/>} href={evenement.socialMedia.instagram}/>
                        }
                    </CardActions>
                </Card>
            </Grid>
        </Grid>
    </Container>;
});

const EventButton = memo(({text, href, icon, disabled = false}) => {
    return <Button startIcon={icon}
                   href={href}
                   sx={{flexShrink: 0}}
                   disabled={disabled}>
        {text}
    </Button>;
});

Page.displayName = "evenementpagina";
EventButton.displayName = "eventlink";

export default Page;