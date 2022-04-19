import {Fragment, memo} from "react";
import {
	Button,
	Card,
	CardActionArea,
	CardActions,
	CardContent,
	CardHeader,
	CardMedia,
	Divider,
	Grid,
	Typography,
} from "@mui/material";

import MauricesLiefdesLeven from "./../../img/gemakske/2022-02-14-maurice.png";
import MauriceOpPasen from "./../../img/gemakske/2021-04-17-maurice.png";


const container = memo(() => {
	const artikels = [
		{
			startDate:          new Date("2022-02-14"),
			endDate:            new Date("2022-04-14"),
			displayedEventDate: "Valentijn '22",
			title:              "Maurice's liefdesleven",
			text:               "",
			image:              MauricesLiefdesLeven,
			size:               {
				xs: 1,
				sm: 2,
				md: 2,
			},
		},
		{
			startDate:          new Date("2022-04-17"),
			endDate:            new Date("2022-06-01"),
			displayedEventDate: "Pasen '22",
			title:              "Het leven van Maurice: Pasen",
			text:               "",
			image:              MauriceOpPasen,
			size:               {
				xs: 1,
				sm: 2,
				md: 2,
			},
		},
	];

	return (<Fragment>
		<Divider sx={{marginTop: 2}}>
			<Typography variant={"h4"} component={"h2"}>
				'T Gemakske
			</Typography>
		</Divider>
		<Grid
			container
			spacing={2}
			columns={{
				xs: 1,
				sm: 2,
				md: 3,
			}}
		>
			{
				artikels
					.filter(artikel => (!artikel.startDate || artikel.startDate <= new Date()) && (!artikel.endDate || artikel.endDate >= new Date()))
					.map(article => {
						return (<Grid item {...article.size} key={article.title}>
							<Card>
								{
									article.title &&
									<CardHeader title={article.title} subheader={article.displayedEventDate} />
								}
								{
									article.links?.length === 1 ?
										<CardActionArea href={article.links[0].href}
														target={"_blank"}
														disabled={article.links[0].disabled}>
											{
												article.image &&
												<CardMedia component={"img"} src={article.image} alt={""} />
											}
										</CardActionArea>
										:
										article.image &&
										<CardMedia component={"img"} src={article.image} alt={""} />
								}
								{
									article.text &&
									<CardContent>
										<Typography component={"span"} variant={"body1"}>
											{article.text}
										</Typography>
									</CardContent>
								}
								{
									article.links && article.links[0].displayedText &&
									<CardActions>
										{
											article.links.map(link => {
												return (<Button
													size={"small"}
													disabled={link.disabled}
													href={link.href}
													target={"_blank"}
													key={link.name}>
													{link.displayedText}
												</Button>);
											})
										}
									</CardActions>
								}
							</Card>
						</Grid>);
					})
			}
			{
				artikels
					.filter(artikel => (!artikel.startDate || artikel.startDate <= new Date()) && (!artikel.endDate || artikel.endDate >= new Date()))
					.length <= 1 &&
				<Grid item xs={1} sm={1} md={1} lg={1} xl={1}>
					<Card>
						<CardHeader title={"Redactie 't Gemakske is hard in werking!"}
									subheader={"Momenteel is er " + (artikels
																		 .filter(artikel => (!artikel.startDate || artikel.startDate <= new Date()) && (!artikel.endDate || artikel.endDate >= new Date()))
																		 .length === 1 ? "maar 1" : "geen") + " artikel, maar niet getreurd, dan is er zeker en vast een nieuw onderweg!"} />
					</Card>
				</Grid>
			}
		</Grid>
	</Fragment>);
});

export default container;