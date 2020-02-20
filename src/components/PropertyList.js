import React, { Suspense } from "react";

import PropertyProvider from "../context/PropertyContext";
import Propeties from "../containers/Properties";

const PropertyList = () => {
	return (
		<PropertyProvider>
			<Suspense>
				<Propeties />
			</Suspense>
		</PropertyProvider>
	);
};

export default PropertyList;
