import React, { useState, useContext, useEffect, Suspense } from "react";

import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import PropertyProvider, { PropertyContext } from "../context/PropertyContext";
import { UserContext } from "../context/UserContext";

import Properties from "../containers/Properties";
import { Property as PropertyApi } from "@geimaj/zaio-property24-api/api/Property";

const useStyles = makeStyles(theme => ({
	heroContent: {
		backgroundColor: theme.palette.background.paper,
		padding: theme.spacing(8, 0, 6)
	},
	heroButtons: {
		marginTop: theme.spacing(4)
	},
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

function PropertiesPage() {
	const classes = useStyles();
	const [isPropertySearch, setIsPropertySearch] = useState(true);
	const [properties, setProperties] = useContext(PropertyContext);
	const { user } = useContext(UserContext);

	//fetch properties everytime user is updated
	useEffect(() => {
		(async () => {
			if (user.id) {
				try {
					setProperties(await PropertyApi.getAll());
				} catch (err) {
					throw err;
				}
			}
		})();
	}, [user]);

	return (
		<React.Fragment>
			<CssBaseline />
			<main>
				{/* Hero unit */}
				<div className={classes.heroContent}>
					<Container maxWidth="sm">
						<Typography
							component="h1"
							variant="h2"
							align="center"
							color="textPrimary"
							gutterBottom
						>
							Luxury awaits
						</Typography>
						<div>search bar here</div>
						<div className={classes.heroButtons}>
							<Grid container spacing={2} justify="center">
								<Grid item>
									<Button
										variant={
											isPropertySearch
												? "contained"
												: "outlined"
										}
										color="primary"
										onClick={() =>
											setIsPropertySearch(true)
										}
									>
										Properties
									</Button>
								</Grid>
								<Grid item>
									<Button
										variant={
											!isPropertySearch
												? "contained"
												: "outlined"
										}
										color="primary"
										onClick={() =>
											setIsPropertySearch(false)
										}
									>
										Agents
									</Button>
								</Grid>
							</Grid>
						</div>
					</Container>
				</div>
				<Suspense>
					<Properties properties={properties} />
				</Suspense>
			</main>
		</React.Fragment>
	);
}

export default function() {
	return (
		<PropertyProvider>
			<PropertiesPage />
		</PropertyProvider>
	);
}
