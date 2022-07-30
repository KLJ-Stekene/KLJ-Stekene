import {Fragment, memo} from "react";
import {Card, CardContent, CardHeader, CardMedia, Divider, Grid, Typography} from "@mui/material";
import {sponsors} from "../../config";
import {grey} from "@mui/material/colors";

const Page = memo(() => {
    const minimumSponsorWaarde = 50;
    const smSponsorWaarde = 125;
    const mdSponsorWaarde = 250;
    const lgSponsorWaarde = 500;

    const sponsorsVerwerkt = sponsors
        .map(sponsor => {
            sponsor.sponsoringen = sponsor.sponsoringen
                                          .filter(sponsoring => sponsoring.jaar === new Date().getFullYear())
                                          .filter(sponsoring => sponsoring.verborgen !== true)
                                          .filter(sponsoring => sponsoring.waarde >= minimumSponsorWaarde)
                                          .sort((sponsoring1, sponsoring2) => sponsoring1.waarde - sponsoring2.waarde)
                                          .reverse();
            return sponsor;
        })
        .filter(sponsor => sponsor.sponsoringen.length !== 0)
        .sort((sponsor1, sponsor2) => sponsor1.name - sponsor2.name)
        .reverse()
        .sort((sponsor1, sponsor2) => sponsor1.sponsoringen[0].waarde - sponsor2.sponsoringen[0].waarde)
        .reverse();

    return <Fragment>
        <Typography variant={"h3"} component={"h2"}>
            Sponsors
        </Typography>
        <Divider/>
        <Grid
            container
            columns={12}
            spacing={2}
            sx={{marginTop: 1}}
        >

            {sponsorsVerwerkt.map((sponsor, index) => <Grid
                key={index}
                item
                xs={sponsor.sponsoringen[0].waarde >= lgSponsorWaarde ? 12 : 6}
                sm={sponsor.sponsoringen[0].waarde >= lgSponsorWaarde ? 12 : sponsor.sponsoringen[0].waarde >= mdSponsorWaarde ? 6 : 4}
                md={sponsor.sponsoringen[0].waarde >= lgSponsorWaarde ? 12 : sponsor.sponsoringen[0].waarde >= mdSponsorWaarde ? 6 : sponsor.sponsoringen[0].waarde >= smSponsorWaarde ? 4 : 3}
            >
                <Card>
                    <CardMedia
                        sx={{backgroundColor: grey.A700}}
                        component={"img"}
                        src={sponsor.logo}
                    />
                    <CardHeader subheader={sponsor.name}/>
                </Card>
            </Grid>)}
        </Grid>
        <Card sx={{marginTop: 2}}>
            <CardHeader title={"Huh?"} subheader={"Waarom zo een rare layout van de pagina?"}/>
            <CardContent>
                <Typography variant={"body1"} component={"p"}>
                    Wel... naargelang het bedrag dat wij (KLJ Stekene) ontvangen van de sponsors is de grote op het
                    scherm dat zij hiervoor terug krijgen.
                    Zo krijgt een sponsor, die net iets meer betaald, meer dan de rest.
                </Typography>
            </CardContent>
        </Card>
    </Fragment>;
});

export default Page;