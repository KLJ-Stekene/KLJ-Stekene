import Head from 'next/head';
import Image from "next/image";
import {Fragment, memo, useCallback} from "react";
import {Alert, Box, Button, Card, CardActionArea, CardActions, CardContent, CardHeader, CardMedia, Container, Divider, Grid, IconButton, Typography} from "@mui/material";
import {pastEvents, splashPhotos, upcomingEvents} from "/kljstekene.config";
import {useRouter} from "next/router";
import {ChevronRight, LocalActivity} from "@mui/icons-material";


const Page = memo(() => {
    return (<Fragment>
        <Head>
            <meta charSet="UTF-8"/>
            <meta
                content="width=device-width, user-scalable=yes, initial-scale=1.0, maximum-scale=5.0, minimum-scale=1.0"
                name="viewport"/>
            <meta content="ie=edge" httpEquiv="X-UA-Compatible"/>
            <link href="https://kljstekene.be" rel="canonical"/>

            <title>KLJ Stekene</title>
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


            <meta content="KLJ Stekene" property="og:title"/>
            <meta
                content="Wij zijn een grote groep jongeren en volwassenen die ieder jaar plezier maken"
                property="og:description"/>
            <meta content="website" property="og:type"/>
            <meta content="https://kljstekene.be" property="og:url"/>
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
            <meta content="https://kljstekene.be" name="twitter:url"/>
            <meta content="KLJ Stekene" name="twitter:title"/>
            <meta
                content="Wij zijn een grote groep jongeren en volwassenen die ieder jaar plezier maken"
                name="twitter:description"/>
            <meta
                content="https://kljstekene.be/images/branding/twitter/1920.png"
                name="twitter:image"/>
            <meta content="KLJ Stekene's logo" name="twitter:image:alt"/>
        </Head>
        <Splashscreen/>
        <EventSplash/>
    </Fragment>);
});

const Splashscreen = memo(() => {
    return <Container sx={{marginTop: 2}}>
        <Typography variant={"h2"} component={"h1"}>
            KLJ Stekene
        </Typography>
        <Divider sx={{marginBottom: 2}}/>
        <Grid
            container
            columns={{xs: 1, sm: 3}}
            spacing={2}
            alignItems={"center"}
        >
            {splashPhotos.map((foto, index) => <SplashPhoto key={index} {...foto}/>)}
            <Grid item
                  xs={1}
                  sm={3}>
                <Alert severity={"info"}>
                    Je kan ook foto&apos;s bekijken op onze foto-pagina en/of sociale media!
                </Alert>
            </Grid>
        </Grid>
    </Container>;
});

const SplashPhoto = memo(({photo, alt}) => {
    return <Grid item xs={1} sm={1}>
        <Card>
            <CardMedia>
                <Box sx={{position: "relative", aspectRatio: "16/9"}}>
                    <Image src={photo} alt={alt} layout={"fill"} objectFit={"cover"} priority/>
                </Box>
            </CardMedia>
        </Card>
    </Grid>;
});

const EventSplash = memo(() => {
    const router = useRouter();
    const openOtherEventsPage = useCallback(() => {
        router.push("evenementen");
    }, [router]);

    return <Container sx={{marginTop: 2}}>
        <Typography variant={"h4"} component={"h2"}>
            Evenementen
        </Typography>
        <Divider sx={{marginBottom: 2}}/>
        <Grid container
              columns={{xs: 1, md: 3}}
              spacing={2}>
            {
                upcomingEvents
                    .map((event, index) => <Grid item
                                                 xs={1}
                                                 md={1}
                                                 key={index}>
                        <EventCard {...event}/>
                    </Grid>)
            }
            <Grid item
                  xs={1}
                  md={upcomingEvents.length % 3 !== 0 ? upcomingEvents.length % 3 !== 1 ? 1 : 2 : 3}
            >
                <Card>
                    <CardActionArea disabled={pastEvents.length === 0} onClick={openOtherEventsPage}>
                        <CardHeader title={"Oude evenementen"}
                                    subheader={"Bekijk alle evenementen, ook al zijn deze reeds voorbij!"}/>
                    </CardActionArea>
                </Card>
            </Grid>
        </Grid>
    </Container>;
});

const EventCard = memo(({name, url, images, tickets}) => {
    const router = useRouter();
    const openEventPage = useCallback(() => {
        router.push("evenementen/" + url);
    }, [router, url]);

    return <Card>
        {
            images?.smallBanner &&
            <CardActionArea disabled={!url} onClick={openEventPage}>
                <CardMedia>
                    <Box sx={{position: "relative", aspectRatio: "16/9"}}>
                        <Image src={images.smallBanner} alt={" "} layout={"fill"} objectFit={"cover"}/>
                    </Box>
                </CardMedia>
            </CardActionArea>
        }
        {
            !images?.smallBanner && url &&
            <CardHeader title={name}/>
        }
        <CardActions sx={{overflowX: "auto"}}>
            {
                url &&
                <Button endIcon={<ChevronRight/>}
                        sx={{
                            marginRight: 1,
                            flexShrink:  0,
                            flexGrow:    images?.smallBanner ? 1 : undefined,
                        }}
                        onClick={openEventPage}>
                    Meer info
                </Button>
            }
            {
                !images?.smallBanner && !url &&
                <CardHeader title={name} sx={{marginLeft: -1}}/>
            }
            {
                tickets?.availableOnlineVVK &&
                <IconButton href={tickets.hrefVVK}
                            disabled={!(tickets.startDateVVK < new Date() && new Date() < tickets.endDateVVK)}
                            sx={{marginLeft: "auto"}}>
                    <LocalActivity/>
                </IconButton>
            }
        </CardActions>
        {
            !images?.smallBanner && !url &&
            <CardContent>
                <Typography>
                    Kom later eens terug voor meer info!
                </Typography>
            </CardContent>
        }
    </Card>;
});

Page.displayName = "startpagina";
Splashscreen.displayName = "splashscreen";
SplashPhoto.displayName = "splashphoto";
EventSplash.displayName = "eventsplash";
EventCard.displayName = "eventcard";

export default Page;