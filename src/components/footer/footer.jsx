import {Fragment, memo} from "react";
import {Container, IconButton, Toolbar, Typography} from "@mui/material";
import {socialMedia} from "../../config";


const footer = memo(() => {
	return (<Fragment>
		<Container>
			<Toolbar disableGutters>
				<Typography component={"span"} variant={"caption"} noWrap sx={{flexGrow: 1}}>
					&copy; KLJ Stekene 2022
				</Typography>
				{socialMedia.map(link => {
					return (<IconButton
						sx={{color: link.color}}
						href={link.href}
						target={"_blank"}
						disabled={link.disabled}
						key={link.name}
					>
						{link.icon}
					</IconButton>);
				})}
			</Toolbar>
		</Container>
	</Fragment>);
});

export default footer;