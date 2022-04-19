import {Fragment, memo} from "react";
import {Typography} from "@mui/material";
import Nieuws from "./nieuws";
import Gemakske from "./gemakske";


const Page = memo(() => {
	return (<Fragment>
		<Typography align={"center"} variant={"h2"} component={"h1"}>
			KLJ Stekene
		</Typography>
		<Nieuws />
		<Gemakske />
	</Fragment>);
});

export default Page;