"use client";

import {memo} from "react";
import Image from "next/image";
import {Alert, AlertTitle, Card, CardMedia, Container, Grid, Stack, Typography} from "@mui/material";

import * as config from "#/kljstekene.config";

export default function Page() {
    return <Container sx={{marginTop: {xs: 2, md: 8, xl: 12}}}>
        <Stack direction={"column"} spacing={2}>
            <HeroSection/>
            <ErrorMessage text={config.pageContent.index.errorMessage}/>
        </Stack>
    </Container>;
}

const HeroSection = memo(() => {
    return <Grid container spacing={2} columns={{xs: 1, md: 2, lg: 6}} alignItems="center">
        <Grid item xs={1} md={1} lg={2}>
            <Typography variant={"h3"} component={"h1"}>{config.pageContent.index.title}</Typography>
            <Typography variant={"subtitle1"} component={"span"}>{config.pageContent.index.subtitle}</Typography>
        </Grid>
        <Grid item xs={1} md={1} lg={4}>
            <Card>
                <CardMedia>
                    <div style={{position: 'relative', width: '100%', aspectRatio: "16/9"}}>
                        <Image src={config.pageContent.index.bannerImage.src}
                               alt={config.pageContent.index.bannerImage.alt}
                               fill quality={25} priority/>
                    </div>
                </CardMedia>
            </Card>
        </Grid>
    </Grid>;
});
HeroSection.displayName = "Page hero";

const ErrorMessage = memo(({text}) => {
    if (text) {
        return <Alert variant={"filled"} severity={"error"}>
            <AlertTitle>Belangerijk!</AlertTitle>
            {text}
        </Alert>;
    }
});
ErrorMessage.displayName = "Important notice";