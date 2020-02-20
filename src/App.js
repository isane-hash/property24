import React from "react";
import { Switch, Route } from "react-router-dom";
// import "./App.css";

import Login from "./components/LoginRegister";
import Navbar from "./components/Navbar";
import ErrorPage from "./pages/Error";
import HomePage from "./pages/Home";

import UserProvider from "./context/UserContext";
// import UserAPI from "zaio-property24-api/api/User";

function App() {
	console.log(document.cookie);
	return (
		<UserProvider>
			<Navbar />
			<Switch>
				<Route exact path="/" component={HomePage} />
				{/* <Route exact path="/rooms/" component={Rooms} />
        <Route exact path="/rooms/:slug" component={SingleRoom} /> */}
				<Route exact path="/Login" component={Login} />
				<Route component={ErrorPage} />
			</Switch>
		</UserProvider>
	);
}

export default App;
