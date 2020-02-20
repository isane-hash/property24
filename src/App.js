import React from "react";
// import "./App.css";

// import Rooms from "./pages/Rooms";
// import SingleRoom from "./pages/SingleRoom";
// import Error from "./pages/Error";
// import Login from "./components/LoginRegister";
import Login from "./hoc/LoginHoc";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        {/* <Route exact path="/rooms/" component={Rooms} />
        <Route exact path="/rooms/:slug" component={SingleRoom} />
      <Route component={Error} /> */}
        <Route exact path="/Login" component={Login} />
      </Switch>
    </>
  );
}

export default App;
