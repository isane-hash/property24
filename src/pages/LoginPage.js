import React, { useState, useEffect } from "react";
import Alert from "@material-ui/lab/Alert";

import Login from "../components/Login/Login";
import SignUp from "../components/Signup/Signup";

export default function LoginPage() {
	const [isLogin, setIsLogin] = useState(true);
	const [error, setError] = useState("");
	useEffect(() => {
		if (document.location.hash === "#signup") {
			setIsLogin(false);
		} else {
			setIsLogin(true);
		}
	});

	return (
		<div>
			{error && <Alert severity="error">{error}</Alert>}
			{isLogin ? (
				<Login setIsLogin={setIsLogin} setError={setError} />
			) : (
				<SignUp setIsLogin={setIsLogin} setError={setError} />
			)}
		</div>
	);
}
