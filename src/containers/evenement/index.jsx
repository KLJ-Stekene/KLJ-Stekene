import {Fragment, memo} from "react";
import {Avatar, Card, CardActionArea, CardHeader, Divider, Stack, Typography} from "@mui/material";
import {evenementen} from "../../config";
import {useNavigate} from "react-router-dom";

const Page = memo(() => {
    const verwerkteEvenementen = evenementen
        .sort((evenement1, evenement2) => evenement1.startDateTime - evenement2.startDateTime);

    return <Fragment>
        <Typography variant={"h3"} component={"h2"}>
            Evenementen
        </Typography>
        <Divider/>
        <Stack spacing={2} sx={{marginTop: 2}}>
            {verwerkteEvenementen.map((evenement, index) => <EvenementCard key={index} {...evenement}/>)}
            <Typography variant={"body1"} component={"p"}>
                Deze pagina is nog aan te vullen, niet alle evenementen staan hier direct/nu al op!
            </Typography>
        </Stack>
    </Fragment>;
});

const EvenementCard = memo(({fullName, url, startDateTime, stopDataTime, profileImage}) => {
    const navigate = useNavigate();

    return <Card variant={"outlined"}>
        <CardActionArea onClick={() => {
            navigate("./" + url);
        }}>
            <CardHeader
                title={fullName}
                subheader={"Van " + startDateTime.toLocaleString("nl-BE", {
                    dateStyle: "long", timeStyle: "short",
                }) + " tot " + stopDataTime.toLocaleString("nl-BE", {
                    dateStyle: "long", timeStyle: "short",
                })}
                avatar={
                    <Avatar src={profileImage}/>
                }
            />
        </CardActionArea>
    </Card>;
});

export default Page;