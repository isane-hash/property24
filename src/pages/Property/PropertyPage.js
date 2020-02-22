import React, { useState, useContext, useEffect, Suspense } from "react";

import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { useLocation } from "react-router-dom";
import { PropertyContext } from "../../context/PropertyContext";

function useQuery() {
	return new URLSearchParams(useLocation().search);
}

export default function PropertyPage() {
	const query = useQuery();
	const id = query.get("id");

	//TODO: get property  from API by id rather than flitering context
	const { properties, setProperties } = useContext(PropertyContext);
	const property = properties.filter(p => p.id === id)[0];

	return property ? (
		<React.Fragment>
			<Container>
				<Grid>
					<Typography>{property.name}</Typography>
					<Grid item>
						<img
							src={
								property.images.lentgh > 0
									? property.images[0]
									: ""
							}
						/>
					</Grid>
				</Grid>
				<code>{JSON.stringify(property)}</code>
			</Container>
		</React.Fragment>
	) : (
		<>Not a property...</>
	);
}
