import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import Navbar from "../components/Navbar";

const App = () => {
	return (
		<div>
			<Navbar />
			<BrowserRouter>
				<Route exact path="/" component={Home} />
				<Route exact path="/park-radio" component={Home} />
				<Route exact path="/contact" component={Contact} />
			</BrowserRouter>
		</div>
	);
};

export default App;
