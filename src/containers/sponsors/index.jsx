import {Fragment, memo} from "react";
import {Typography} from "@mui/material";


const Page = memo(() => {
	return (<Fragment>
		<Typography align={"center"} variant={"h1"} component={"h1"}>
			Sponsors
		</Typography>
	</Fragment>);
});

export default Page;