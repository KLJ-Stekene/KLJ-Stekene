import {Fragment, memo} from "react";
import {Container, IconButton, Toolbar, Typography} from "@mui/material";
import {Facebook, Instagram} from "@mui/icons-material";
import {blue, deepOrange} from "@mui/material/colors";


const Footer = memo(() => {
	const socialMedia = [
		{
			name:     "Facebook",
			icon:     <Facebook />,
			color:    blue.A700,
			disabled: false,
			href:     "https://www.facebook.com/KljStekene/?utm_source=kljstekene.be&utm_medium=Referral",
		},
		{
			name:     "Instagram",
			icon:     <Instagram />,
			color:    deepOrange.A400,
			disabled: false,
			href:     "https://instagram.com/kljstekene?utm_source=kljstekene.be&utm_medium=Referral",
		},
	];

	return (<Fragment>
		<Container>
			<Toolbar disableGutters>
				<Typography component={"span"} variant={"caption"} noWrap sx={{flexGrow: 1}}>
					&copy; KLJ Stekene
				</Typography>
				{
					socialMedia.map(link => {
						return (<IconButton
							sx={{color: link.color}}
							href={link.href}
							target={"_blank"}
							disabled={link.disabled}
							key={link.name}
						>
							{link.icon}
						</IconButton>);
					})
				}
			</Toolbar>
		</Container>
	</Fragment>);
});

export default Footer;