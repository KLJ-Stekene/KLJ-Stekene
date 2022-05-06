import {Fragment, memo} from "react";
import {Button, Card, CardActionArea, CardActions, CardContent, CardHeader, CardMedia, Divider, Grid, Typography} from "@mui/material";
import {gemakske as artikels} from "../../../config";


const container = memo(() => {
	return <Fragment>
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
								{article.title &&
								 <CardHeader title={article.title} subheader={article.displayedEventDate} />}
								{article.links?.length === 1 ? <CardActionArea href={article.links[0].href}
																			   target={"_blank"}
																			   disabled={article.links[0].disabled}>
									{article.image && <CardMedia component={"img"} src={article.image} alt={""} />}
								</CardActionArea> : article.image && <CardMedia component={"img"}
																				src={article.image}
																				alt={""} />}
								{article.text && <CardContent>
									<Typography component={"span"} variant={"body1"}>
										{article.text}
									</Typography>
								</CardContent>}
								{article.links && article.links[0].displayedText && <CardActions>
									{article.links.map(link => {
										return (<Button
											size={"small"}
											disabled={link.disabled}
											href={link.href}
											target={"_blank"}
											key={link.name}>
											{link.displayedText}
										</Button>);
									})}
								</CardActions>}
							</Card>
						</Grid>);
					})}
			{artikels
				 .filter(artikel => (!artikel.startDate || artikel.startDate <= new Date()) && (!artikel.endDate || artikel.endDate >= new Date())).length <= 1 &&
			 <Grid item xs={1} sm={1} md={1} lg={1} xl={1}>
				 <Card>
					 <CardHeader title={"Redactie 't Gemakske is hard in werking!"}
								 subheader={"Momenteel is er " + (artikels
																	  .filter(artikel => (!artikel.startDate || artikel.startDate <= new Date()) && (!artikel.endDate || artikel.endDate >= new Date())).length === 1 ? "maar 1" : "geen") + " artikel, maar niet getreurd, dan is er zeker en vast een nieuw onderweg!"} />
				 </Card>
			 </Grid>}
		</Grid>
	</Fragment>;
});

export default container;