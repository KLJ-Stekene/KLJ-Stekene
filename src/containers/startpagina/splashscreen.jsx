import Sportfeest19Foto from "../../img/events/2019Sportfeest.jpg";
import Sportfeest21Foto from "../../img/events/2021Sportfeest.jpg";
import WeekendGroepsfoto2022 from "../../img/events/2022Weekend.JPEG";

import {Fragment, memo} from "react";
import {Alert, Button, Card, CardMedia, Divider, Grid, Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {ChevronRight} from "@mui/icons-material";


const Page = memo(() => {
    const navigate = useNavigate();

    return <Fragment>
        <Typography variant={"h2"} component={"h1"}>
            KLJ Stekene
        </Typography>
        <Divider sx={{marginBottom: 2}}/>
        <Grid
            container
            columns={{xs: 1, sm: 3}}
            spacing={2}
            alignItems={"center"}
        >
            <Grid
                item
                xs={1}
                sm={1}
            >
                <Card>
                    <CardMedia
                        component={"img"}
                        src={Sportfeest21Foto}
                    />
                </Card>
            </Grid>
            <Grid
                item
                xs={1}
                sm={1}
            >
                <Card>
                    <CardMedia
                        component={"img"}
                        src={Sportfeest19Foto}
                    />
                </Card>
            </Grid>
            <Grid
                item
                xs={1}
                sm={1}
            >
                <Card>
                    <CardMedia
                        component={"img"}
                        src={WeekendGroepsfoto2022}
                    />
                </Card>
            </Grid>
            <Grid
                item
                xs={2}
                sm={3}
            >
                <Alert severity={"info"} color={"error"}
                       action={<Button endIcon={<ChevronRight/>} color={"inherit"} size={"small"} onClick={() => {
                           navigate("/sponsors");
                       }}>
                           Bekijk
                       </Button>}
                >Bekijk even onze sponsors!</Alert>
            </Grid>
        </Grid>
    </Fragment>;
});

export default Page;