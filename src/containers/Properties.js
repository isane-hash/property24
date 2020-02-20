import React, { useContext } from "react";

import { PropertyContext } from "../context/PropertyContext";
import { UserContext } from "../context/UserContext";
import Property from "../components/Property";
import { Property as PropertyApi } from "zaio-property24-api/api/Property";

const Propeties = () => {
	const { properties, setProperties } = useContext(PropertyContext);
	const { user } = useContext(UserContext);
	if (user.id) {
		PropertyApi.getAll().then(_properties => {
			setProperties(_properties);
		});
	}
	console.log(properties);

	// we should only fetch latest data if we are logged in
	console.log(user);
	return (
		<div className="properties">
			{properties.map(property => {
				return <Property key={property.id} property={property} />;
			})}
		</div>
	);
};

export default Propeties;
