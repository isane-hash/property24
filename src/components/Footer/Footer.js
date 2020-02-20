import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

function Copyright() {
	return (
		<Typography variant="body2" color="textSecondary" align="center">
			{"Copyright © "}
			{new Date().getFullYear()}
			{"."}
		</Typography>
	);
}
const useStyles = makeStyles(theme => ({
	footer: {
		backgroundColor: theme.palette.background.paper,
		padding: theme.spacing(6)
	}
}));
export default function Footer() {
	const classes = useStyles();
	return (
		<footer className={classes.footer}>
			<Typography variant="h6" align="center" gutterBottom>
				Zaio | Property24 | LaunchLab
			</Typography>
			<Typography
				variant="subtitle1"
				align="center"
				color="textSecondary"
				component="p"
			>
				built by Jamie, James &nbsp; Isane
			</Typography>
			<Copyright />
		</footer>
	);
}
