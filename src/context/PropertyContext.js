import React, { createContext, useState } from "react";

export const PropertyContext = createContext();

const PropertyProvider = ({ children }) => {
	const [properties, _setProperties] = useState([
		{
			id: 0,
			name: "5 ocean view",
			number: 5,
			street: "ocean view",
			beds: 4,
			baths: 4,
			price: 2000000,
			images: [],
			city: ""
		}
	]);

	const setProperties = _properties => {
		_setProperties(
			_properties.map(property => {
				const res = {
					...property,
					id: property._id
				};
				delete res["_id"];
				return res;
			})
		);
	};

	return (
		<PropertyContext.Provider value={{ properties, setProperties }}>
			{children}
		</PropertyContext.Provider>
	);
};

export default PropertyProvider;
