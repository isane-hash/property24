import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";

export default function Navbar() {
	return (
		<nav className="navbar">
			<div className="logo">
				<Link to="/">
					<h1>Property24</h1>
				</Link>
			</div>

			<div className="links">
				<Link to="/Login">login</Link>
				<Link to="/Login#signup">signup</Link>
				<Link to="/Login#signup">Home</Link>
				<Link to="/Login#signup">Properties</Link>
				<Link to="/Login#signup">Developments</Link>
				<Link to="/Login#signup">Commercial</Link>
				<Link to="/Login#signup">Calculators</Link>
				<Link to="/Login#signup">Advice</Link>
				<Link to="/Login#signup">List Privatly</Link>
				<Link to="/Login#signup">bell</Link>
			</div>
		</nav>
	);
}
