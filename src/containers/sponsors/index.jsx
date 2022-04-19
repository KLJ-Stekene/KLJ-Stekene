import {Fragment, memo} from "react";
import {Divider, Typography} from "@mui/material";


const Page = memo(() => {
	return (<Fragment>
		<Typography align={"center"} variant={"h3"} component={"h1"}>
			Sponsors
		</Typography>
		<Divider />
		<Typography component={"span"} variant={"body1"}>
			Er zijn zeker en vast sponsors! Er wordt echter nog gewerkt aan deze website!
		</Typography>
	</Fragment>);
});

export default Page;