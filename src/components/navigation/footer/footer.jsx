import {memo} from "react";
import {Container, IconButton, Toolbar, Typography} from "@mui/material";
import {socialMediaLinks} from "../../../config";

const footer = memo(() => {
    return <Container>
        <Toolbar disableGutters>
            <Typography component={"span"} variant={"caption"} noWrap sx={{flexGrow: 1}}>
                &copy; KLJ Stekene 2022
            </Typography>
            {
                socialMediaLinks.map((link, index) => <SocialMediaButton
                    key={index}
                    {...link}
                />)
            }
        </Toolbar>
    </Container>;
});

const SocialMediaButton = memo(({icon, color, href, target, disabled}) => <IconButton
    sx={{color: color}}
    href={href}
    target={target}
    disabled={disabled}
>
    {icon}
</IconButton>);

export default footer;