import {Fragment, memo} from "react";
import {Button, Card, CardActions, CardContent, CardHeader, CardMedia, Divider, Grid, IconButton, Typography} from "@mui/material";
import {infoKLJ} from "../../config";

const Page = memo(() => {
    return <Fragment>
        <Typography variant={"h3"} component={"h2"}>
            Over ons...
        </Typography>
        <Divider/>
        <Grid
            container
            spacing={2}
            columns={{
                xs: 1, sm: 2, md: 3,
            }}
            sx={{marginTop: 1}}
        >
            {infoKLJ.map(info => {
                return (<Grid item {...info.size}>
                    <Card>
                        {info.title && <CardHeader title={info.title}
                                                   action={info.icon &&
                                                       <IconButton disabled>{info.icon}</IconButton>}/>}
                        {info.specialContent}
                        {info.img && <CardMedia component={"img"} src={info.img.image} alt={info.img.alt}/>}
                        {info.text && <CardContent>
                            <Typography variant={"body1"}>
                                {info.text}
                            </Typography>
                        </CardContent>}
                        {info.buttons && <CardActions>
                            {info.buttons.map(button => {
                                return (<Button disabled={button.disabled}
                                                target={"_blank"}
                                                href={button.href}
                                >
                                    {button.displayText}
                                </Button>);
                            })}
                        </CardActions>}
                    </Card>
                </Grid>);
            })}
        </Grid>
    </Fragment>;
});

export default Page;