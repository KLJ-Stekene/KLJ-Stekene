"use client";

import {memo} from "react";
import {AppBar, Button, Container, IconButton, Toolbar, Typography} from "@mui/material";

import * as config from "#/kljstekene.config";

const GlobalFooter = memo(() => {
    return <AppBar position={"static"} color={"inherit"} elevation={0} enableColorOnDark
                   sx={{background: "transparent", marginTop: "auto", flexShrink: 0}}>
        <Container>
            <Toolbar disableGutters sx={{overflowX: "auto"}}>
                <Copyrights/>
                {config.companyInfo.socialMedia
                       .map((item, index) => <SocialMediaLink key={index} {...item}/>)}
            </Toolbar>
        </Container>
    </AppBar>;
});
GlobalFooter.displayName = "Global footer container";

const Copyrights = memo(() => {
    return <Typography component={"span"} variant={"caption"} sx={{flexGrow: 1, flexShrink: 0}}
    >&copy; KLJ Stekene 2023, by <Button variant={"text"} size={"small"} sx={{px: 0.5}} target={"_blank"}
                                         href={"https://web-4-you.be/"}>WEB4YOU</Button></Typography>;
});
Copyrights.displayName = "Copyrights notice for footer";

const SocialMediaLink = memo(({icon, href}) => {
    return <IconButton href={href} target={"_blank"}>{icon}</IconButton>;
});
SocialMediaLink.displayName = "Social media icon button";

export {GlobalFooter};