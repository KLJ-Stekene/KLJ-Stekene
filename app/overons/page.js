"use client";

import {Button, Card, CardActions, CardContent, CardHeader, Container, Grid, Typography} from "@mui/material";
import {memo} from "react";

import * as config from "#/kljstekene.config";

export default function Page() {
    return <Container sx={{marginTop: 2}}>
        <Title/>
        <Main/>
    </Container>;
}

const Title = memo(() => {
    return <Typography variant={"h3"} component={"h2"}>{config.pageContent.overons.title}</Typography>;
});
Title.displayName = "Pagetitle";

const Main = memo(() => {
    return <Grid container spacing={2} columns={{xs: 1, sm: 2, md: 3}}>
        {config.companyInfo.aboutUs.map((info, index) =>
            <Grid item key={index} {...info.gridSize}>
                <InfoCard {...info}/>
            </Grid>)
        }
    </Grid>;
});
Main.displayName = "Main pagesection";

const InfoCard = memo(({title, text, media, buttons}) => {
    return <Card>
        {title && <CardHeader title={title}/>}
        {media}
        {text && <CardContent><Typography variant={"body1"}>{text}</Typography></CardContent>}
        {buttons && buttons.length > 0 &&
            <CardActions>
                {buttons.map((button, index) => <InfoCardButton key={index} {...button}/>)}
            </CardActions>
        }
    </Card>;
});
InfoCard.displayName = "Infocard containing text and other content";

const InfoCardButton = memo(({text, href}) => {
    return <Button href={href} target={"_blank"}>{text}</Button>;
});
InfoCardButton.displayName = "Infocard's button";