import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
	cardGrid: {
		paddingTop: theme.spacing(8),
		paddingBottom: theme.spacing(8)
	},
	card: {
		height: "100%",
		display: "flex",
		flexDirection: "column"
	},
	cardMedia: {
		paddingTop: "56.25%" // 16:9
	},
	cardContent: {
		flexGrow: 1
	}
}));
export default function Properties({ properties }) {
	const classes = useStyles();

	return (
		<Container className={classes.cardGrid} maxWidth="md">
			<Grid container spacing={4}>
				{properties.map(property => (
					<Grid item key={property.id} xs={12} sm={6} md={4}>
						<Card className={classes.card}>
							<CardMedia
								className={classes.cardMedia}
								image={
									property.images.length > 0
										? property.images[0]
										: "https://source.unsplash.com/random"
								}
								title="Image title"
							/>
							<CardContent className={classes.cardContent}>
								<Typography
									gutterBottom
									variant="h5"
									component="h2"
								>
									{property.name}
								</Typography>
								<Typography>R{property.price}</Typography>
							</CardContent>
							<CardActions>
								<Button size="small" color="primary">
									View
								</Button>
								<Button size="small" color="primary">
									Edit
								</Button>
							</CardActions>
						</Card>
					</Grid>
				))}
			</Grid>
		</Container>
	);
}
