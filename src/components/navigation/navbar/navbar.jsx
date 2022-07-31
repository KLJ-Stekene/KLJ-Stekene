import {Fragment, memo, useCallback, useEffect, useState} from "react";
import {AppBar, Avatar, Box, Button, Container, Drawer, IconButton, List, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography} from "@mui/material";
import {ChevronRight, Close, Menu} from "@mui/icons-material";
import {evenementen, navbarButtons} from "../../../config";
import {useNavigate} from "react-router-dom";

const navbar = memo(() => {
    const [isOpenedNavDrawer, setOpenedNavDrawer] = useState(false);
    const toggleNavDrawer = useCallback(() => {
        setOpenedNavDrawer(!isOpenedNavDrawer);
    }, [isOpenedNavDrawer, setOpenedNavDrawer]);
    const closeNavDrawer = useCallback(() => {
        setOpenedNavDrawer(false);
    }, [setOpenedNavDrawer]);

    const navigate = useNavigate();
    useEffect(() => {
        closeNavDrawer();
    }, [navigate, closeNavDrawer]);

    return <Fragment>
        <AppBar position={"sticky"}>
            <Container>
                <Toolbar disableGutters>
                    <Typography
                        variant={"h6"}
                        noWrap
                        component={"div"}
                        sx={{flexGrow: 1}}
                    >
                        KLJ Stekene
                    </Typography>
                    <Box component={"div"} sx={{display: {xs: "flex", md: "none"}}}>
                        <IconButton
                            edge={"end"}
                            color={"inherit"}
                            onClick={toggleNavDrawer}
                        >
                            {!isOpenedNavDrawer ? <Menu/> : <Close/>}
                        </IconButton>
                    </Box>
                    <Box component={"div"} sx={{display: {xs: "none", md: "flex"}}}>
                        {navbarButtons.map((button, index) => <NavbarLink key={index} {...button}/>)}
                        {evenementen.filter((evenement) => new Date() < evenement.stopDataTime)[0] && <IconButton
                            onClick={() => {
                                navigate("/evenement");
                            }}
                        >
                            <Avatar variant={"circular"} sx={{width: 25, height: 25}}
                                    src={evenementen.filter((evenement) => new Date() < evenement.stopDataTime).sort((evenement1, evenement2) => evenement1.stopDataTime - evenement2.stopDataTime)[0]?.profileImage}/>
                        </IconButton>}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
        <Drawer
            keepMounted
            anchor={"right"}
            open={isOpenedNavDrawer}
            onClose={closeNavDrawer}
        >
            <Toolbar>
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
                {navbarButtons.map((button, index) => <NavdrawerLink key={index} {...button}/>)}
                {evenementen.filter((evenement) => new Date() < evenement.stopDataTime)[0] && <NavdrawerLink
                    text={"Evenementen"}
                    icon={<Avatar variant={"circular"} sx={{width: 25, height: 25}}
                                  src={evenementen.filter((evenement) => new Date() < evenement.stopDataTime).sort((evenement1, evenement2) => evenement1.stopDataTime - evenement2.stopDataTime)[0]?.profileImage}/>}
                    link={"/evenement"}
                    disabled={false}
                />}
            </List>
        </Drawer>
    </Fragment>;
});

const NavbarLink = memo(({text, icon, link, color, disabled}) => {
    const navigate = useNavigate();

    return <Button
        startIcon={icon}
        onClick={() => {
            navigate(link);
        }}
        sx={{color: color || "inherit"}}
        disabled={disabled}
    >
        {text}
    </Button>;
});

const NavdrawerLink = memo(({text, icon, link, color, disabled}) => {
    const navigate = useNavigate();

    return <ListItemButton
        onClick={() => {
            navigate(link);
        }}
        sx={{color: color || "inherit"}}
        disabled={disabled}
    >
        {icon && <ListItemIcon sx={{color: color || "inherit"}}>{icon}</ListItemIcon>}
        {!icon && <ListItemIcon sx={{color: color || "inherit"}}><ChevronRight/></ListItemIcon>}
        {text && <ListItemText primary={text}/>}
    </ListItemButton>;
});

export default navbar;