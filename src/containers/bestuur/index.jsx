import {Fragment, memo} from "react";
import {Avatar, AvatarGroup, Divider, Grid, Typography} from "@mui/material";
import {bestuur} from "../../config";
import Bestuurscard from "../../components/bestuur/bestuurscard";


const Page = memo(() => {
	return (<Fragment>
		<Typography align={"center"} variant={"h2"} component={"h1"}>
			Ons bestuur!
		</Typography>
		<Divider>
			<AvatarGroup max={4}>
				{
					bestuur.map(bestuurslid => {
						return <Avatar src={bestuurslid.img.image}
									   alt={bestuurslid.img.alt}
									   key={bestuurslid.firstName + bestuurslid.lastName} />;
					})
				}
			</AvatarGroup>
		</Divider>
		<Grid
			container
			spacing={2}
			columns={{
				xs: 1,
				sm: 2,
			}}
			sx={{
				marginTop: 1,
			}}
		>
			{
				bestuur
					.filter(bestuurslid => bestuurslid.isHoofdbestuur)
					.sort(bestuurslid => bestuurslid.firstName)
					.map(bestuurslid => {
						return (<Grid item xs={1} sm={1} key={bestuurslid.firstName + bestuurslid.lastName}>
							<Bestuurscard {...bestuurslid} />
						</Grid>);
					})
			}
		</Grid>
		<Grid
			container
			spacing={2}
			columns={{
				xs: 1,
				sm: 2,
				md: 3,
				lg: 4,
			}}
			sx={{
				marginTop: 1,
			}}
		>
			{
				bestuur
					.filter(bestuurslid => !bestuurslid.isHoofdbestuur)
					.sort(bestuurslid => bestuurslid.firstName)
					.map(bestuurslid => {
						return (
							<Grid item xs={1} sm={1} md={1} lg={1} key={bestuurslid.firstName + bestuurslid.lastName}>
								<Bestuurscard {...bestuurslid} />
							</Grid>);
					})
			}
		</Grid>
	</Fragment>);
});

export default Page;