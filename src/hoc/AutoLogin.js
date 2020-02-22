import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { User } from "@geimaj/zaio-property24-api/api/User";

export function AutoLogin() {
	const { user, setUser } = useContext(UserContext);

	if (user.id === null) {
		User.whoami().then(user => {
			if (user.id && user.username !== "noone") {
				setUser(user);
			}
		});
	}

	return <></>;
}
