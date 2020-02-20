import React from "react";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
	heroContent: {
		backgroundColor: theme.palette.background.paper,
		padding: theme.spacing(8, 0, 6)
	},
	heroButtons: {
		marginTop: theme.spacing(4)
	},
	ctaButtons: {
		color: theme.palette.primary,
		textDecoration: "none"
	}
}));

const Home = props => {
	const classes = useStyles();

	return (
		<>
			<div className={classes.heroContent}>
				<Container maxWidth="lg">
					<Typography
						component="h1"
						variant="h2"
						align="center"
						color="textPrimary"
						gutterBottom
					>
						Find your dream home
					</Typography>
					<Typography
						variant="h5"
						align="center"
						color="textSecondary"
						paragraph
					>
						This website does not actually have anything to do with
						Property24. This project was only used for educational
						purposes during a coding bootcamp at the Launch Lab.
					</Typography>
					<div className={classes.heroButtons}>
						<Grid container spacing={2} justify="center">
							<Grid item>
								<Button variant="contained" color="primary">
									<Link
										className={classes.ctaButtons}
										to="/properties"
									>
										Find Property
									</Link>
								</Button>
							</Grid>
							<Grid item>
								<Button variant="outlined" color="primary">
									<Link
										className={classes.ctaButtons}
										to="/sell"
									>
										Sell Property
									</Link>
								</Button>
							</Grid>
						</Grid>
					</div>
				</Container>
			</div>

			<div>
				<Typography
					component="h1"
					variant="h5"
					align="center"
					color="textPrimary"
					gutterBottom
				>
					Lets think of something else good to put here
				</Typography>
			</div>
		</>
	);
};

export default Home;
