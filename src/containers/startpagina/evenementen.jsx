import {Fragment, memo} from "react";
import {Button, Card, CardActionArea, CardActions, CardHeader, CardMedia, Divider, Grid, Typography} from "@mui/material";
import {evenementen} from "../../config";
import {useNavigate} from "react-router-dom";
import {ChevronRight} from "@mui/icons-material";

const Page = memo(() => {
    const navigate = useNavigate();

    return <Fragment>
        <Typography variant={"h4"} component={"h2"}>
            Evenementen
        </Typography>
        <Divider sx={{marginBottom: 2}}/>
        <Grid
            container
            spacing={2}
            columns={{
                xs: 1, md: 3,
            }}
        >
            {evenementen.filter((evenement) => new Date() < evenement.stopDataTime)[0] && <Grid item
                                                                                                xs={1} md={2}
            >
                <Card>
                    <CardActionArea
                        onClick={() => {
                            navigate("/evenement/" + evenementen.filter((evenement) => new Date() < evenement.stopDataTime).sort((evenement1, evenement2) => evenement1.stopDataTime - evenement2.stopDataTime)[0]?.url);
                        }}
                    >
                        <CardMedia
                            component={"img"}
                            src={evenementen.filter((evenement) => new Date() < evenement.stopDataTime).sort((evenement1, evenement2) => evenement1.stopDataTime - evenement2.stopDataTime)[0]?.bannerImage}
                        />
                    </CardActionArea>
                    <CardActions sx={{overflowX: "auto"}}>
                        <Button
                            endIcon={<ChevronRight/>}
                            onClick={() => {
                                navigate("/evenement/" + evenementen.filter((evenement) => new Date() < evenement.stopDataTime).sort((evenement1, evenement2) => evenement1.stopDataTime - evenement2.stopDataTime)[0]?.url);
                            }}
                            sx={{marginRight: 1, flexShrink: 0, flexGrow: 1}}
                        >
                            Meer info
                        </Button>
                        {evenementen.filter((evenement) => new Date() < evenement.stopDataTime).sort((evenement1, evenement2) => evenement1.stopDataTime - evenement2.stopDataTime)[0]?.location.locationMapLink.href &&
                            <Button
                                startIcon={evenementen.filter((evenement) => new Date() < evenement.stopDataTime).sort((evenement1, evenement2) => evenement1.stopDataTime - evenement2.stopDataTime)[0]?.location.locationMapLink.icon}
                                sx={{
                                    color:      evenementen.filter((evenement) => new Date() < evenement.stopDataTime).sort((evenement1, evenement2) => evenement1.stopDataTime - evenement2.stopDataTime)[0]?.location.locationMapLink.color,
                                    flexShrink: 0,
                                }}
                                href={evenementen.filter((evenement) => new Date() < evenement.stopDataTime).sort((evenement1, evenement2) => evenement1.stopDataTime - evenement2.stopDataTime)[0]?.location.locationMapLink.href}
                                target={evenementen.filter((evenement) => new Date() < evenement.stopDataTime).sort((evenement1, evenement2) => evenement1.stopDataTime - evenement2.stopDataTime)[0]?.location.locationMapLink.target}
                                disabled={evenementen.filter((evenement) => new Date() < evenement.stopDataTime).sort((evenement1, evenement2) => evenement1.stopDataTime - evenement2.stopDataTime)[0]?.location.locationMapLink.disabled}
                            >
                                {evenementen.filter((evenement) => new Date() < evenement.stopDataTime).sort((evenement1, evenement2) => evenement1.stopDataTime - evenement2.stopDataTime)[0]?.location.locationMapLink.text}
                            </Button>}
                        {evenementen
                            .filter((evenement) => new Date() < evenement.stopDataTime)
                            .sort((evenement1, evenement2) => evenement1.stopDataTime - evenement2.stopDataTime)[0]
                            ?.links
                            .map((link, index) => <Button
                                key={index}
                                startIcon={link.icon}
                                sx={{
                                    color: link.color, flexShrink: 0,
                                }}
                                href={link.href}
                                target={link.target}
                                disabled={link.disabled}
                            >
                                {link.text}
                            </Button>)}
                    </CardActions>
                </Card>
            </Grid>}
            <Grid item
                  xs={1} md={evenementen.filter((evenement) => new Date() < evenement.stopDataTime)[0] ? 1 : 3}
            >
                <Card>
                    <CardActionArea
                        onClick={() => {
                            navigate("/evenement/");
                        }}
                    >
                        <CardHeader title={"Alle evenementen"}
                                    subheader={"Bekijk alle evenementen, ook al zijn ze reeds voorbij!"}/>
                    </CardActionArea>
                </Card>
            </Grid>
        </Grid>
    </Fragment>;
});

export default Page;