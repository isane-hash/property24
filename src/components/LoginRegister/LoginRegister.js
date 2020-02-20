import React, { useContext, useState } from "react";
import { User } from "zaio-property24-api/api/User";
import { UserContext } from "../../context/UserContext";
import { useHistory } from "react-router-dom";
import "./LoginRegister.css";

export default function Login(props) {
	//function state
	const [email, setEmail] = useState("");
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [fullname, setFullname] = useState("");
	const [isLogin, setIsLogin] = useState(true);
	const [errors, setErrors] = useState([]);
	const [message, setMessage] = useState("");

	//context
	const { setUser } = useContext(UserContext);

	const history = useHistory();

	const handleFormSubmit = e => {
		e.preventDefault();
		setErrors([]);
		setMessage("");
		if (isLogin) {
			new User(username, password)
				.login()
				.then(res => {
					console.log("login res:");
					console.log(res);
					if (res.error) {
						setErrors([res.error]);
					} else {
						const user = res;
						setUser(user);
						history.push("/");
					}
				})
				.catch(err => {
					setErrors([err.message]);
				});
		} else {
			new User(username, password, fullname, email)
				.signup()
				.then(res => {
					if (res.error) {
						setErrors([res.err]);
					} else {
						setMessage("Your account has been created");
						setIsLogin(true);
					}
				})
				.catch(err => {
					setErrors([err.message]);
				});
		}
	};

	let errorNotification =
		errors.length > 0 ? <div className="Error">{errors}</div> : <></>;

	let messageNotification = message ? (
		<div className="info">{message}</div>
	) : (
		<></>
	);

	const formTitle = isLogin ? "Login" : "Sign up";

	const loginOnlySection = isLogin ? (
		<div>
			<button onClick={() => setIsLogin(false)}>New? Signup!</button>
		</div>
	) : (
		<></>
	);

	//only show when isLogin = false
	const signupOnlySection = isLogin ? (
		<></>
	) : (
		<>
			Already registered?
			<button
				onClick={e => {
					e.preventDefault();
					setIsLogin(true);
				}}
			>
				login!
			</button>
			<label htmlFor="email">Email</label>
			<input
				type="email"
				name="email"
				value={email}
				onChange={e => setEmail(e.target.value)}
			></input>
			<label htmlFor="email">Full name</label>
			<input
				type="text"
				name="fullname"
				value={fullname}
				onChange={e => setFullname(e.target.value)}
			></input>
		</>
	);

	return (
		<div className="form_block">
			<div id="title">{formTitle}</div>
			<div className="body">
				{errorNotification}
				{messageNotification}

				<form>
					{signupOnlySection}
					{loginOnlySection}
					<label htmlFor="username">Username</label>
					<input
						type="text"
						value={username}
						onChange={e => setUsername(e.target.value)}
						name="username"
					/>

					<label htmlFor="password">Password</label>
					<input
						type="password"
						value={password}
						onChange={e => setPassword(e.target.value)}
						name="password"
					/>

					<input
						type="submit"
						className="btn-primary"
						value={formTitle}
						onClick={handleFormSubmit}
					></input>
				</form>
			</div>
		</div>
	);
}
