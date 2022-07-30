import {Fragment, memo, useCallback, useState} from "react";
import {Card, CardActions, CardContent, CardMedia, Collapse, Divider, IconButton, List, ListItem, ListItemButton, ListItemText, ListSubheader, Stack, Typography} from "@mui/material";
import {ExpandLess, ExpandMore, Mail} from "@mui/icons-material";

const bestuurscard = memo(({
                               firstName = "",
                               lastName = "",
                               isHoofdbestuur = false,
                               isNew = false,
                               mail = "",
                               socialMedia = [],
                               taken = [],
                               img,
                           }) => {
    const [showExtraInfo, setShowExtraInfo] = useState(false);
    const toggleShowExtraInfo = useCallback(() => {
        setShowExtraInfo(!showExtraInfo);
    }, [showExtraInfo, setShowExtraInfo]);

    return (<Card>
        {
            img &&
            <CardMedia component={"img"} src={img.image} alt={img.alt}/>
        }
        <CardContent>
            <Stack direction={"column"} alignItems={"left"}>
                <Typography component={"span"} variant={"h5"} noWrap>
                    <strong>{firstName + " " + lastName}</strong>
                </Typography>
                {
                    isHoofdbestuur &&
                    <Typography component={"span"} variant={"subtitle1"} noWrap>Hoofdbestuur</Typography>
                }
                {
                    isNew &&
                    <Typography component={"span"} variant={"subtitle1"} noWrap>Nieuw bestuurslid</Typography>
                }
            </Stack>
        </CardContent>
        <CardActions>
            <Stack direction={"row"} sx={{width: "100%"}}>
                <IconButton href={mail && ("mailto:" + mail)} disabled={!mail}>
                    <Mail/>
                </IconButton>
                {
                    socialMedia
                        .map(button => {
                            return (<IconButton href={button.href} target={"_blank"} key={button.name}>
                                {button.icon}
                            </IconButton>);
                        })
                }
                <IconButton sx={{marginLeft: "auto"}} onClick={toggleShowExtraInfo}>
                    {showExtraInfo ? <ExpandLess/> : <ExpandMore/>}
                </IconButton>
            </Stack>
        </CardActions>
        <Collapse in={showExtraInfo}>
            <CardContent>
                <List
                    dense
                >
                    <Divider/>
                    <ListSubheader sx={{bgcolor: "inherit"}} disableGutters>Mailadres</ListSubheader>
                    <ListItemButton
                        divider={taken.length !== 0}
                        component={"a"}
                        href={mail && ("mailto:" + mail)}
                        disabled={!mail}
                    >
                        <ListItemText primary={mail} secondary={"Stuur " + firstName + " een mail"}/>
                    </ListItemButton>
                    {
                        taken && taken.length !== 0 &&
                        <Fragment>
                            <ListSubheader sx={{bgcolor: "inherit"}} disableGutters>
                                {isHoofdbestuur && "Extra"} {isHoofdbestuur ? "t" : "T"}{taken.length !== 1 ? "aken" : "aak"}
                            </ListSubheader>
                            {
                                taken.map(taak => {
                                    return (<ListItem key={taak}>
                                        <ListItemText primary={taak}/>
                                    </ListItem>);
                                })
                            }
                        </Fragment>
                    }
                </List>
            </CardContent>
        </Collapse>
    </Card>);
});

export default bestuurscard;