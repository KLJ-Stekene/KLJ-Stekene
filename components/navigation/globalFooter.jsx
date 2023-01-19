"use client";

import {memo} from "react";
import {Button, Container, Toolbar, Typography} from "@mui/material";

const GlobalFooter = memo(() => {
    return <Container>
        <Toolbar disableGutters>
            <Copyrights/>
        </Toolbar>
    </Container>;
});
GlobalFooter.displayName = "Global footer container";

const Copyrights = memo(() => {
    return <Typography>&copy; <Button variant={"text"} size={"small"} sx={{px: 0.5}}>WEB4YOU</Button> 2023</Typography>;
});
Copyrights.displayName = "Copyrights notice for footer";

export {GlobalFooter};