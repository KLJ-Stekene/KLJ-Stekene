import {Fragment, memo} from "react";
import {ImageList, ImageListItem, Typography} from "@mui/material";
import {startpaginaFotos} from "../../config";
import Nieuws from "./nieuws";
import Gemakske from "./gemakske";


const Page = memo(() => {
	return (<Fragment>
		<Typography align={"center"} variant={"h2"} component={"h1"}>
			KLJ Stekene
		</Typography>
		<ImageList variant={"masonry"} cols={2} gap={8}>
			{
				startpaginaFotos
					.map(foto => {
						return (<ImageListItem key={foto.alt}>
							<img src={foto.image} alt={foto.alt} loading={"lazy"}
								 width={foto.image.width} height={foto.image.height}/>
						</ImageListItem>)
					})
			}
			{/*
			<ImageListItem>
				<img src={WeekendGroepsfoto2022} alt={"Groepsfoto van op weekend in het jaar 2022"} loading={"lazy"}
					 width={1669} height={938}/>
			</ImageListItem>
			<ImageListItem>
				<img src={Sportfeest19Foto} alt={"Sportfeest foto van het jaar 2019"} loading={"lazy"} width={3871}
					 height={2177}/>
			</ImageListItem>
			<ImageListItem>
				<img src={Bestuursfoto2021} alt={"Bestuur groepsfoto van het jaar 2021"} loading={"lazy"}
					 width={3021} height={1699}/>
			</ImageListItem>
			<ImageListItem>
				<img src={Sportfeest21Foto} alt={"Sportfeestfoto van het jaar 2021"} loading={"lazy"} width={1442}
					 height={811}/>
			</ImageListItem>*/}
		</ImageList>
		<Nieuws />
		<Gemakske />
	</Fragment>);
});

export default Page;