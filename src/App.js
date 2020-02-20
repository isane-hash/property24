import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Login from "./components/LoginRegister/LoginRegister";
import ErrorPage from "./pages/Error";
import HomePage from "./pages/Home";
import PropertiesPage from "./pages/PropertiesPage";

import UserProvider from "./context/UserContext";

import CssBaseline from "@material-ui/core/CssBaseline";

function App() {
	console.log(document.cookie);
	return (
		<UserProvider>
			<CssBaseline />
			<Navbar />
			<main>
				<Switch>
					<Route exact path="/" component={HomePage} />
					<Route path="/Login" component={Login} />
					<Route path="/properties" component={PropertiesPage} />
					<Route component={ErrorPage} />
				</Switch>
			</main>
			<Footer />
		</UserProvider>
	);
}

export default App;
