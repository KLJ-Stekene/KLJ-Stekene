import Head from "next/head";
import {Button, Card, CardActions, CardContent, CardHeader, Container, Divider, Grid, Typography} from "@mui/material";
import {memo} from "react";
import {infoAboutKLJStekene} from "../../kljstekene.config";

const Page = memo(() => {
    return (<Container>
        <Head>
            <meta charSet="UTF-8"/>
            <meta
                content="width=device-width, user-scalable=yes, initial-scale=1.0, maximum-scale=5.0, minimum-scale=1.0"
                name="viewport"/>
            <meta content="ie=edge" httpEquiv="X-UA-Compatible"/>
            <link href="https://kljstekene.be/overons/" rel="canonical"/>

            <title>Over ons</title>
            <meta content="Alle info over KLJ Stekene" name="description"/>
            <meta content="nl-BE" name="language"/>
            <meta content="all,noarchive,noimageindex" name="robots"/>
            <meta content="KLJ, Stekene, Jeugdbeweging" name="keywords"/>
            <meta content="#1876d1" media="(prefers-color-scheme: light)" name="theme-color"/>
            <meta content="#272727" media="(prefers-color-scheme: dark)" name="theme-color"/>


            <meta content="KLJ Stekene" name="apple-mobile-web-app-title"/>
            <meta content="no" name="apple-mobile-web-app-capable"/>
            <meta content="default" name="apple-mobile-web-app-status-bar-style"/>
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


            <meta content="Over ons" property="og:title"/>
            <meta
                content="Wij zijn een grote groep jongeren en volwassenen die ieder jaar plezier maken"
                property="og:description"/>
            <meta content="website" property="og:type"/>
            <meta content="https://kljstekene.be/overons" property="og:url"/>
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
            <meta content="https://kljstekene.be/overons" name="twitter:url"/>
            <meta content="Over ons" name="twitter:title"/>
            <meta
                content="Wij zijn een grote groep jongeren en volwassenen die ieder jaar plezier maken"
                name="twitter:description"/>
            <meta
                content="https://kljstekene.be/images/branding/twitter/1920.png"
                name="twitter:image"/>
            <meta content="KLJ Stekene's logo" name="twitter:image:alt"/>
        </Head>
        <Typography variant={"h3"} component={"h2"}>
            Over ons
        </Typography>
        <Divider sx={{marginBottom: 2}}/>
        <Grid
            container
            spacing={2}
            columns={{
                xs: 1, sm: 2, md: 3,
            }}
        >
            {infoAboutKLJStekene
                .map((info, index) => {
                    return <Grid item key={index} {...info.gridSize}>
                        <Card>
                            {info?.title && <CardHeader title={info.title}/>}
                            {info?.specialMedia}
                            {info?.text && <CardContent>
                                <Typography variant={"body1"}>
                                    {info.text}
                                </Typography>
                            </CardContent>}
                            {info?.buttons && info.buttons.length > 0 && <CardActions>
                                {info.buttons
                                     .map((button, index) => {
                                         return <Button disabled={button.disabled}
                                                        target={"_blank"}
                                                        href={button.href}
                                                        key={index}>
                                             {button.text}
                                         </Button>;
                                     })}
                            </CardActions>}
                        </Card>
                    </Grid>;
                })}
        </Grid>
    </Container>);
});

Page.displayName = "overons";

export default Page;
