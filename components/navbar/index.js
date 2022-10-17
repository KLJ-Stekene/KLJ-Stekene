import {Fragment, memo, useCallback, useEffect, useState} from "react";
import {AppBar, Avatar, Box, Button, Container, Drawer, IconButton, List, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography} from "@mui/material";
import {ChevronRight, Close, Event, Favorite, Menu} from "@mui/icons-material";
import {red} from "@mui/material/colors";
import {useRouter} from "next/router";
import {upcomingEvents} from "../../kljstekene.config";
import Image from "next/image";

const navbar = memo(() => {
    const [isOpenedNavDrawer, setOpenedNavDrawer] = useState(false);
    const toggleNavDrawer = useCallback(() => {
        setOpenedNavDrawer(!isOpenedNavDrawer);
    }, [isOpenedNavDrawer, setOpenedNavDrawer]);
    const closeNavDrawer = useCallback(() => {
        setOpenedNavDrawer(false);
    }, [setOpenedNavDrawer]);

    const navbarButtons = [{
        text: "Startpagina", icon: undefined, link: "/", color: undefined, disabled: false,
    }, {
        text: "Over ons", icon: undefined, link: "/overons/", color: undefined, disabled: false,
    }, {
        text: "Bestuur", icon: undefined, link: "/bestuur/", color: undefined, disabled: false,
    }, {
        text: "Sponsors", icon: <Favorite/>, link: "/sponsors/", color: red.A400, disabled: true,
    }];

    const router = useRouter();
    useEffect(() => {
        router.events.on("routeChangeStart", () => {
            setOpenedNavDrawer(false);
        });
        return () => {
            router.events.off("routeChangeStart", () => {
                setOpenedNavDrawer(false);
            });
        };
    });

    return <Fragment>
        <AppBar position={"sticky"} sx={{marginBottom: 2}}>
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
                            <Menu/>
                        </IconButton>
                    </Box>
                    <Box component={"div"} sx={{display: {xs: "none", md: "flex"}}}>
                        {navbarButtons
                            .map((button, index) => <NavbarLink key={index} {...button}/>)}
                        <NavbarEvents events={upcomingEvents}/>
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
                {navbarButtons
                    .map((button, index) => <NavdrawerLink key={index} {...button}/>)}
                <NavdrawerEvents events={upcomingEvents}/>
            </List>
        </Drawer>
    </Fragment>;
});

const NavbarLink = memo(({text, icon, link, color, disabled}) => {
    const router = useRouter();
    const openLink = useCallback(() => {
        router.push(link);
    }, [router, link]);

    const [loading, setLoading] = useState(false);
    useEffect(() => {
        router.events.on("routeChangeStart", () => {
            setLoading(true);
        });
        router.events.on("routeChangeComplete", () => {
            setLoading(false);
        });
        router.events.on("routeChangeError", () => {
            setLoading(false);
        });
        return () => {
            router.events.off("routeChangeStart", () => {
                setLoading(true);
            });
            router.events.off("routeChangeComplete", () => {
                setLoading(false);
            });
            router.events.off("routeChangeError", () => {
                setLoading(false);
            });
        };
    }, [router.events, setLoading]);

    return <Button
        startIcon={icon}
        sx={{color: color || "inherit"}}
        disabled={loading || disabled}
        onClick={openLink}
    >
        {text}
    </Button>;
});

const NavdrawerLink = memo(({text, icon, link, color, disabled}) => {
    const router = useRouter();
    const openLink = useCallback(() => {
        router.push(link);
    }, [router, link]);


    const [loading, setLoading] = useState(false);
    useEffect(() => {
        router.events.on("routeChangeStart", () => {
            setLoading(true);
        });
        router.events.on("routeChangeComplete", () => {
            setLoading(false);
        });
        router.events.on("routeChangeComplete", () => {
            setLoading(false);
        });
        return () => {
            router.events.off("routeChangeStart", () => {
                setLoading(true);
            });
            router.events.off("routeChangeComplete", () => {
                setLoading(false);
            });
            router.events.off("routeChangeComplete", () => {
                setLoading(false);
            });
        };
    }, [router.events, setLoading]);


    return <ListItemButton
        onClick={openLink}
        sx={{color: color || "inherit"}}
        disabled={loading || disabled}
    >
        {icon && <ListItemIcon sx={{color: color || "inherit"}}>{icon}</ListItemIcon>}
        {!icon && <ListItemIcon sx={{color: color || "inherit"}}><ChevronRight/></ListItemIcon>}
        {text && <ListItemText primary={text}/>}
    </ListItemButton>;
});

const NavbarEvents = memo(({events}) => {
    const router = useRouter();
    const openEvents = useCallback(() => {
        router.push("/evenementen");
    }, [router]);


    const [loading, setLoading] = useState(false);
    useEffect(() => {
        router.events.on("routeChangeStart", () => {
            setLoading(true);
        });
        router.events.on("routeChangeComplete", () => {
            setLoading(false);
        });
        router.events.on("routeChangeComplete", () => {
            setLoading(false);
        });
        return () => {
            router.events.off("routeChangeStart", () => {
                setLoading(true);
            });
            router.events.off("routeChangeComplete", () => {
                setLoading(false);
            });
            router.events.off("routeChangeComplete", () => {
                setLoading(false);
            });
        };
    }, [router.events, setLoading]);

    if (events.length === 0) return;

    if (events[0].images.profile) {
        return <IconButton onClick={openEvents} disabled={loading} edge={"end"}>
            <Avatar sx={{width: 24, height: 24}}>
                <Image src={events[0].images.profile} loading={"eager"} alt={`${events[0].name} profile picture`}/>
            </Avatar>
        </IconButton>;
    }

    return <IconButton onClick={openEvents} disabled={loading} sx={{color: "inherit"}} edge={"end"}>
        <Event/>
    </IconButton>;
});

const NavdrawerEvents = memo(({events}) => {
    const router = useRouter();
    const openEvents = useCallback(() => {
        router.push("/evenementen");
    }, [router]);


    const [loading, setLoading] = useState(false);
    useEffect(() => {
        router.events.on("routeChangeStart", () => {
            setLoading(true);
        });
        router.events.on("routeChangeComplete", () => {
            setLoading(false);
        });
        router.events.on("routeChangeComplete", () => {
            setLoading(false);
        });
        return () => {
            router.events.off("routeChangeStart", () => {
                setLoading(true);
            });
            router.events.off("routeChangeComplete", () => {
                setLoading(false);
            });
            router.events.off("routeChangeComplete", () => {
                setLoading(false);
            });
        };
    }, [router.events, setLoading]);

    if (events.length === 0) return;

    if (events[0].images.profile) {
        return <ListItemButton onClick={openEvents} disabled={loading}>
            <ListItemIcon>
                <Avatar sx={{width: 24, height: 24}}>
                    <Image src={events[0].images.profile} loading={"lazy"} alt={`${events[0].name} profile picture`}/>
                </Avatar>
            </ListItemIcon>
            <ListItemText primary={"Evenementen"}/>
        </ListItemButton>;
    }

    return <ListItemButton onClick={openEvents} disabled={loading}>
        <ListItemIcon><Event/></ListItemIcon>
        <ListItemText primary={"Evenementen"}/>
    </ListItemButton>;
});

navbar.displayName = "navigatie balk";
NavbarLink.displayName = "navigatielink voor grote schermen";
NavdrawerLink.displayName = "navigatielink voor kleine schermen";
NavbarEvents.displayName = "navigatielink naar evenement voor grote schermen";
NavdrawerEvents.displayName = "navigatielink naar evenement voor kleine schermen";

export default navbar;