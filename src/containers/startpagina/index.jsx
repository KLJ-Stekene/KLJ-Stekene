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
		</ImageList>
		<Nieuws />
		<Gemakske />
	</Fragment>);
});

export default Page;