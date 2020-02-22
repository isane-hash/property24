import React from "react";

import { Link } from "react-router-dom";
const Error = () => {
	return (
		<div>
			<h1>404</h1>
			<h5>Page not found</h5>
			<Link to="/" className="btn-primary">
				return home
			</Link>
		</div>
	);
};

export default Error;
