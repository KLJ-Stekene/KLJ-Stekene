import {Fragment, memo} from "react";
import {Button, Card, CardActions, CardContent, CardHeader, CardMedia, Grid, IconButton, Typography} from "@mui/material";
import {LocalActivity} from "@mui/icons-material";

const Page = memo(({evenement}) => {
    return <Fragment>
        <Typography component={"h1"} variant={"h3"}>
            {evenement.fullName}
        </Typography>
        <Grid
            container
            spacing={2}
            columns={{
                xs: 1, md: 3,
            }}
        >
            <Grid item xs={1} md={3}>
                <Card>
                    <CardMedia
                        component={"img"}
                        src={evenement.largeBannerImage}
                        alt={""}
                    />
                </Card>
            </Grid>
            <Grid item xs={1} md={1}>
                <Card>
                    <CardHeader
                        title={"Inkomprijs"}
                        action={<IconButton href={evenement.links.filter(link => link.isTicketLink === true)[0].href}
                                            target={evenement.links.filter(link => link.isTicketLink === true)[0].target}>
                            <LocalActivity/>
                        </IconButton>}
                    />
                    <CardContent>
                        {!(evenement.voorverkoopPrijs === evenement.aanDeKassaPrijs) && <Fragment>
                            <Typography component={"p"} variant={"body1"}>
                                Prijs voorverkoop: €{evenement.voorverkoopPrijs}
                            </Typography>
                            <Typography component={"p"} variant={"body1"}>
                                Prijs aan de kassa: €{evenement.aanDeKassaPrijs}
                            </Typography>
                        </Fragment>}
                        {evenement.voorverkoopPrijs === evenement.aanDeKassaPrijs &&
                            <Typography component={"p"} variant={"body1"}>
                                Voorverkoop en aan de kassa: €{evenement.voorverkoopPrijs}
                            </Typography>}
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={1} md={1}>
                <Card>
                    <CardHeader
                        title={"Wanneer?"}
                    />
                    <CardContent>
                        <Typography component={"p"} variant={"body1"}>
                            Van {evenement.startDateTime.toLocaleString("nl-BE", {
                            dateStyle: "long", timeStyle: "short",
                        })}
                        </Typography>
                        <Typography component={"p"} variant={"body1"}>
                            Tot {evenement.stopDataTime.toLocaleString("nl-BE", {
                            dateStyle: "long", timeStyle: "short",
                        })}
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={1} md={1}>
                <Card>
                    <CardHeader
                        title={"Locatie"}
                    />
                    <CardContent>
                        <Typography component={"p"} variant={"body1"}>
                            {evenement.location.name}:
                        </Typography>
                        <Typography component={"p"} variant={"body1"}>
                            {evenement.location.description}
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={1} md={3}>
                <Card>
                    <CardMedia
                        component={"iframe"} loading={"lazy"} allowFullScreen
                        sx={{border: 0, height: "45vh"}} src={evenement.location.locationMapUrl}
                    />
                </Card>
            </Grid>
            <Grid item xs={1} md={3}>
                <Card>
                    <CardActions sx={{overflowX: "auto"}}>
                        {evenement.location.locationMapLink.href && <Button
                            startIcon={evenement.location.locationMapLink.icon}
                            sx={{color: evenement.location.locationMapLink.color, flexShrink: 0}}
                            href={evenement.location.locationMapLink.href}
                            target={evenement.location.locationMapLink.target}
                            disabled={evenement.location.locationMapLink.disabled}
                        >
                            {evenement.location.locationMapLink.text}
                        </Button>}
                        {evenement.links
                                  .map((link, index) => <Button
                                      key={index}
                                      startIcon={link.icon}
                                      sx={{color: link.color, flexShrink: 0}}
                                      href={link.href}
                                      target={link.target}
                                      disabled={link.disabled}
                                  >
                                      {link.text}
                                  </Button>)}
                    </CardActions>
                </Card>
            </Grid>
        </Grid>
    </Fragment>;
});

export default Page;
