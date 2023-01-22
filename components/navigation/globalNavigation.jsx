"use client";

import {Fragment, memo, useCallback, useState} from "react";
import {useRouter as useNavigationRouter} from "next/navigation";
import {AppBar, Box, Button, Container, CssBaseline, Drawer, IconButton, List, ListItemButton, ListItemText, Toolbar, Typography} from "@mui/material";
import Menu from "@mui/icons-material/Menu";
import Close from "@mui/icons-material/Close";

import * as config from "#/kljstekene.config";

const GlobalNavigation = memo(() => {
    const router = useNavigationRouter();
    const goBackToIndex = useCallback(() => router.push("/"), [router]);

    const [isShowingNavDrawer, showNavDrawer] = useState(false);
    const openNavDrawer = () => showNavDrawer(true);
    const closeNavDrawer = () => showNavDrawer(false);

    return <Fragment>
        <CssBaseline/>
        <AppBar position={"sticky"}>
            <Container>
                <Toolbar disableGutters>
                    <Button onClick={goBackToIndex} variant={"outlined"} color={"inherit"} size={"small"}>
                        <Typography
                            variant={"h6"}
                            noWrap
                            component={"div"}
                        >{config.companyInfo.name}</Typography>
                    </Button>
                    <Box sx={{flexGrow: {xs: 1, sm: 0, md: 1}, marginRight: {xs: 0, sm: 2, md: 0}}}/>
                    <Box component={"div"} sx={{display: {xs: "flex", sm: "none"}}}>
                        <IconButton
                            edge={"end"}
                            color={"inherit"}
                            onClick={openNavDrawer}
                        ><Menu/></IconButton>
                    </Box>
                    <Box component={"div"} sx={{display: {xs: "none", sm: "flex"}}}>
                        {config.globalNavigation.map((item, index) => <AppbarItem key={index} {...item}/>)}
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
                {config.globalNavigation.map((item, index) =>
                    <DrawerItem key={index} closeNavigation={closeNavDrawer} {...item}/>)}
            </List>
        </Drawer>
    </Fragment>;
});
GlobalNavigation.displayName = "Global navigation";

const AppbarItem = memo(({displayText, link}) => {
    const router = useNavigationRouter();
    const performNavigate = useCallback(() => router.push(link), [router, link]);
    return <Button onClick={performNavigate} sx={{color: "inherit"}}>{displayText}</Button>;
});
AppbarItem.displayName = "Appbar navigation item";

const DrawerItem = memo(({displayText, link, closeNavigation = () => undefined}) => {
    const router = useNavigationRouter();
    const performNavigate = useCallback(() => {
        closeNavigation();
        router.push(link);
    }, [router, link, closeNavigation]);
    return <ListItemButton onClick={performNavigate}><ListItemText primary={displayText}/></ListItemButton>;
});
DrawerItem.displayName = "Drawer navigation item";

export {GlobalNavigation};
