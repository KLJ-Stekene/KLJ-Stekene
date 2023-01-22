"use client";

import {Fragment, memo} from "react";
import Image from "next/image";
import {Card, CardMedia, Container, Grid, Typography} from "@mui/material";
import {BoardMemberCard} from "#/components/board/boardMemberCard";

import * as config from "#/kljstekene.config";

export default function Page() {
    return <Container sx={{marginTop: 2}}>
        <Title/>
        <Main/>
    </Container>;
}

const Title = memo(() => {
    return <Typography variant={"h3"} component={"h2"}>{config.pageContent.bestuur.title}</Typography>;
});
Title.displayName = "Pagetitle";

const Main = memo(() => {
    return <Fragment>
        <Card sx={{marginBottom: 2}}>
            <CardMedia>
                <div style={{position: 'relative', width: '100%', aspectRatio: "16/9"}}>
                    <Image src={config.pageContent.bestuur.bannerImage.src}
                           alt={config.pageContent.bestuur.bannerImage.alt}
                           fill quality={25} priority/>
                </div>
            </CardMedia>
        </Card>
        <Grid container spacing={2} columns={{xs: 2, sm: 4, md: 6}}>
            {config.companyInfo.boardMembers.map((member, index) =>
                <Grid item xs={2} sm={2} md={2} key={index}>
                    <BoardMemberCard {...member}/>
                </Grid>)
            }
        </Grid>
    </Fragment>;
});
Main.displayName = "Main pagesection";