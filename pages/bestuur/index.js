import bestuursFoto from "/public/img/bestuur/bestuur2022.JPG";

import Head from "next/head";
import Image from "next/legacy/image";
import {Fragment, memo, useCallback, useState} from "react";
import {Box, Card, CardActions, CardContent, CardMedia, Collapse, Container, Divider, Grid, IconButton, List, ListItem, ListItemButton, ListItemText, ListSubheader, Stack, Typography} from "@mui/material";
import {ExpandLess, ExpandMore, Mail} from "@mui/icons-material";
import {bestuur, bestuurstaken} from "/kljstekene.config";


const Page = memo(() => {
    return <Container>
        <Head>
            <meta charSet="UTF-8"/>
            <meta
                content="width=device-width, user-scalable=yes, initial-scale=1.0, maximum-scale=5.0, minimum-scale=1.0"
                name="viewport"/>
            <meta content="ie=edge" httpEquiv="X-UA-Compatible"/>
            <link href="https://kljstekene.be/bestuur/" rel="canonical"/>

            <title>Ons bestuur</title>
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


            <meta content="Ons bestuur" property="og:title"/>
            <meta
                content="Dit is ons bestuur! De mensen die het een beetje bij elkaar houden."
                property="og:description"/>
            <meta content="website" property="og:type"/>
            <meta content="https://kljstekene.be/bestuur/" property="og:url"/>
            <meta content="nl_BE" property="og:locale"/>
            <meta content="KLJ Stekene" property="og:site_name"/>

            <meta content="https://kljstekene.be/img/bestuur/bestuur2022.JPG"
                  property="og:image"/>
            <meta content="https://kljstekene.be/img/bestuur/bestuur2022.JPG"
                  property="og:image:secure_url"/>
            <meta content="image/png" property="og:image:type"/>
            <meta content="5581" property="og:image:width"/>
            <meta content="3139" property="og:image:height"/>
            <meta content="KLJ Stekene's bestuur" property="og:image:alt"/>


            <meta content="summary" name="twitter:card"/>
            <meta content="@JensPenneman" name="twitter:site"/>
            <meta content="@JensPenneman" name="twitter:creator"/>
            <meta content="https://kljstekene.be/bestuur" name="twitter:url"/>
            <meta content="Bestuur" name="twitter:title"/>
            <meta
                content="Wij zijn een grote groep jongeren en volwassenen die ieder jaar plezier maken"
                name="twitter:description"/>
            <meta
                content="https://kljstekene.be/img/branding/twitter/1920.png"
                name="twitter:image"/>
            <meta content="KLJ Stekene's logo" name="twitter:image:alt"/>
        </Head>
        <Typography variant={"h3"} component={"h2"}>
            Ons bestuur
        </Typography>
        <Divider sx={{marginBottom: 2}}/>
        <Card sx={{marginBottom: 2}}>
            <CardMedia>
                <Box sx={{position: "relative", aspectRatio: {xs: "16/9", sm: "22/9"}}}>
                    <Image src={bestuursFoto} alt={"groepsfoto van het bestuur van KLJ Stekene"} layout={"fill"}
                           objectFit={"cover"} priority loading={"eager"}/>
                </Box>
            </CardMedia>
        </Card>
        <Grid container
              columns={{xs: 1, sm: 2}}
              spacing={2}>
            {bestuur
                .filter((bestuurslid) => bestuurslid.tasks.includes(bestuurstaken.HB))
                .map((bestuurslid, index) => <Grid item key={index} xs={1} sm={1} md={1}>
                    <Bestuurscard {...bestuurslid}/>
                </Grid>)}
        </Grid>
        <Grid container
              columns={{xs: 1, sm: 2, md: 3}}
              spacing={2}
              sx={{marginTop: 1}}>
            {bestuur
                .filter((bestuurslid) => !bestuurslid.tasks.includes(bestuurstaken.HB))
                .map((bestuurslid, index) => <Grid item key={index} xs={1} sm={1} md={1}>
                    <Bestuurscard {...bestuurslid}/>
                </Grid>)}
        </Grid>
    </Container>;
});


const Bestuurscard = memo(({
                               firstName, lastName, mail, tasks, startDate, avatar, socialMedia,
                           }) => {
    const [showExtraInfo, setShowExtraInfo] = useState(!(avatar && avatar.src));
    const toggleShowExtraInfo = useCallback(() => {
        setShowExtraInfo(!showExtraInfo);
    }, [showExtraInfo, setShowExtraInfo]);

    return <Card>
        {avatar && avatar.src && <CardMedia>
            <Box sx={{position: "relative", aspectRatio: "1/1"}}>
                <Image src={avatar.src} alt={avatar.alt} layout={"fill"} objectFit={"cover"} loading={"lazy"}/>
            </Box>
        </CardMedia>}
        <CardContent>
            <Stack direction={"column"} alignItems={"left"}>
                <Typography component={"span"} variant={"h5"} noWrap>
                    <strong>{firstName + " " + lastName}</strong>
                </Typography>
                {tasks.includes(bestuurstaken.HB) &&
                    <Typography component={"span"} variant={"subtitle1"} noWrap>Hoofdbestuur</Typography>}
                {new Date().setFullYear(new Date().getFullYear() - 1) < startDate &&
                    <Typography component={"span"} variant={"subtitle1"} noWrap>Nieuw bestuur</Typography>}
            </Stack>
        </CardContent>
        <CardActions>
            <Stack direction={"row"} sx={{width: "100%"}}>
                <IconButton href={mail && ("mailto:" + mail)} disabled={!mail}>
                    <Mail/>
                </IconButton>
                {
                    socialMedia?.map((socialMediaLink, index) => <IconButton key={index}
                                                                             href={socialMediaLink.href}>{socialMediaLink.icon}</IconButton>)
                }
                <IconButton sx={{marginLeft: "auto"}} onClick={toggleShowExtraInfo}>
                    {showExtraInfo ? <ExpandLess/> : <ExpandMore/>}
                </IconButton>
            </Stack>
        </CardActions>
        <Collapse in={showExtraInfo}>
            <CardContent>
                <List dense>
                    <Divider/>
                    <ListSubheader sx={{bgcolor: "inherit"}} disableGutters>Mailadres</ListSubheader>
                    <ListItemButton divider={tasks.filter((task) => task !== bestuurstaken.HB).length !== 0}
                                    component={"a"}
                                    href={mail && ("mailto:" + mail)}
                                    disabled={!mail}>
                        <ListItemText primary={mail} secondary={"Stuur " + firstName + " een mail"}/>
                    </ListItemButton>
                    {tasks && tasks.filter((task) => task !== bestuurstaken.HB).length !== 0 && <Fragment>
                        <ListSubheader sx={{bgcolor: "inherit"}} disableGutters>
                            {tasks.includes(bestuurstaken.HB) && "Extra"} {tasks.includes(bestuurstaken.HB) ? "t" : "T"}{tasks.filter((task) => task !== bestuurstaken.HB).length !== 1 ? "aken" : "aak"}
                        </ListSubheader>
                        {
                            tasks
                                .filter((task) => task !== bestuurstaken.HB)
                                .map((task, index) => <ListItem key={index}>
                                    <ListItemText primary={task.name}/>
                                </ListItem>)
                        }
                    </Fragment>}
                </List>
            </CardContent>
        </Collapse>
    </Card>;
});

Page.displayName = "bestuur";
Bestuurscard.displayName = "bestuurscard";

export default Page;
