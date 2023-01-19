"use client";

import {Fragment, memo, useState} from "react";
import {AppBar, Box, Button, Container, CssBaseline, Drawer, IconButton, List, ListItemButton, ListItemText, Toolbar, Typography} from "@mui/material";
import Menu from "@mui/icons-material/Menu";
import Close from "@mui/icons-material/Close";
import {useRouter as useNavigationRouter} from "next/navigation";

const navigation = [
    {
        displayText: "Startpagina",
        link:        "/",
        links:       undefined,
    },
    {
        displayText: "Over ons",
        link:        "/overons",
        links:       undefined,
    },
    {
        displayText: "Bestuur",
        link:        "/bestuur",
        links:       undefined,
    },
    {
        displayText: "Sponsors",
        link:        "/sponsors",
        links:       undefined,
    },
];

const GlobalNavigation = memo(() => {
    const [isShowingNavDrawer, showNavDrawer] = useState(false);
    const openNavDrawer = () => showNavDrawer(true);
    const closeNavDrawer = () => showNavDrawer(false);

    return <Fragment>
        <CssBaseline/>
        <AppBar position={"sticky"}>
            <Container>
                <Toolbar disableGutters>
                    <Typography
                        variant={"h6"}
                        noWrap
                        component={"div"}
                        sx={{flexGrow: {xs: 1, sm: 0, md: 1}, marginRight: {xs: 0, sm: 4, md: 0}}}
                    >KLJ Stekene</Typography>
                    <Box component={"div"} sx={{display: {xs: "flex", sm: "none"}}}>
                        <IconButton
                            edge={"end"}
                            color={"inherit"}
                            onClick={openNavDrawer}
                        ><Menu/></IconButton>
                    </Box>
                    <Box component={"div"} sx={{display: {xs: "none", sm: "flex"}}}>
                        {navigation.map((item, index) => <AppbarItem key={index} {...item}/>)}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
        <Drawer
            anchor={"left"}
            open={isShowingNavDrawer}
            onClose={closeNavDrawer}
        >
            <Toolbar sx={{width: "100vw"}}>
                <Typography
                    variant={"h6"}
                    noWrap
                    component={"div"}
                    sx={{flexGrow: 1}}
                >
                    KLJ Stekene
                </Typography>
                <IconButton
                    edge={"end"}
                    color={"inherit"}
                    onClick={closeNavDrawer}
                >
                    <Close/>
                </IconButton>
            </Toolbar>
            <List dense>
                {navigation.map((item, index) => <DrawerItem key={index} closeNavigation={closeNavDrawer} {...item}/>)}
            </List>
        </Drawer>
    </Fragment>;
});
GlobalNavigation.displayName = "Global navigation";

const AppbarItem = memo(({displayText, link}) => {
    const router = useNavigationRouter();
    return <Button onClick={() => router.push(link)} sx={{color: "inherit"}}>{displayText}</Button>;
});
AppbarItem.displayName = "Appbar navigation item";

const DrawerItem = memo(({displayText, link, closeNavigation = () => undefined}) => {
    const router = useNavigationRouter();
    return <ListItemButton onClick={() => {
        closeNavigation();
        router.push(link);
    }}><ListItemText primary={displayText}/></ListItemButton>;
});
DrawerItem.displayName = "Drawer navigation item";

export {GlobalNavigation};
