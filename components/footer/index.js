import {memo} from "react";
import {Container, IconButton, Toolbar, Typography} from "@mui/material";
import {FacebookOutlined, Instagram} from "@mui/icons-material";

const socialMedia = [{
    icon:     <FacebookOutlined/>,
    color:    "inherit",
    href:     "https://facebook.com/KljStekene",
    target:   "_blank",
    disabled: false,
}, {
    icon:     <Instagram/>,
    color:    "inherit",
    href:     "https://instagram.com/kljstekene",
    target:   "_blank",
    disabled: false,
}];

const footer = memo(() => {
    return <Container>
        <Toolbar disableGutters>
            <Typography component={"span"} variant={"caption"} noWrap sx={{flexGrow: 1}}>
                &copy; KLJ Stekene 2022
            </Typography>
            {socialMedia
                .map((socialMediaLink, index) => <SocialMediaIconButton key={index} {...socialMediaLink}/>)}
        </Toolbar>
    </Container>;
});

const SocialMediaIconButton = memo(({icon, color, href, target, disabled}) => <IconButton
    sx={{color: color}}
    href={href}
    target={target}
    disabled={disabled}
>
    {icon}
</IconButton>);

footer.displayName = "footer";
SocialMediaIconButton.displayName = "social media Button";

export default footer;