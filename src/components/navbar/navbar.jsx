import {Fragment, memo, useCallback, useState} from "react";
import {AppBar, Box, Button, Collapse, Container, Drawer, IconButton, List, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography, useMediaQuery} from "@mui/material";
import {Close, Menu} from "@mui/icons-material";
import {useNavigate} from "react-router-dom";
import {links} from "../../config";


const navbar = memo(() => {
	let navigate       = useNavigate();
	const isSmartphone = useMediaQuery("only screen and (max-width:499px)");

	const [isOpenedNavDrawer, setOpenedNavDrawer] = useState(false);
	const toggleNavDrawer                         = useCallback(() => {
		setOpenedNavDrawer(!isOpenedNavDrawer);
	}, [isOpenedNavDrawer, setOpenedNavDrawer]);

	return (<Fragment>
		<AppBar position={"sticky"} sx={{zIndex: (theme) => theme.zIndex.drawer + 1}}>
			<Container>
				<Toolbar disableGutters>
					<Typography
						variant={"h6"}
						noWrap
						component={"div"}
						sx={{flexGrow: 1}}
					>
						KLJ Stekene
					</Typography>
					<Collapse orientation={"horizontal"} in={isSmartphone}>
						<IconButton
							edge={"end"}
							color={"inherit"}
							onClick={toggleNavDrawer}>
							{isOpenedNavDrawer ? <Close /> : <Menu />}
						</IconButton>
					</Collapse>
					<Collapse orientation={"horizontal"} in={!isSmartphone}>
						<Box component={"div"} sx={{display: "flex"}}>
							{links.map(link => {
								return link.tekst ? (<Button sx={{color: link.color}}
															 onClick={() => {
																 navigate(link.url);
															 }} startIcon={link.icon}
															 disabled={link.disabled}
															 key={link.url}>
									<Typography variant={"button"} noWrap>
										{link.tekst}
									</Typography>
								</Button>) : (<IconButton sx={{color: link.color}}
														  onClick={() => {
															  navigate(link.url);
														  }}
														  disabled={link.disabled}
														  key={link.url}>
									{link.icon}
								</IconButton>);
							})}
						</Box>
					</Collapse>
				</Toolbar>
			</Container>
		</AppBar>
		<Drawer keepMounted
				anchor={"right"}
				open={isSmartphone && isOpenedNavDrawer}
				onClose={() => {
					setOpenedNavDrawer(false);
				}}>
			<Toolbar>
				<Typography
					variant={"h6"}
					noWrap
					component={"div"}
					sx={{flexGrow: 1}}
				>
					KLJ Stekene
				</Typography>
				<IconButton
					edge={"end"}
					color={"inherit"}
					onClick={toggleNavDrawer}>
					{isOpenedNavDrawer ? <Close /> : <Menu />}
				</IconButton>
			</Toolbar>
			<List>
				{links.map(link => {
					return (<ListItemButton
						onClick={() => {
							navigate(link.url);
							setOpenedNavDrawer(false);
						}}
						disabled={link.disabled}
						key={link.url}>
						{link.icon && <ListItemIcon sx={{color: link.color}}>{link.icon}</ListItemIcon>}
						{link.tekst && <ListItemText sx={{color: link.color}}>{link.tekst}</ListItemText>}
					</ListItemButton>);
				})}
			</List>
		</Drawer>
	</Fragment>);
});

export default navbar;