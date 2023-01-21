import {Fragment, memo, useState} from "react";
import Image from "next/image";

import {Card, CardActions, CardContent, CardMedia, Collapse, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, ListSubheader, Typography} from "@mui/material";
import Mail from "@mui/icons-material/Mail";
import ExpandMore from "@mui/icons-material/ExpandMore";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ChevronRight from "@mui/icons-material/ChevronRight";

const BoardMemberCard = memo(({firstname, lastname, avatar, mail, tasks}) => {
    return <Card>
        <BoardMemmberCardPicture picture={avatar?.src} alt={avatar?.alt}/>
        <BoardMemberCardDetails firstname={firstname} lastname={lastname} isHead={tasks?.includes("Hoofdbestuur")}/>
        <BoardMemberCardSocialsAndTasks mail={mail} tasks={tasks}/>
    </Card>;
});
BoardMemberCard.displayName = "The card for displaying a board member's details";

const BoardMemmberCardPicture = memo(({picture, alt}) => {
    return <Fragment>
        {picture && <CardMedia>
            <div style={{position: 'relative', width: '100%', aspectRatio: "1"}}>
                <Image src={picture} alt={alt} fill quality={25}
                       sizes={"" + "(max-width: 600px) 50vw," + "(max-width: 900px) 70vw," + "100vw"}/>
            </div>
        </CardMedia>}
    </Fragment>;
});
BoardMemmberCardPicture.displayName = "Board member's picture";

const BoardMemberCardDetails = memo(({firstname, lastname, isNew = false, isHead = false}) => {
    return <CardContent>
        <Typography component={"span"} variant={"h5"} gutterBottom>{firstname + " " + lastname}</Typography>
        {isNew && <Typography variant={"body2"}>Nieuw bestuurlid</Typography>}
        {isHead && <Typography variant={"body2"}>Hoofdbestuur</Typography>}
    </CardContent>;
});
BoardMemberCardDetails.displayName = "Boardmember's details";

const BoardMemberCardSocialsAndTasks = memo(({mail, tasks}) => {
    const [isShowingExtra, showExtra] = useState(false);

    if (mail || (tasks && tasks.length !== 0)) {
        return <Fragment>
            <CardActions>
                {mail && <IconButton href={"mailto:" + mail}><Mail/></IconButton>}
                {(mail || (tasks && tasks.length !== 0)) &&
                    <IconButton onClick={() => showExtra(!isShowingExtra)} sx={{marginLeft: "auto"}}>
                        {isShowingExtra ? <ExpandLess/> : <ExpandMore/>}
                    </IconButton>}
            </CardActions>
            {(mail || (tasks && tasks.length !== 0)) &&
                <Collapse in={isShowingExtra}>
                    <List dense>
                        {mail && <ListSubheader sx={{bgcolor: "inherit"}}>Mailadres</ListSubheader>}
                        {mail && <ListItemButton>
                            <ListItemText primary={"Stuur me een mail"}/>
                            <ListItemIcon><ChevronRight/></ListItemIcon>
                        </ListItemButton>}
                        {tasks && tasks.length !== 0 && <ListSubheader>Taken</ListSubheader>}
                        {tasks && tasks.length !== 0 &&
                            tasks.map((item, index) =>
                                <ListItem key={index}><ListItemText primary={item}/></ListItem>)}
                    </List>
                </Collapse>}
        </Fragment>;
    }
});
BoardMemberCardSocialsAndTasks.displayName = "Board member's social media and tasks";

export {BoardMemberCard};