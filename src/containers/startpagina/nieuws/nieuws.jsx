import {Fragment, memo} from "react";
import {Button, Card, CardActionArea, CardActions, CardContent, CardHeader, CardMedia, Divider, Grid, Typography} from "@mui/material";
import {nieuws as artikels} from "../../../config";


const container = memo(() => {
	return <Fragment>
		<Divider sx={{marginTop: 2}}>
			<Typography variant={"h4"} component={"h2"}>
				Nieuws
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
									<CardHeader title={article.title} subheader={article.displayedEventDate}/>}
								{article.hrefs?.length === 1 ? <CardActionArea href={article.hrefs[0].href}
																			   target={"_blank"}
																			   disabled={article.hrefs[0].disabled}>
									{article.image && <CardMedia component={"img"} src={article.image} alt={""}/>}
								</CardActionArea> : article.image && <CardMedia component={"img"}
																				src={article.image}
																				alt={""}/>}
								{article.text && <CardContent>
									<Typography component={"span"} variant={"body1"}>
										{article.text}
									</Typography>
								</CardContent>}
								{article.hrefs && article.hrefs[0].displayedText && <CardActions>
									{article.hrefs.map(link => {
										return (<Button
											size={"small"}
											disabled={link.disabled}
											href={link.href}
											target={"_blank"}
											key={link.name}>
											{link.displayedText}
										</Button>);
									})}
									{article.links?.map(link => {
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
			{<Grid item xs={1} sm={2} md={3}>
				{artikels
					 .filter(artikel => (!artikel.startDate || artikel.startDate <= new Date()) && (!artikel.endDate || artikel.endDate >= new Date())).length === 0 &&
				 <Card>
					 <CardHeader title={"Niets nieuws!"}
								 subheader={"Kom binnen een paar weken terug om te zien of we nieuws hebben of evenementen gepland hebben."} />
				 </Card>}
			</Grid>}
		</Grid>
	</Fragment>;
});

export default container;