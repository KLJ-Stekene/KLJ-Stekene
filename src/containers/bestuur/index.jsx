import {Fragment, memo} from "react";
import {Divider, Grid, Typography} from "@mui/material";
import {bestuur} from "../../config";
import {Bestuurscard} from "../../components";

const Page = memo(() => {
    return <Fragment>
        <Typography variant={"h3"} component={"h2"}>
            Ons bestuur
        </Typography>
        <Divider/>
        <Grid
            container
            spacing={2}
            columns={{
                xs: 1, sm: 2,
            }}
            sx={{
                marginTop: 1,
            }}
        >
            {bestuur
                .filter(bestuurslid => bestuurslid.isHoofdbestuur)
                .sort(bestuurslid => bestuurslid.firstName)
                .map(bestuurslid => {
                    return (<Grid item xs={1} sm={1} key={bestuurslid.firstName + bestuurslid.lastName}>
                        <Bestuurscard {...bestuurslid} />
                    </Grid>);
                })}
        </Grid>
        <Grid
            container
            spacing={2}
            columns={{
                xs: 1, sm: 2, md: 3, lg: 4,
            }}
            sx={{
                marginTop: 1,
            }}
        >
            {bestuur
                .filter(bestuurslid => !bestuurslid.isHoofdbestuur)
                .sort(bestuurslid => bestuurslid.firstName)
                .map(bestuurslid => {
                    return (<Grid item xs={1} sm={1} md={1} lg={1} key={bestuurslid.firstName + bestuurslid.lastName}>
                        <Bestuurscard {...bestuurslid} />
                    </Grid>);
                })}
        </Grid>
    </Fragment>;
});

export default Page;