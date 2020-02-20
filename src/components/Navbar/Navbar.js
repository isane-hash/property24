import React from "react";
import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

export default function Navbar() {
	return (
		<>
			<AppBar position="relative">
				<Toolbar>
					{/* <CameraIcon className={classes.icon} /> */}
					icon
					<Typography variant="h6" color="inherit" noWrap>
						Property24
					</Typography>
					<div className="links">
						<Link to="/Login">login</Link>
						<Link to="/Login#signup">signup</Link>
						<Link to="/">Home</Link>
						<Link to="/properties">Properties</Link>
						<Link to="/Login#signup">Developments</Link>
						<Link to="/Login#signup">Commercial</Link>
						<Link to="/Login#signup">Calculators</Link>
						<Link to="/Login#signup">Advice</Link>
						<Link to="/Login#signup">List Privatly</Link>
						<Link to="/Login#signup">bell</Link>
					</div>
				</Toolbar>
			</AppBar>
		</>
	);
}
