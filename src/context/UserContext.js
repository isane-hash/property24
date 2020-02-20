import React, { createContext, useState } from "react";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
	const [user, _setUser] = useState({
		id: null,
		fullname: null,
		username: null,
		email: null
	});

	const setUser = _user => {
		_setUser({ ...user, ..._user });
	};

	return (
		<UserContext.Provider value={{ user, setUser }}>
			{children}
		</UserContext.Provider>
	);
};

export default UserProvider;
