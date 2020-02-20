import React from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import Banner from "../components/Banner";

import PropertyList from "../components/PropertyList";

const Home = props => {
	return (
		<>
			{/* <Hero>
				<Banner
					title="just buy a house"
					subtitle="starting price R850 000"
				>
					<Link to="/rooms" className="btn-primary">
						Houses
					</Link>
				</Banner>
			</Hero> */}

			<PropertyList />
		</>
	);
};

export default Home;
